
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { useState ,useRef } from 'react';

export default function ListComponent(props,{setTodos}) {
    
    const [isChecked, setIsChecked] = useState(false)

    const [closeBtn, setCloseBtn] = useState('hidden')

    const checkBtn = useRef()

    const handleComplete = (e) => {
        let todosList = JSON.parse(localStorage.getItem('todos'))
        let targetTodo = checkBtn.current.getAttribute('aria-label')
        
        console.log(e)
        todosList.forEach((value) =>{
            console.log(value)
            console.log(targetTodo)
            if(value.content === targetTodo){
                
                value.status = value.status?false:true
                console.log(todosList)
            }
        })
        props.setTodos(todosList)
        localStorage.setItem('todos',JSON.stringify(todosList))
            
      };
  
    const handleClick = (e) => {
  
    //   setIsChecked(!isChecked)
   
      handleComplete(e)
    }

    const handleDelete = (e) => {
        let todosList = JSON.parse(localStorage.getItem('todos'))
        let targetTodo = e.target.getAttribute('aria-label')
          
        let newTodoList = []

        todosList.forEach((value) =>{
            if(value.content !== targetTodo){
                newTodoList.push(value)
            }
        })
        props.setTodos(newTodoList)
        localStorage.setItem('todos',JSON.stringify(newTodoList))    
      };

    const mouseEnter =() =>{
        setCloseBtn('flex')
    }
    const mouseOut =() =>{
        setCloseBtn('hidden')
    }      

    return (
        <>
            <div onMouseOver ={mouseEnter} onMouseLeave={mouseOut}  className="todowrap flex items-center md:gap-40 gap-10 mx-6 my-8 min-h-[50px] cursor-pointer">
                <div ref={checkBtn} aria-label={props.data.content} className="md:h-8 md:w-8 h-5 w-5 rounded-full border-2 dark:border-Very_Dark_Desaturated_Blue customGradient"
                    style={{ background: props.data.status ? 'linear-gradient(145deg,rgb(125,154,246) 35%,rgb(173,112,243) 75%)' : 'transparent', border: props.data.status ? '2px solid transparent' : '2px solid gray' }} onClick={handleClick}>
                    {props.data.status  && <FaCheck className="md:text-xl md:m-[4px] text-white" />}
                </div>
                <div className={`todoText  ${props.data.status?"text-Dark_Grayish_Blue dark:text-Dark_Grayish_Blue":"text-Very_Dark_Desaturated_Blue dark:text-Light_Grayish_Blue_h"} md:text-2xl ${props.data.status?"line-through":""}`}>
                {props.data.content}
                </div>
                <IoCloseOutline  aria-label={props.data.content} onClick={handleDelete} className={`md:text-4xl text-[1.4em] text-Dark_Grayish_Blue cursor-pointer ${closeBtn} `} />
            </div>
        </>
    )
}