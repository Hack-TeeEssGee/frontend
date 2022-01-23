import { useState, useEffect } from 'react';
import UilArrowCircleLeft from "@iconscout/react-unicons/icons/uil-arrow-circle-left";
import UilArrowCircleRight from "@iconscout/react-unicons/icons/uil-arrow-circle-right";
import axios from 'axios';
import { BACKEND_URL } from "../../constants.js";

const LandingEvents = ({innerRef}) => {

  const [eventsList, setEventsList] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = eventsList.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  });

  useEffect(() => {

    axios.get(`${BACKEND_URL}/event`)
      .then((response) => {
        setEventsList(response.data.events.map((event) => event.location));
      })
      .catch((err) => console.log(err));
  }, []);

  if (!Array.isArray(eventsList) || eventsList.length <= 0) {
    return null;
  }


  return (
    <div className="landing-events" ref={innerRef}>
      <h1>Events</h1>
      <div className="carousel-wrapper">
        <section className='slider'>
        <UilArrowCircleLeft size={50} className='left-arrow' onClick={prevSlide} />
        <UilArrowCircleRight size={50} className='right-arrow' onClick={nextSlide} />
          {eventsList.map((event, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={event} alt='event poster' className='image' />
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default LandingEvents;
