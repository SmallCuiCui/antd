import Admin from "../components/admin"
import NotFound from "../components/notfound"

import List from "../components/list"
import Dashboard from "../components/dashboard"
import Setting from "../components/setting"
import Notice from "../components/notice"

export const mainRouters = [
	{
		path: "/admin",
		component: Admin
	},
	{
		path: "/404",
		component: NotFound
	}
]

export const homeRoutes=[
	{
		path: "/home/list",
		component: List
	},
	{
		path: "/home/dashboard",
		component: Dashboard
	},
	{
		path: "/home/setting",
		component: Setting
	},
	{
		path: "/home/notice",
		component: Notice
	}
]