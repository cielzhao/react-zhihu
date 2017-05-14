import React,{Component} from 'react';
import StoryItemView from './StoryItemView';
import './css/storyListView.css';

class StoryListView extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if (this.props.stories !== null) {
      var storyItemViews = this.props.stories.map(function(story, index) {
        return (<StoryItemView story={story} key={index}/>);
      });
      return (
          <ol className="story-list">
            <h3 className="story-section-title">今日热闻</h3>
            {storyItemViews}
          </ol>
      );
    }
    return null;

  }
}

export default StoryListView;
