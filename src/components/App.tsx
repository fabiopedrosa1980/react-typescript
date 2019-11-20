import React from 'react';
import List from './List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './Detail';

const App: React.FC = () => {
  return <div>
    <Router>
      <div>Teste React com Typescript</div>
      <Switch>
        <Route exact path="/" component={List}></Route>
        <Route path="/:name" component={Detail}></Route>
      </Switch>
    </Router>
  </div>
}

export default App;
