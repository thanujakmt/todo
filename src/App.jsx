
import dekstop_dark from "/images/bg-desktop-dark.jpg"
import mobile_dark from "/images/bg-mobile-dark.jpg"
import sun from "/images/icon-sun.svg"
import moon from "/images/icon-moon.svg"
import { useState, useRef, useEffect } from 'react';


import ListComponent from "./ListComponent";

function App() {

const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);
// const [completedTask, completedToDo] = useState();

const saveToLocalStorage = (newData) => {
  let mytodos = getTodosFromLocalStorage()
  mytodos.push({"content":newData,"status":false})
  localStorage.setItem('todos',JSON.stringify(mytodos) );
  setTodos(mytodos)
};

const isTodoExist = () =>{
  localStorage.getItem('todos')?"":localStorage.setItem("todos",JSON.stringify([]))
}
const getTodosFromLocalStorage = () => {
  let todosList = localStorage.getItem('todos')
  return JSON.parse(todosList)
}

const active = () =>{

  let todos = getTodosFromLocalStorage();
  let newTodos = []

  todos.forEach((value) => {
    if(value.status === false){
      newTodos.push(value)
    }
  })

  setTodos(newTodos)
  
}

const completedToDo = () =>{

  let todos = getTodosFromLocalStorage();
  let newTodos = []

  todos.forEach((value) => {
    if(value.status === true){
      newTodos.push(value)
    }
  })

  setTodos(newTodos)
  
}

const clearAll = () =>{

  let todos = getTodosFromLocalStorage();
  let newTodos = []

  todos.forEach((value) => {
    if(value.status === false){
      newTodos.push(value)
    }
  })

  localStorage.setItem('todos',JSON.stringify(newTodos))
  setTodos(newTodos)

  
}

const all = () =>{

  let todos = getTodosFromLocalStorage();
  setTodos(todos)  
}

const todoUpdateHandler = (e) => {
  if(e.key === 'Enter'){
    let todos = getTodosFromLocalStorage();
    let todo = e.target.value
    saveToLocalStorage(todo)
    e.target.value = null
  }
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleIcon = useRef()

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      toggleIcon.current.src = sun;
    } else {
      document.documentElement.classList.remove('dark');
      toggleIcon.current.src = moon;
    }
  };

  isTodoExist();
 
 useEffect(() =>(
  setTodos(getTodosFromLocalStorage())
  
 ),[])

 useEffect(() =>{
  let tempCount = 0
  todos.forEach((value) =>{
    // console.log(value.status)
    if(value.status === false){
      tempCount++
    }
  })

  setCount(tempCount)
},[todos])

  return (
    <>
      <div className="dark:bg-Very_Dark_Blue font-josefin bg-Very_Light_Gray min-h-screen tranistion duration-150 ease-linear pb-[100px]">
        <div className="main transition duration-150 ease-linear bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] h-[200px] md:dark:bg-[url('/images/bg-desktop-dark.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')] bg-no-repeat bg-cover md:h-[350px] flex flex-col items-center justify-center">
            <div className="todo flex justify-between md:w-[650px] w-[300px]">
              <p className="text-white md:text-[2.5em] text-[1.8em] font-medium">TODO</p>
              <img onClick={toggleDarkMode} ref={toggleIcon} className="md:h-8 h-8 m-1 md:m-4 cursor-pointer toggle-icon" src={moon} alt="" />
            </div>
            <div className="createtodo relative  mt-[20px] md:mb-10">
              <div className="md:h-7 md:w-7 md:mx-6 h-[18px] w-[18px] border-[2px] dark:border-Very_Dark_Grayish_Blue border-Dark_Grayish_Blue rounded-full absolute top-[15px] mx-6 my-1 z-10"></div>
              <input placeholder="create a new todo"  onKeyDown={todoUpdateHandler}  className="dark:bg-Very_Dark_Desaturated_Blue shadow-2xl outline-none md:px-[80px] md:py-[18px] p-3 px-[60px] md:w-[650px] w-[300px] rounded-[5px] dark:text-white text-[20px]" type="text" />
            </div>
        </div>
        <div className="items flex flex-col items-center justify-center mt-[-50px] md:mt-[-100px]  relative">
          <div className=" overflow-auto pb-10 relative border-Very_Dark_Blue w-[300px] h-[420px] mt-[30px] md:w-[650px] md:h-[550px] lg:h-[280px] xl:h-[400px] 2xl:h-[550px] bg-Very_Light_Gray dark:bg-Very_Dark_Desaturated_Blue shadow-2xl rounded-[5px]">
             
             { todos.slice().reverse().map((todo,key) =>(
             
                  <ListComponent key = {key} index  = {key} data = {todo} setTodos = {setTodos}/>

             ))}
             
          </div>
          <div className="dark:text-Dark_Grayish_Blue text-Very_Dark_Desaturated_Blue bottom border- h-[60px] w-[290px] dark:bg-Very_Dark_Desaturated_Blue bg-Very_Light_Gray md:text-[1.2em] absolute bottom-0 md:w-[650px] items-center flex justify-evenly">
            <div className="itemleft">
              <button> {count} items left </button>
            </div>
            <div className="filters md:relative md:bottom-0 md:h-fit md:w-fit md:bg-none md:shadow-none flex gap-3 absolute bottom-[-70px] rounded-[5px] shadow-2xl dark:bg-Very_Dark_Desaturated_Blue bg-white  w-full h-[50px]  items-center justify-center">
            <div className="all">
              <button onClick={all}>All</button>
            </div>
            <div className="active">
              <button onClick={active}>Active</button>
            </div>
            <div className="completed">
              <button onClick={completedToDo}> Completed</button>
            </div>
            </div>
            <div className="clear_completed">
              <button onClick={clearAll}>Clear Completed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App