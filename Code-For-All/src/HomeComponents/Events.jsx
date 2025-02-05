import PastEventCard from "./PastEventCard";
import { PASTEVENTSINFO } from "../PastEventsInfo";
import { INCOMINGEVENTSINFO } from "../IncomingEventsInfo";
import IncomingEvent from "./IncomingEvent";

const Events = () => {
  return (
    <div className="relative z-10 flex-col">
      <h4 className="p-0 bg-clip-text text-transparent bg-gradient text-5xl md:text-6xl font-extrabold mb-4 font-sans
                tracking-tight text-center text-white">
        Past Events
      </h4>

      <div className="flex flex-wrap justify-center">
        {PASTEVENTSINFO.map((event, index) => (
          <PastEventCard
            key={index}
            title={event.title}
            description={event.description}
            images={event.image}
          />
        ))}
      </div>

      <h4 className="p-0 bg-clip-text text-transparent bg-gradient  text-5xl md:text-6xl font-extrabold mb-4 font-sans
                tracking-tight  mt-[6rem]  text-center text-white">
        Upcoming Event
      </h4>

      <div className="flex flex-wrap justify-center ">
        <IncomingEvent
          title={INCOMINGEVENTSINFO[0].title}
          description={INCOMINGEVENTSINFO[0].description}
          images={INCOMINGEVENTSINFO[0].image}
          date={INCOMINGEVENTSINFO[0].date}
          location={INCOMINGEVENTSINFO[0].location}
          rsvpLink={INCOMINGEVENTSINFO[0].rsvpLink}
        ></IncomingEvent>
      </div>
    </div>
  );
};

export default Events;
