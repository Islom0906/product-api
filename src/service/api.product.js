import axios from "./api"

export const ApiProduct={
  async apiProduct(url){
    const result= await axios.get(`/${url}`)
    return result.data
  }
}