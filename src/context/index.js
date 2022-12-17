import { createContext, useReducer } from "react"

const initialValue = {
  dark: false
}

const reducer=(state=initialValue,action)=>{
  const {type,payload} =action
  if(type==="ON_DARK"){
    const editDark =!state.dark
    return {...state,dark:editDark }
  }else{
    return {state}
  }
}

export const Context = createContext()

const Provider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialValue)
  return <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
}

export default Provider