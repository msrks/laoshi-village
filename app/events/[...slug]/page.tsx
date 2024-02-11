import { notFound } from "next/navigation";
import { allEvents } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface EventProps {
  params: {
    slug: string[];
  };
}

async function getEventFromParams(params: EventProps["params"]) {
  const slug = params?.slug?.join("/");
  const event = allEvents.find((event) => event.slugAsParams === slug);

  if (!event) {
    null;
  }

  return event;
}

export async function generateMetadata({
  params,
}: EventProps): Promise<Metadata> {
  const event = await getEventFromParams(params);

  if (!event) {
    return {};
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export async function generateStaticParams(): Promise<EventProps["params"][]> {
  return allEvents.map((event) => ({
    slug: event.slugAsParams.split("/"),
  }));
}

export default async function EventPage({ params }: EventProps) {
  const event = await getEventFromParams(params);

  if (!event) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{event.title}</h1>
      {event.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {event.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={event.body.code} />
    </article>
  );
}
