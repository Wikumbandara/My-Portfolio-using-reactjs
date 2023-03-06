import React from "react";

function Contact() {
  return (
    <div className="column">
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="card mt-6 mx-6 " style={{ minHeight: "75vh" }}>
            <div className="home-hero">
              <div className="columns">
                <div className="column is-full">
                  <h1
                    className="title is-1 ml-6 mt-1"
                    style={{ color: "#2622F1" }}
                  >
                    Contact
                  </h1>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-third">
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-6 mb-1">
                    Address : Kurunegala,Sri Lanka
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Email : hi@wikum.me
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Mobile : 0704561285
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    LinkedIn : Wikum Preethika
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Facebook : Wikum Bandara
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Email : hi@wikum.me
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Instargram : imwikum
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Twitter : iamwikum
                  </h3>
                  <br />
                </div>
                <div className="column">
                  <div className="buttons are-medium mb-0">
                    <button className="button is-link is-rounded">
                      Need to Get in touch with me?
                    </button>
                  </div>
                </div>
                <div className="column is-centered">
                  <p className="mt-6" />
                  <p className="mt-6">
                    <img
                      src="c1.png"
                      className="ml-5 mt-6"
                      style={{ width: "60%" }}
                    />
                  </p>
                  <p className="mt-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
