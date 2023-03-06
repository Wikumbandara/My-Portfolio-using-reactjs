import React from "react";

function Works() {
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
                    Works
                  </h1>
                  <h5 className="title is-4 ml-6 mt-1">
                    Some of my works are shown below
                  </h5>
                </div>
              </div>
              <div className="columns">
                <div className="column is-one-third">
                  <img
                    src="w1.png"
                    className="ml-5 mt-2"
                    style={{ width: "80%" }}
                  />
                  <img
                    src="w4.png"
                    className="ml-5 mt-4"
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="column">
                  <img
                    src="w2.png"
                    className=" ml-4 mt-2"
                    style={{ width: "80%" }}
                  />
                  <img
                    src="w5.png"
                    className="ml-4 mt-6"
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="column">
                  <img
                    src="w3.png"
                    className="ml-4 mt-2"
                    style={{ width: "80%" }}
                  />
                  <img
                    src="w6.png"
                    className="ml-4 mt-4"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
