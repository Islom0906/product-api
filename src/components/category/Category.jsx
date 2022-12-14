import {CategoryCard} from '../'
import category from './category.json'

const Category = () => {
  return (
    <div className='flex items-center w-full mt-10 space-x-3 overflow-x-auto'>
      {
       category.map((item)=>(
         <CategoryCard key={item.title} category={item}/>
        
       ))
      }
    </div>
  )
}

export default Category