import {useParams} from 'react-router-dom';

export const Profile = () =>{
    const {name} = useParams()
 return(<div>Profile page and name{name}</div>)
}