import {Button} from '../'

const Title = ({textValue,buttonValue,buttonbg}) => {
  return (
    <div className="flex items-center justify-between">
    <h1 className="text-4xl font-bold text-text">
      {textValue}
    </h1>
    {buttonValue ? <Button value={buttonValue} bg={buttonbg} /> : '' }
      
    </div>
      
  )
}

export default Title
