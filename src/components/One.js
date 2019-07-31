import React,{useState,useEffect} from "react"


function One(){
	const [count, setCount] = useState(0)
	const [obj, setObj] = useState({a:1,b:2})
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' },{ text: 'Learn react' }]);

    useEffect(()=>{
    	console.log(1)
    })
	return <div>
		<p>{count}</p>
		<ul>
			{
				todos.map(item => {
					return <li key={item.text}>item.text</li>
				})
			}
		</ul>
		<div>{obj.b}</div>
		<button onClick={()=>{setCount(count+1)}}>点击</button>
	</div>
}

export default One