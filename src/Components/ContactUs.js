function ContactUs() {
  return (
    <div className="reach">
      <hr />
      <h2 className="reachTitle">Reach Us</h2>
      <div className="reachContent">
        <div className="address">
          <div>
            <p>
              {/* <svg
                src=""
                alt="address"
                height="40px"
                // style={{ backgroundColor: "blue" }}
              />{" "} */}
              <span>123456</span>
            </p>

            <p>
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0OHY0OGgtNDh6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEzLjI1IDIxLjU5YzIuODggNS42NiA3LjUxIDEwLjI5IDEzLjE4IDEzLjE3bDQuNC00LjQxYy41NS0uNTUgMS4zNC0uNzEgMi4wMy0uNDkgMi4yNC43NCA0LjY1IDEuMTQgNy4xNCAxLjE0IDEuMTEgMCAyIC44OSAyIDJ2N2MwIDEuMTEtLjg5IDItMiAyLTE4Ljc4IDAtMzQtMTUuMjItMzQtMzQgMC0xLjExLjktMiAyLTJoN2MxLjExIDAgMiAuODkgMiAyIDAgMi40OS40IDQuOSAxLjE0IDcuMTQuMjIuNjkuMDYgMS40OC0uNDkgMi4wM2wtNC40IDQuNDJ6Ii8+PC9zdmc+"
                alt="phone"
                height="40px"
              />{" "}
              <span>123456</span>
            </p>

            <p>
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDhoLTMyYy0yLjIxIDAtMy45OCAxLjc5LTMuOTggNGwtLjAyIDI0YzAgMi4yMSAxLjc5IDQgNCA0aDMyYzIuMjEgMCA0LTEuNzkgNC00di0yNGMwLTIuMjEtMS43OS00LTQtNHptMCA4bC0xNiAxMC0xNi0xMHYtNGwxNiAxMCAxNi0xMHY0eiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="
                alt="mail"
                height="40px"
              />
              {"   "}
              <span>abc@def.com</span>
            </p>
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
