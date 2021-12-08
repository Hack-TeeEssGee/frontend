import { useState } from "react";
import Calendar from "react-calendar";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="event-calendar">
      <h1>Event Calendar</h1>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="calendar-wrapper"
      />
    </div>
  );
};

export default EventCalendar;
