import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/storyItemView.css';

class StoryItemView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var bgImgId = this.props.story.id;
    return (
        <li className="story-item">
          <Link to={"/detail/" + bgImgId}>
            <img className="story-img" src={this.getImageUrl(this.props.story.images.toString())} />
            <h3 className="story-title">{this.props.story.title}</h3>
          </Link>
        </li>
    );
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
