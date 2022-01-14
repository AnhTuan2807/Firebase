import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import Dashboard from './component/dashboard/Dashboard';
import NavBar from './component/layout/NavBar';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <BrowserRouter>
      <h3 className='text-primary'>To-Do-App</h3>
      <ToastContainer />
      <NavBar />
        
        <Switch>
          <Route path="/SignIn" component={SignIn} />  
          <Route path="/SignUp" component={SignUp} /> 
          <Route path="/" exact component={Dashboard} />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
