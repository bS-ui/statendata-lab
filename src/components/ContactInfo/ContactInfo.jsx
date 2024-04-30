import './ContactInfo.css'

const ContactInfo = (props) => {
  return ( 
    <div className="contact-info">
      <h1>{props.company.name}</h1>
      <h3>{props.company.catchPhrase}</h3>
      <h3>{props.email}</h3>
      <h3>{props.phone}</h3>
      <h3>{props.address.street}</h3>
      <h3>{props.address.suite}</h3>
      <h3>{props.address.city}</h3>
      <a href={props.website}>Visit Website</a>
    </div>
  );
}

export default ContactInfo;