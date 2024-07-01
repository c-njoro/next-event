const contact = () => {
  return (
    <div className="main-contact">
      <h1>Contact Us</h1>
      <div className="map">
        <h3>Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8001168084434!2d36.896419974422805!3d-1.294456935633956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f132d99c29bcd%3A0x1a0c3560c3e328d4!2sOYSTER%20VILLAGE%20DOHNHOLM!5e0!3m2!1sen!2ske!4v1719295329357!5m2!1sen!2ske"
          className="location"
          loading="lazy"
        >
          Donholm, Oyster
        </iframe>
      </div>

      <div className="send">
        <h3>Send To Us</h3>
        <div className="name">
          <input
            className="name-input"
            type="text"
            placeholder="First Name"
            pattern="[A-Za-z]+"
          />
          <input
            className="name-input"
            type="text"
            placeholder="Second Name"
            pattern="[A-Za-z]+"
          />
        </div>
        <input type="email" placeholder="Your Email" className="email-input" />
        <textarea
          name="message"
          id="message"
          placeholder="Send us a message..."
          className="text-area"
        ></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default contact;
