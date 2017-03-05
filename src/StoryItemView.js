import React,{Component} from 'react';

class StoryItemView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
        <img src={this.props.story.images} />
        <h3>{this.props.story.title}</h3>
      </li>);
  }
}

export default StoryItemView;
