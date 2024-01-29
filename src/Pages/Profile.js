import { ChangeProfile } from "../Components/changeProfile"

export const Profile = (props) =>{
 return(<div>Profile page - username is {props.username}
 <ChangeProfile setUsername={ props.setUsername}/>
 </div>)
}