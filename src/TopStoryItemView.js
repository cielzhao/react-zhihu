import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/topStoryItemView.css';


class TopStoryItemView extends Component{
  constructor(props){
    super(props);
  }

  render(){
      var bgImg = this.getImageUrl(this.props.story.image);
      var bgImgId = this.props.story.id;

      return (
        <Link to={"/detail/" + bgImgId}>
          <li className="top-story-item" style={{backgroundImage:'url(' + bgImg + ')'}}>
              <div className="top-story-mask">
                  <h3 className="top-story-title">{this.props.story.title}</h3>
              </div>
          </li>
        </Link>

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


export default TopStoryItemView;
