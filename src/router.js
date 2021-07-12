import {HashRouter,Route } from "react-router-dom";
import App from './App'
import Login from './login'
import Home from './home'
import Detail from './detail'


function Router() {
  return (
   <HashRouter>
     <Route path={'/'} component={App} exact></Route>
     <Route path={'/login/:id'} component={Login}></Route>
       <Route path={'/home'} component={Home}></Route>
       <Route path={'/detail'} component={Detail}></Route>
   </HashRouter>
  );
}

export default Router;
