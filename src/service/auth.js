import axios from "./api"

export const ApiService={
  async userLogin(user){
    const result= await axios.post('auth/login',user)
    return result.data
  }
}

export default ApiService