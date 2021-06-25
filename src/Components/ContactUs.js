function ContactUs() {
  return (
    <div className="reach">
      <hr />
      <h2 className="reachTitle">Reach Us</h2>
      <div className="reachContent">
        <div className="address">
          <div>
            <p>Email: abc@def.com</p>
            <p>Phone: 123456</p>
            <p>Address: 123456</p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.358382683108!2d76.663461!3d30.685234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65ef2d487904b8f3!2sChandigarh%20Engineering%20College-Block%203%2C%20Wilson%20Block!5e0!3m2!1sen!2sus!4v1614437465176!5m2!1sen!2sus"
            width="400"
            height="240"
            style={{
              border: "none",
              overflow: "hidden",
              filter: "hue-rotate(180deg)",
            }}
            allowFullScreen=""
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="Chandigarh Engineering College"
            // loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
