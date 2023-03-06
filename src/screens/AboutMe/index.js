import React from "react";

function AboutMe() {
  return (
    <div className="column">
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="card mt-6 mx-6" style={{ minHeight: "75vh" }}>
            <div className="home-hero">
              <div className="columns">
                <div className="column is-full">
                  <h1
                    className="title is-1 ml-6 mt-1"
                    style={{ color: "#2622F1" }}
                  >
                    About Me
                  </h1>
                  <h5 className="title is-5 ml-6 mr-1">
                    {" "}
                    I am a first year Undergraduate at University of Colombo
                    School of Computing. A hardworking individual who has the
                    ability in software developing and graphic designing. I like
                    to apply my knowledge to the industry and also like to
                    explore new things.
                  </h5>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-3 mb-1">
                    Name: Wikum Preethika
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Birthday: 21st July 2001
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Age: 21 years
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Address: Kurunegala,Sri Lanka
                  </h3>
                  <br />
                </div>
                <div className="column">
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-3 mb-1">
                    University: UCSC
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Email:hi@wikum.me
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    GitHub: @wikum
                  </h3>
                  <br />
                  <h3 className="title is-5 has-text-weight-bold ml-6 mt-0 mb-1">
                    Youtube: Wikum Preethika
                  </h3>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
