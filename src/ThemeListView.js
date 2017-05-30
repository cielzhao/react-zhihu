import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/iconfont.css';
import './css/themeListView.css';

const THEME_API = 'https://raw.githubusercontent.com/cielzhao/react-zhihu/master/data/news/themes.json';
// const THEME_DETAIL_API = 'https://crossorigin.me/http://news.at.zhihu.com/api/4/themes';


const LOADING = 'loading';
const SUCCESS = 'success';
const  ERROR = 'error';

const SHOW = "show";
const HIDE = "hide";

class ThemeListView extends Component{

  constructor(props){
    super(props);
    this.state = {
      state:LOADING,
      theme:null,
      errorMessage:null,
    }
  }

  componentDidMount(){
    this.showLoading();
    this.fetchData();
  }

  fetchData(){
    fetch(THEME_API)
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
      theme:value.others,
    });
  }

  onError(error){
    this.setState({
      status:ERROR,
      errorMessage:error.message,
    });
  }

  render(){
    var theme = this.state.theme;
    if ( theme !== null) {
      var themeList = theme.map(function(theme, index) {
        var themeId = theme.id;
        return (
          <Link to={"/themeDetailView/" + themeId}>
          <li className="theme-list-item" key={index}>
            <span>{theme.name}</span>
            <i className="iconfont add">&#xe620;</i>
          </li>
          </Link>);
      });

      var className;
      if (this.props.showState == SHOW) {
        className = "theme-container slide-in";
      }else {
        className = "theme-container";
      }
      return (
          <div className={className}>
          <div className="theme-content">
              <div className="personal">
                  <div className="avator">
                      <div className="img"></div>
                      <span>Ciel</span>
                  </div>

                  <div className="about">
                      <i className="iconfont collect">&#xe63c;</i>
                      <span>我的收藏</span>
                      <i className="iconfont download">&#xe66b;</i>
                      <span>离线下载</span>
                  </div>
              </div>
              <div className="theme">
                  <span className="home"><i className="iconfont">&#xe604;</i>首页</span>
                  <ol className="theme-list">{themeList}</ol>
              </div>
          </div>
          </div>
      );
    }
    return null;
  }
}

export default ThemeListView;
