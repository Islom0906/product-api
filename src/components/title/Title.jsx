import {Button} from '../'

const Title = ({textValue,buttonValue,buttonbg,link}) => {
  return (
    <div className="flex items-center justify-between">
    <h1 className="text-4xl font-bold text-text dark:text-white">
      {textValue}
    </h1>
    {buttonValue ? <Button value={buttonValue} bg={buttonbg} link={link} /> : '' }
      
    </div>
      
  )
}

export default Title
