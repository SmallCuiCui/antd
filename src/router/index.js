import NotFound from "../components/notfound"

import List from "../components/list"
import Dashboard from "../components/dashboard"
import Setting from "../components/setting"
import Notice from "../components/notice"
import Login from "../components/login"
import Add from "../components/add"

export const mainRouters = [
	{
		path: "/login",
		component: Login
	},
	
	{
		path: "/404",
		component: NotFound
	}
]

export const homeRoutes=[
	{
		path: "/home/list",
		component: List,
		users:["abc","def"]
	},
	{
		path: "/home/dashboard",
		component: Dashboard,
		users:["abc","def"]
	},
	{
		path: "/home/setting",
		component: Setting,
		users:["abc"]
	},
	{
		path: "/home/notice",
		component: Notice,
		users:["abc","def"]
	},
	{
		path: "/home/add",
		component: Add,
		users:["abc","def"]
	}
]