import { UilEnvelope, UilFacebookF, UilTwitter, UilGlobe } from '@iconscout/react-unicons';

const QuickCard = (props) => {

    return (
        <div className="quick-card">
            <img src={props.photo} alt={props.title}></img>
            <div className="quick-name">{props.title}</div>
            <div className="quick-links">
                <a href={`mailto:${props.email}`}><UilEnvelope size={40} /></a>
                <a href={props.fb}><UilFacebookF size={40} /></a>
                <a href={props.twitter}><UilTwitter size={40} /></a>
                <a href={props.website}><UilGlobe size={40} /></a>
            </div>
        </div>
    )
}

export default QuickCard;