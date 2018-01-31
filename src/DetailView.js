import React,{Component} from 'react';
import LoadLayout from './LoadLayout';
import './css/iconfont.css';
import './css/detailView.css';
import api from './api/api.js';

const THEME_DETAIL_API = api.contents

const LOADING = 'loading';
const SUCCESS = 'success';
const ERROR = 'error';

class DetailView extends Component{

  constructor(props){
    super(props);
    this.state = {
      status:LOADING,
      errorMessage:null,
      data:null,
      nightMode:false
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
  		console.log(value)
    this.setState({
      status:SUCCESS,
      data:value,
    });
    console.log(value);
  }

  onError(error){
    this.setState({
      status:ERROR,
      errorMessage:error.message,
    });
  }

  goBack(){
    window.history.go(-1);
  }

  buildCss(s){
      return " <link href=\"" + s + "\" type=\"text/css\" rel=\"stylesheet\"/>";
  }

  render(){
    return (
      <LoadLayout
        status={this.state.status}
        renderContent={this.renderContentView.bind(this)}
        onReloadAction={this.onReloadAction.bind(this)}
        errorMessage = {this.state.errorMessage}/>
    );
  }

  onReloadAction(){
    this.fetchData();
  }

  renderContentView(){
    var cssList = this.state.data.CONTENTS.css;
    var body = this.state.data.CONTENTS.body;
    

    var html = "";

    for (var i = 0; i < cssList.length; i++) {
      html = html + this.buildCss(cssList[i]);
    }

    if (this.state.nightMode) {
      html = html + "<div class=\"night\">";
    }

    body = body.replace(/class=\"img-place-holder\"/g, "class=\"img-place-holder-ignored\"");

    var base = "https://images.weserv.nl/?url=pic";
    body = body.replace(/http:\/\/pic/g, base);
    body = body.replace(/https:\/\/pic/g, base);


    html+=body;

    if (true) {
      if (this.state.nightMode) {
        html += "</div>";
      }
    }
    
   	
   	var topStory;
  		if(this.state.data.CONTENTS.image != null) {
    		topStory = (
    			<div className="top-story" style={{backgroundImage:'url(' + this.state.data.CONTENTS.image + ')'}}>
          <h1 className="top-story-title">{this.state.data.title}</h1>
        </div>
    		)	    		
    }

    return (   		
      <div className="detail-container">
        <div className="action-bar">
            <div onClick={this.goBack.bind(this)}>
                <i className="iconfont back">&#xe602;</i>
            </div>
            <div className="menus">
                <span><i className="iconfont share">&#xe64c;</i></span>
                <span><i className="iconfont star">&#xe63c;</i></span>
                <span><i className="iconfont comment">&#xead7;</i><label className="num">0</label></span>
                <span><i className="iconfont thumb">&#xe6c6;</i><label className="num">1</label></span>
            </div>
        </div>
        {topStory}
        <div className="story-container" dangerouslySetInnerHTML = {{__html:html}}/>
      </div>
    );
  }
}


export default DetailView;
