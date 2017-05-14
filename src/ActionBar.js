import React,{Component} from 'react';
import './css/iconfont.css';
import './css/actionBar.css';


class ActionBar extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="action-bar">
            <div>
                <i className="iconfont menu" onClick={this.props.onActionBarMenuClick}>&#xe745;</i>
                <span>首页</span>
            </div>
            <div>
                <i className="iconfont msg">&#xe617;</i>
                <i className="iconfont setting">&#xe61f;</i>
            </div>
        </div>
    )
  }
}

export default ActionBar;
