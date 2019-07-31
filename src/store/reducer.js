var initState = {
	loading: false,
	list: [
		  {
		  	"id":1,
		    "title": 'Ant Design Title 1',
		    "read": false
		  },
		  {
		  	"id":2,
		    "title": 'Ant Design Title 2',
		    "read": false
		  },
		  {
		  	"id":3,
		    "title": 'Ant Design Title 3',
		    "read": false
		  },
		  {
		  	"id":4,
		    "title": 'Ant Design Title 4',
		    "read": false
		  }
		]
}

var reducer = (state=initState, action) => {
	var newState = {...state}
	if(action.type === "MARK_ALL"){
		newState.list.forEach(item => {
			item.read = true
		})
	} else if (action.type === "MARK_BY_ID") {
		newState.list.forEach(item => {
			if(item.id === action.id)
			{
				item.read = true
			}
		})
	} else if(action.type === "START_MARK"){
		newState.loading = true
	} else if(action.type === "END_MARK"){
		newState.loading = false
	}

	return newState
}

export default reducer