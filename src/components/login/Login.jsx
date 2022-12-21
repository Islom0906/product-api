import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ApiService from "../../service/auth"

import { signUserFailure, signUserStart, signUserSuccess } from "../../slice/auth"
import { Input } from "../../ui"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate=useNavigate()

  const {isLoading,loggedIn} =useSelector(state=>state.auth)
  const dispatch=useDispatch()

  // username: "mor_2314",
  // password: "83r5^_"
  // username: "donero",
// password: "ewedon",

  const loginHandler= async (e)=>{
    e.preventDefault()
    dispatch(signUserStart())
    const user={
      username,
      password
    }
    try {
      const {token} = await ApiService.userLogin(user)
      dispatch(signUserSuccess(token))
      navigate('/')
    } catch (error) {
      dispatch(signUserFailure())
    }
  }
  useEffect(() => {
   if(loggedIn){
    navigate('/')
   }
  }, [loggedIn])
  
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
        <img className="mx-auto h-12 w-auto" src='./assets/image/logo.png' alt="Your Company" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>
      {/* <ValidationError /> */}
      <form className="mt-8 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm ">
          <Input type={'text'} label={'User name'} state={username} setState={setUsername} />
          <Input type={'password'} label={'Password'} state={password} setState={setPassword} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-white"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`group relative flex w-full justify-center rounded-md border border-transparent ${isLoading && 'bg-blue-200' } bg-indigo-600 py-2 px-4 text-sm font-medium text-white ${isLoading && 'hover:bg-blue-200' } hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            onClick={loginHandler}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
            {isLoading ? "loading..." : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login