const EventCard = (props) => {

    return (
        <div className="event-card">
            <img src={props.event.location} alt="event-image"></img>
            <div className="event-title">{props.event.name}</div>
            <div className="event-date-wrapper">
                <div>{props.event.start_date}</div>
                <div>{props.event.end_date}</div>
            </div>
            <a href={props.event.fb_post_link} className="event-link">Learn More</a>
        </div>
    )
}

export default EventCard;