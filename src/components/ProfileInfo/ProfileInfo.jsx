import './ProfileInfo.css'

const ProfileInfo = (props) => {
  return ( 
    <>
    <img src={props.avatar} alt="Avatar"/>
    <h1>{props.name}</h1>
    <h3>({props.username})</h3>
    </>
  );
}

export default ProfileInfo;