import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route ,BrowerHistory} from 'react-router-dom'
import Main from './components/main'
import Addcar from './components/addcar'
import Findcar from './components/findcar'
import Deletecar from './components/deletecar'
import Editcar from './components/editcar'
class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route  path="/edit" component={Editcar} />
          <Route  path="/add" component={Addcar} />
          <Route  path="/find" component={Findcar} />
          <Route  path="/delete" component={Deletecar} />
        </Switch>
      </Router>
    )
  }
}

export default App;
