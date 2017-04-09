import React, {Component} from 'react';
import Slider from 'react-slick';
import TopStoryItemView from './TopStoryItemView';

class TopStoryListView extends Component{

  constructor(props){
    super(props);
  }

  render(){
      var settings={
          autoplay: true,
          autoplaySpeed:3000,
          arrows: false,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      };

      if(this.props.stories != null){
          var topStoryItemViews = this.props.stories.map(function(story, index) {
            return (<div key={index}><TopStoryItemView story={story}/> </div>);
          });
          return (<Slider {...settings}>{topStoryItemViews}</Slider>);
      }
      return null;
  }
}

export default TopStoryListView;
