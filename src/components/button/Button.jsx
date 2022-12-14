
const Button = ({bg,value}) => {


  return (
    <button className={`px-8 py-3 ${bg==='button' ? 'bg-button' : 'bg-white'} border rounded-lg ${bg==='button' ? 'text-white' : 'text-button'}`}>
      {value}
    </button>
  )
}

export default Button
