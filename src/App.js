import React from 'react';
import './App.css';
import Layout from "./components/admin"
import { Redirect,Switch } from "react-router-dom"
import {homeRoutes} from "./router"
import Myroute from "./Myroute"

function App() {
  return (
    <div  className="App">
			{/* 避免token验证失败时导致强制的页面跳转 */}
     	{sessionStorage.getItem("token") ?
			 <Layout>
     		<Switch>
     			{
     				homeRoutes.map(item => {
     					return <Myroute key={item.path} path={item.path} component={item.component} users={item.users} />
     				})
     			}
     			<Redirect from="/home" to="/home/list" exact/>
     		</Switch>
			 </Layout> : <Redirect to="/login" />
			 }
    </div>
  );
}

export default App;
