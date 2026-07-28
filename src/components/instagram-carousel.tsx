"use client";

import Image from "next/image";
import { useRef } from "react";
import type { InstagramPost } from "@/lib/instagram";

export function InstagramCarousel({ posts }: { posts: InstagramPost[] }) {
  const feedRef = useRef<HTMLUListElement>(null);

  function move(direction: -1 | 1) {
    const feed = feedRef.current;
    if (!feed) return;
    feed.scrollBy({
      left: direction * Math.max(feed.clientWidth * 0.82, 280),
      behavior: "smooth",
    });
  }

  return (
    <div className="shell social-carousel" aria-label="Instagram-inlägg">
      <button
        className="social-carousel-arrow social-carousel-arrow-left"
        type="button"
        aria-label="Visa föregående Instagram-inlägg"
        onClick={() => move(-1)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 6.5 6.5 12l5.5 5.5M6.5 12h11" />
        </svg>
      </button>
      <ul className="social-feed" ref={feedRef}>
        {posts.map((post) => (
          <li className="social-post" key={post.id}>
            <a href={post.permalink} target="_blank" rel="noreferrer">
              <div className="social-post-image">
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 700px) 82vw, 360px"
                  quality={60}
                />
              </div>
              <div className="social-post-copy">
                <p>{post.caption}</p>
                <time dateTime={post.timestamp}>
                  {new Intl.DateTimeFormat("sv-SE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(post.timestamp))}
                </time>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="social-carousel-arrow social-carousel-arrow-right"
        type="button"
        aria-label="Visa nästa Instagram-inlägg"
        onClick={() => move(1)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m12 6.5 5.5 5.5-5.5 5.5M6.5 12h11" />
        </svg>
      </button>
    </div>
  );
}
