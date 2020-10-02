import React from 'react';
// import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homePage/homepage.component';
import './App.css';

export const SamplePage = () =>{
  return(
    <div>This is a sample page</div>
  );
}

function App() {
  return (
    <div><Homepage></Homepage></div>
    // <div>
    //   <Switch>
    //     <Route path="/" exact component={Homepage}></Route>
    //     <Route path="/sample" component={SamplePage}></Route>
    //   </Switch>
    // </div>
  );
}

export default App;
