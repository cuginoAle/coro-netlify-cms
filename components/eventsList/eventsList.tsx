import { EventCard, EventCardProps } from 'components/eventCard/eventCard';
import { Heading } from 'components/heading/heading';
import style from './style.module.css';

interface EventsListProps {
  events: EventCardProps[];
}
const EventsList = ({ events }: EventsListProps) => {
  return (
    <>
      <Heading>Prossimi eventi</Heading>

      <ul className="flex gap-8 flex-wrap">
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
