import React,{Component} from 'react';
import './css/iconfont.css';
import './css/themeDetailView.css';


// const THEME_DETAIL_API = 'https://raw.githubusercontent.com/cielzhao/react-zhihu/master/data/news/themedetail.json';
const THEME_DETAIL_API = 'https://crossorigin.me/http://news.at.zhihu.com/api/4/theme/';


const LOADING = 'loading';
const SUCCESS = 'success';
const  ERROR = 'error';

const SHOW = "show";
const HIDE = "hide";

class ThemeDetailView extends Component{

  constructor(props){
    super(props);
    this.state = {
      showState:SHOW,
      state:LOADING,
      themeName:null,
      topStoryImage:null,
      topStoryTitle:null,
      editors:null,
      stories:null,
      errorMessage:null,
    }
  }

  componentDidMount(){
    this.showLoading();
    this.fetchData();
  }

  fetchData(){
    fetch(THEME_DETAIL_API + this.props.match.params.id)
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
      themeName:value.name,
      topStoryImage:value.background,
      topStoryTitle:value.description,
      editors:value.editors,
      stories:value.stories,
    });
  }

  onError(error){
    this.setState({
      status:ERROR,
      errorMessage:error.message,
    });
  }

  render(){
    var themeName = this.state.themeName;
    var topStoryImage = this.state.topStoryImage;
    var topStoryTitle = this.state.topStoryTitle;
    var editors = this.state.editors;
    var stories = this.state.stories;
    if (themeName!=null & topStoryImage!=null & topStoryTitle!=null & editors != null & stories!=null) {
      var storiesList = stories.map(function(story, index) {
        var storyImg = story.images;
        if(storyImg!=null){
          return (
            <li className="story-item" key={index}>
              <img className="story-img" src={storyImg} />
              <h3 className="story-title">{story.title}</h3>
            </li>
          );
        }else{
          return (
            <li className="story-item" key={index}>
              <h3 className="story-title">{story.title}</h3>
            </li>
          );
        }
      });

      var editorList = editors.map(function(editor, index) {
          return (
            <div className="editor-item" key={index}>
                <span className="editor-name">{editor.name}</span>
                <img className="editor-avatar" src={editor.avatar} />
            </div>
          );
      });

      return (
        <div className="theme-detail-container">
          <div className="action-bar">
              <div>
                  <i className="iconfont menu">&#xe745;</i>
                  <span>{themeName}</span>
              </div>
              <div className="watch">
                  <i className="iconfont add">&#xe620;</i>
              </div>
          </div>
          <div className="top-story" style={{backgroundImage:'url(' + topStoryImage + ')'}}>
              <h1 className="top-story-title">{topStoryTitle}</h1>
          </div>
          <div className="editor-list">{editorList}</div>
          <div className="story-list">{storiesList}</div>
        </div>
      );
    }

    return null;
  }
}

export default ThemeDetailView;
