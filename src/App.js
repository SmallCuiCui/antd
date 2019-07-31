import React from 'react';
import './App.css';
// import One from "./components/One"
// import Two from "./components/Two"
// import Button from 'antd/es/button';
import Layout from "./components/admin"
// import { Button } from 'antd';
import {Route,Redirect,Switch} from "react-router-dom"
import {homeRoutes} from "./router"

function App() {
  return (
    <div  className="App">
     	<Layout>
     		<Switch>
     			{
     				homeRoutes.map(item => {
     					return <Route key={item.path} path={item.path} component={item.component} />
     				})
     			}
     			<Redirect from="/home" to="/home/list" exact/>
     		</Switch>
     	</Layout>
    </div>
  );
}

export default App;
