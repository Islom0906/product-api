import React, { useContext } from "react";
import { Context } from "../../context";

const DarkMode = () => {
  const {state,dispatch} = useContext(Context)

  if(state.dark){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }

  
    return (
    <div className="fixed right-0 -translate-y-1/2 top-1/2">
      <button className="px-8 py-3 text-white bg-black rounded-lg dark:bg-white dark:text-text" onClick={()=> dispatch({type:'ON_DARK'})}>
      {state.dark ? "Light" : "Dark" }
      </button>
    </div>
  );
};

export default DarkMode;
