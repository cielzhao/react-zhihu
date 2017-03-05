import React,{Component} from 'react';
import StoryItemView from './StoryItemView';

class StoryListView extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if (this.props.stories !== null) {
      var storyItemViews = this.props.stories.map(function(story, index) {
        return (<StoryItemView story={story} key={index}/>);
      });
      return (<ol>{storyItemViews}</ol>);
    }
    return null;

  }
}

export default StoryListView;
