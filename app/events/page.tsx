import { allEvents } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allEvents
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((event) => (
          <article key={event._id}>
            <Link href={event.slug}>
              <h2>{event.title}</h2>
            </Link>
            {new Date(event.date).toLocaleDateString()}
            {event.description && <p>{event.description}</p>}
          </article>
        ))}
    </div>
  );
}
