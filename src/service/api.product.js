import axios from "axios";

const BASE_URL='https://fakestoreapi.com'


export const ApiProduct={
  async apiProduct(url){
    const result= await axios.get(`${BASE_URL}/${url}`)
    return result.data
  }
}