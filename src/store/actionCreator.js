export default {
	markAll(){
		return {
			type: "MARK_ALL"
		}
	},
	markById(id){
		return (dispatch)=>{
			dispatch({type: "START_MARK"})

			setTimeout(()=>{
				dispatch({
					type: "MARK_BY_ID",
					id
				})

				dispatch({type: "END_MARK"})
			},1000)
		}
	}
}