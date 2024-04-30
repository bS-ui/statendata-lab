import UserCard from '../../components/UserCard/UserCard'
import { userData } from "../../data/userData"
import './Users.css'

const Users = (props) => {
  console.log(userData)
  return (
    <>
      <h1>User List</h1>
      <div className="card-container">
        {userData.map(user => <UserCard user={user} key={user.id}/>)}
      </div> 
    </>
  )
}

export default Users;