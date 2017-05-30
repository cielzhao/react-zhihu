import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ZhihuDaily from './ZhihuDaily';
import DetailView from './DetailView';
import ThemeListView from './ThemeListView';
import ThemeDetailView from './ThemeDetailView';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={ZhihuDaily}/>
          <Route path="/detail/:id" component={DetailView}/>
          <Route path="/themeListView/:id" component={ThemeListView}/>
          <Route path="/themeDetailView/:id" component={ThemeDetailView}/>
        </div>
      </Router>
    )
  }
}

export default App;
