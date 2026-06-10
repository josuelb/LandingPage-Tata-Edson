import {contacts} from "../../data/contacts.js"
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <a
      href={contacts.whatsapp_link}
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        whatsapp-btn
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
      "
    >
      <FaWhatsapp size={32} />
    </a>
  );
}