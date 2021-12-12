import { useState, useEffect } from 'react';
import UilArrowCircleLeft from "@iconscout/react-unicons/icons/uil-arrow-circle-left";
import UilArrowCircleRight from "@iconscout/react-unicons/icons/uil-arrow-circle-right";

const demoEventsData = [
  'https://images.unsplash.com/photo-1556918936-216daf8e7c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2VudG9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1552261597-952b64377d6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
]

const LandingEvents = () => {

  const [current, setCurrent] = useState(0);
  const length = demoEventsData.length;

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

  if (!Array.isArray(demoEventsData) || demoEventsData.length <= 0) {
    return null;
  }


  return (
    <div className="landing-events">
      <h1>Events</h1>
      <div className="carousel-wrapper">
        <section className='slider'>
        <UilArrowCircleLeft size={50} className='left-arrow' onClick={prevSlide} />
        <UilArrowCircleRight size={50} className='right-arrow' onClick={nextSlide} />
          {demoEventsData.map((event, index) => {
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
