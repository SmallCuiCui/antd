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
			{/* 避免token验证失败时导致强制的页面跳转 */}
     	{sessionStorage.getItem("token") ?
			 <Layout>
     		<Switch>
     			{
     				homeRoutes.map(item => {
     					return <Route key={item.path} path={item.path} component={item.component} />
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
