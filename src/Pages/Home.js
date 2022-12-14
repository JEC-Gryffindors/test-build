import React from "react";
import { Container } from "react-bootstrap";
import Carousels from "../Components/Carousels";
import Header from "../Components/Header";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <marquee
        className="bg-danger pt-2 pb-2 "
        onmouseover="this.stop()"
        onmouseout="this.start()"
      >
        <a
          className=" text-decoration-none  text-dark"
          target="_blank"
          rel="noreferrer"
          href="https://jec.ac.in/electronics-and-communication-engineering-inaugurates-techie-club-on-21-10-2022-friday-9am-at-seminar-halleee/"
        >
          <h5>
            Electronics and Communication Engineering, Inaugurates “TECHIE” Club
            on 21-10-2022, Friday 9am at Seminar Hall(EEE){" "}
          </h5>
        </a>{" "}
      </marquee>
      <Carousels />
      <Container>
        <div>
          <div className="d-flex justify-content-around m-5">
            <div className="introIconWrap">
              <a
                href="/undergraduate"
                className=" text-decoration-none text-center"
              >
                <img
                  src="https://www.alverno.edu/images/icon_undergraduate.svg"
                  alt="Undergraduate icon"
                  width={150}
                  className="introIconImage"
                />
                <p className="purple">
                  Undergraduate
                  <br />
                </p>
              </a>
            </div>
            <div className="introIconWrap">
              <a href="/graduate" className=" text-decoration-none text-center">
                <img
                  width={150}
                  src="https://www.alverno.edu/images/icon_graduate.svg"
                  alt="Graduate icon"
                  className="introIconImage"
                />
                <p className="purple">
                  graduate
                  <br />
                </p>
              </a>
            </div>
            <div className="introIconWrap">
              <a href="/transfer" className=" text-decoration-none text-center">
                <img
                  width={150}
                  src="https://www.alverno.edu/images/icon_transfer.svg"
                  alt="Transfer icon"
                  className="introIconImage"
                />
                <p className="purple">Transfer</p>
              </a>
            </div>
            <div className="introIconWrap">
              <a
                href="/financial-aid"
                className=" text-decoration-none text-center"
              >
                <img
                  width={150}
                  src="https://www.alverno.edu/images/icon_financial.svg"
                  alt="Financial aid icon"
                  className="introIconImage"
                />
                <p className="purple">
                  Financial Aid <br />
                </p>
              </a>
            </div>
            <div className="introIconWrap">
              <a href="/visit" className=" text-decoration-none text-center ">
                <img
                  width={150}
                  src="https://www.alverno.edu/images/icon_visit.svg"
                  alt="Visit icon"
                  className="introIconImage"
                />
                <p className="purple">
                  Visit
                  <br />
                </p>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
