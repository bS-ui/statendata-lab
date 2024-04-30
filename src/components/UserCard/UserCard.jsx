import './UserCard.css'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ContactInfo from '../ContactInfo/ContactInfo'
import { useState } from 'react';

const UserCard = (props) => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  function handleContactInfoClick() {
    setShowContactInfo(!showContactInfo);
  }
  return ( 
    <div className='user-card'>
      {!showContactInfo && <ProfileInfo avatar={props.user.avatar} name={props.user.name} username={props.user.username}/>}
      {showContactInfo && <ContactInfo address={props.user.address} company={props.user.company} email={props.user.email} phone={props.user.phone} website={props.user.website}/>}
      <button onClick={handleContactInfoClick}>{!showContactInfo ? "Show Contact Info" : "Hide Contact Info"}</button>
    </div>
  )
}

export default UserCard