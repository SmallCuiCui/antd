import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route, Switch, Redirect} from "react-router-dom"
import {mainRouters} from "./router"
import {Provider} from "react-redux"
import store from "./store"
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
ReactDOM.render(
<Provider store={store}>
	<Router>
		<LocaleProvider locale={zh_CN}> 
			<Switch>
				<Route path="/home" component={App}></Route>
				{
					mainRouters.map(item => {
						return <Route key={item.path} path={item.path} component={item.component} />
					})
				}
				<Redirect from="/" to="/home" exact/>
				<Redirect to="/404" />
			</Switch>
		</LocaleProvider>
	</Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
