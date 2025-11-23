"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Джек",
    username: "@jack",
    body: "Я никогда не видел ничего подобного. Это потрясающе. Я в восторге.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Джилл",
    username: "@jill",
    body: "Я даже не знаю, что сказать. Я потерял дар речи. Это потрясающе.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Джон",
    username: "@john",
    body: "У меня нет слов. Это потрясающе. Я в восторге.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Джейн",
    username: "@jane",
    body: "У меня нет слов. Это потрясающе. Я в восторге.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Дженни",
    username: "@jenny",
    body: "У меня нет слов. Это потрясающе. Я в восторге.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Джеймс",
    username: "@james",
    body: "У меня нет слов. Это потрясающе. Я в восторге.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}
