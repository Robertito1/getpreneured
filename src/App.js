import { Switch, Route } from 'react-router-dom'

import Login from './pages/login'
import SignUp from './pages/signUp'
import SelectService from './pages/selectService'
import Dashboard from './pages/dashboard'

import './App.css';

function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/signUp" component={() => <SignUp />} /> 
          <Route exact path="/select-service" component={() => <SelectService />} /> 
          <Route exact path="/dashboard" component={() => <Dashboard />} /> 
      </Switch>
    </div>
  );
}

export default App;
