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
