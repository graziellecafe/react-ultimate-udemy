import Order from "./Order";

const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;

const Footer = () => {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
