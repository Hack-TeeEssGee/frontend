const SocietyCard = (props) => {

    return (
        <div className="society-card">
            <img src={props.image} alt="society-photo"></img>
            <div className="society-title">{props.name}</div>
        </div>
    )
}

export default SocietyCard;