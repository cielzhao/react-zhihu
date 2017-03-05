import React, {Component} from 'react';
import StoryListView from './StoryListView';
import LoadLayout from './LoadLayout';
import ProgressBar from './ProgressBar';
import ErrorView from './ErrorView';

const STORIES_API = 'https://raw.githubusercontent.com/cielzhao/react-zhihu/master/data/news/latest.json';

const LOADING = 'loading';
const SUCCESS = 'success';
const  ERROR = 'error';

class ZhihuDaily extends Component{

  constructor(props){
    super(props);
    this.state = {
      status:LOADING,
      topStories:null,
      stories:null,
      errorMessage:null,
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(STORIES_API)
    .then((response)=>response.json())
    .then(value=>this.onSuccess(value))
    .catch(error=>this.onError(error));
  }

  onSuccess(value){
    this.setState({
      status:SUCCESS,
      topStories:value.topStories,
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
    // return (
    //   <div>
    //     <h1>Zhihu Daily</h1>
    //
    //     <LoadLayout
    //       status={this.state.status}
    //       errorMessage={this.state.errorMessage}
    //       onReloadAction={this.onReloadAction}
    //       renderContent={this.renderListView}/>
    //   </div>
    // );
    if (this.state.status == LOADING) {
      return (<ProgressBar />);
    }else if(this.state.status == ERROR){
      return (<ErrorView message = {this.state.errorMessage}/>);
    }else if (this.state.status == SUCCESS) {
      return this.renderListView();
    }else {
      return (<div>Empty</div>);
    }
  }

  onReloadAction(){
    this.fetchData();
  }

  renderListView(){
    return (<StoryListView stories={this.state.stories} />);
  }
}



export default ZhihuDaily;
