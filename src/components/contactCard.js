import { UilEnvelope, UilPhone, UilFacebookF, UilInstagram, UilLinkedinAlt } from '@iconscout/react-unicons';

const ContactCard = (props) => {

    return (
        <div className="contact-card">
            <img src={props.photo} alt="contact-photo"></img>
            <div className="contact-name">{props.name}</div>
            <div className="contact-position">{props.position}</div>
            <div className="contact-links">
                <a href={`mailto:${props.email}`}><UilEnvelope size={40} /></a>
                <a href={`Tel:${props.phone}`}><UilPhone size={40}/></a>
                <a href={props.fb}><UilFacebookF size={40} /></a>
                <a href={props.insta}><UilInstagram size={40} /></a>
                <a href={props.linkedin}><UilLinkedinAlt size={40} /></a>

            </div>
        </div>
    )
}

export default ContactCard;