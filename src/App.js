import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import VolunteerTasks from './components/VolunteerTasks/VolunteerTasks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import VolunteerDetails from './components/VolunteerTasks/VolunteerDetails/VolunteerDetails';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [event, setEvent] = useState([]);
  console.log(event);
  return (
    <UserContext.Provider value={{
      state1: [loggedInUser, setLoggedInUser],
      state2: [event, setEvent]
    }}>

      <Router><Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute exact path="/registration/:id">
          <RegistrationForm></RegistrationForm>
        </PrivateRoute>
        <Route exact path="/VolunteerTasks">
          <VolunteerTasks></VolunteerTasks>
        </Route>
        <Route exact path="/VolunteerDetails">
          <VolunteerDetails></VolunteerDetails>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
