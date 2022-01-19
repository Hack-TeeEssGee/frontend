import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { BACKEND_URL } from "../../constants";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventsOfDay, setEventsOfDay] = useState([]);

  useEffect(() => {

    const eventArray = [];

    //get events list from backend according to date.
    axios.post(`${BACKEND_URL}/event/today`, { date: selectedDate.toISOString() })
      .then((response) => {
        response.data.events.map((event) => {
          eventArray.push(event.name);
          return event; //not required. added to suppress warning.
        })
        setEventsOfDay(eventArray);
      })
      .catch((err) => console.log(err));
    
  }, [selectedDate]);

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
            eventsOfDay.map((event, index) => {
              return(<li key={index}>{event}</li>)
            })
          }</div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
