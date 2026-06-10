export default function SocialLink({
  href,
  children,
  label
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
      text-fumaca
      hover:text-ouro
      transition-colors
    "
    >
      {children}
    </a>
  );
}