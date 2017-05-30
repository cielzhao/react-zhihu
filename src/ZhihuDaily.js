import React, {Component} from 'react';
import StoryListView from './StoryListView';
import TopStoryListView from './TopStoryListView';
import ActionBar from './ActionBar';
import LoadLayout from './LoadLayout';
import ProgressBar from './ProgressBar';
import ThemeListView from './ThemeListView';
import './css/zhihuDaily.css';


const STORIES_API = 'https://raw.githubusercontent.com/cielzhao/react-zhihu/master/data/news/latest.json';

// const STORIES_API = 'http://crossorigin.me/http://news.at.zhihu.com/api/4/news/latest';


const LOADING = 'loading';
const SUCCESS = 'success';
const  ERROR = 'error';

const SHOW_DRAWER = "show";
const HIDE_DRAWER = "hide";

class ZhihuDaily extends Component{

  constructor(props){
    super(props);
    this.state = {
      drawerState:HIDE_DRAWER,
      status:LOADING,
      topStories:null,
      stories:null,
      errorMessage:null,
    }
  }

  componentDidMount(){
    this.showLoading();
    this.fetchData();
  }

  fetchData(){
    fetch(STORIES_API)
    .then((response)=>response.json())
    .then(value=>this.onSuccess(value))
    .catch(error=>this.onError(error));
  }

  showLoading(){
      this.setState({
          status:LOADING,
      });
  }

  onSuccess(value){
    this.setState({
      status:SUCCESS,
      topStories:value.top_stories,
      stories:value.stories,
    });
  }

  onError(error){
    this.setState({
      status:ERROR,
      errorMessage:error.message
    });
  }

  render(){
    var contentMask;
    if (this.state.drawerState == SHOW_DRAWER) {
      contentMask = "content-mask show";
    }else {
      contentMask = "content-mask";
    }
    return (
      <div>
        <ActionBar
          onActionBarMenuClick={this.onActionBarMenuClick.bind(this)}/>
        <LoadLayout
          status={this.state.status}
          renderContent={this.renderContentView.bind(this)}
          onReloadAction={this.onReloadAction.bind(this)}
          errorMessage = {this.state.errorMessage} />
        <ThemeListView showState={this.state.drawerState}/>
        <div className={contentMask}  onClick={this.onActionBarMenuClick.bind(this)}></div>
      </div>
    );
  }

  onActionBarMenuClick(){
    // alert("3");
    if(this.state.drawerState == HIDE_DRAWER){
      this.setState({
        drawerState:SHOW_DRAWER
      });
    }else {
      this.setState({
        drawerState:HIDE_DRAWER
      });
    }
  }

  onReloadAction(){
    this.fetchData();
  }

  renderContentView(){
      return (
          <div className="content">
              <TopStoryListView className="slide" stories={this.state.topStories} />
              <StoryListView className="listview" stories={this.state.stories} />
          </div>
      );
  }
}



export default ZhihuDaily;
