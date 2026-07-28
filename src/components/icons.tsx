export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function Bolt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M13.4 2 5 13h6l-.4 9L19 10h-6l.4-8Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M13.6 21v-8h2.8l.4-3h-3.2V8.1c0-1 .3-1.6 1.7-1.6H17V3.8c-.3 0-1.3-.1-2.4-.1-2.5 0-4.1 1.5-4.1 4.1V10H8v3h2.5v8h3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
