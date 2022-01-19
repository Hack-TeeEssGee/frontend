import { UilEnvelope, UilPhone, UilFacebookF, UilInstagram, UilLinkedinAlt } from '@iconscout/react-unicons';

const ContactCard = (props) => {

    return (
        <div className="contact-card">
            <img src={props.photo} alt={props.name}></img>
            <div className="contact-name">{props.name}</div>
            <div className="contact-position">{props.position}</div>
            <div className="contact-links">
                <a href={`mailto:${props.email}`}><UilEnvelope color="orangered" size={40} /></a>
                <a href={`Tel:${props.phone}`}><UilPhone color="purple" size={40}/></a>
                <a href={props.fb}><UilFacebookF size={40} /></a>
                <a href={props.insta}><UilInstagram color="red" size={40} /></a>
                <a href={props.linkedin}><UilLinkedinAlt size={40} /></a>

            </div>
        </div>
    )
}

export default ContactCard;