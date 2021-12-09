import { useEffect, useState } from "react";
import Calendar from "react-calendar";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventsOfDay, setEventsOfDay] = useState([]);

  useEffect(() => {

    //get events list from backend according to date.

    //DEMO data
    setEventsOfDay([
      "TSG Website Hackathon",
      "Convocation Ceremony 2021"
    ])
  }, []);

  return (
    <div className="event-calendar">
      <h1>Event Calendar</h1>
      <div className="event-calendar-body">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="calendar-wrapper"
        />
        <div className="event-box">
          <div className="event-box-heading">Events of the Day</div>
          <div className="event-list">{
            eventsOfDay.map((event) => {
              return(<li>{event}</li>)
            })
          }</div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
