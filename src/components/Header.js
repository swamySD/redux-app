
import { useSelector } from 'react-redux'


const Header = () => {
    const name=useSelector(state=>state.userDeails.name)
    const age=useSelector(state=>state.userAge.age)
   
  return (
    <div>My self {name} and my age is {age} </div>
  )
}

export default Header