import { EventCard, EventCardProps } from 'components/eventCard/eventCard';
import style from './style.module.css';

interface EventsListProps {
  events: EventCardProps[];
}
const EventsList = ({ events }: EventsListProps) => {
  return (
    <>
      <h2 className="border-l-8 border-accent text-2xl font-semibold pl-4 mb-8">
        Prossimi eventi
      </h2>
      <ul className="flex gap-4 flex-wrap">
        {events.map((event) => {
          return (
            <li key={event.title} className={style.eventWrapper}>
              <EventCard {...event} className=" h-full" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { EventsList };
