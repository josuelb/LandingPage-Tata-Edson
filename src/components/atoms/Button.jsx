export default function Button({
  children,
  href,
  target,
  className = ""
}) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}