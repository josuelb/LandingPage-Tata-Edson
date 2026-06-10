export default function Tag({
  children
}) {
  return (
    <span
      className="
      bg-vinho/40
      border
      border-vinho/60
      text-vela
      text-xs
      font-cinzelPlain
      tracking-wider
      px-4
      py-2
      rounded-sm
    "
    >
      {children}
    </span>
  );
}