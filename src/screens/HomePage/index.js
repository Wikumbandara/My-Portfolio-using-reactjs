import React from "react";

function HomePage() {
  return (
    <div className="column">
      <div className="columns is-centered">
        <div className="column is-10">
          <div
            className="card mt-6 mx-6 is-flex is-justify-content-center is-align-items-center"
            style={{ minHeight: "75vh" }}
          >
            <div className="home-hero">
              <div className="columns">
                <div className="column">
                  <h1
                    className="title is-3 has-text-weight-bold mb-1 ml-5 mt-5"
                    style={{ textShadow: "0px 4px 3px rgba(0, 0, 0, 0.25)" }}
                  >
                    Hi I am,
                  </h1>
                  <h1
                    className="title is-1 has-text-weight-bold mb-1 ml-5"
                    style={{
                      textShadow: "0px 4px 3px rgba(0, 0, 0, 0.25)",
                      color: "#2622F1",
                    }}
                  >
                    Wikum Preethika
                  </h1>
                  <h1
                    className="title is-6 has-text-weight-bold ml-5"
                    style={{ textShadow: "0px 4px 3px rgba(0, 0, 0, 0.25)" }}
                  >
                    UNDERGRADUATE | GRAPHIC DESIGNER | FREELANCER
                  </h1>
                  <h5 className="title is-5 ml-5 mb-4">
                    I'm a creative person driven by my passion for design. I'm
                    proficient with graphic tools and have an artistic approach
                    towards everything I create.
                    <div className="columns is-centered">
                      <div className="column is-7">
                        <a href="21020116_CV.pdf">
                          <button className="button is-link is-rounded mt-6">
                            DOWNLOAD RESUME
                          </button>
                        </a>
                      </div>
                    </div>
                  </h5>
                </div>
                <div className="column">
                  <div className="columns is-mobile is-centered">
                    <div className="column is-half">
                      <div>
                        <img
                          className="mt-6"
                          src="1.jpeg"
                          style={{
                            filter:
                              "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25))",
                            borderRadius: "0px 0px 0px 88px",
                            width: "120%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
