import React,{Component} from 'react';
import './css/storyItemView.css';

class StoryItemView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className="story-item">
        <img className="story-img" src={this.getImageUrl(this.props.story.images.toString())} />
        <h3 className="story-title">{this.props.story.title}</h3>
      </li>);
  }

  getImageUrl(imageUrl){
      if (imageUrl.indexOf("https://") >= 0) {
          imageUrl = imageUrl.replace(/https:\/\//, "");
      }else if (imageUrl.indexOf("http://") >= 0) {
          imageUrl = imageUrl.replace(/http:\/\//, "");
      }
      return "https://images.weserv.nl/?url=" + imageUrl;
  }
}

export default StoryItemView;
