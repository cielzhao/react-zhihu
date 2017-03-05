import React,{Component} from 'react';
import ProgressBar from './ProgressBar';
import ErrorView from './ErrorView';

class LoadLayout extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if (this.props.status == LOADING) {
      return this.renderLoading();
    }else if (this.props.status == SUCCESS){
      return this.renderSuccess();
    }else if (this.props.status == ERROR) {
      return this.renderError();
    }
  }

  renderLoading(){
    return (<ProgressBar/>);
  }

  renderSuccess(){
    return this.props.renderContent();
  }

  renderError(){
    return (<ErrorView message={this.props.errorMessage}/>);
  }
}

const LOADING = "loading";
const ERROR = "error";
const SUCCESS = "success";

export default LoadLayout;
