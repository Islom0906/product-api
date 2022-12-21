import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistence-storage";

const initialState={
  isLoading:false,
  loggedIn:false,
  error:null,
  user:null
}

export const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
    signUserStart:(state)=>{
      state.isLoading=true
    },
    isToken:(state,{payload})=>{
      state.loggedIn=payload
    },
    signUserSuccess:(state,{payload})=>{
      state.isLoading=false
      state.loggedIn=true
      setItem('token',payload)
    },
    signUserFailure:(state,{payload})=>{
      state.isLoading=false
      state.error='error'
    }

  }
})

export const {signUserStart,signUserSuccess,signUserFailure,isToken} = authSlice.actions
export default authSlice.reducer