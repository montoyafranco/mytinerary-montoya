import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#0a4275" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3"></span>
            <LinkRouter to={"cities"}>
              <button
                type="button"
                className="buttonWave"
              >
                Cities
              </button>
            </LinkRouter>
            <LinkRouter to={"home"}>
                    <button className="buttonWave">Home</button>
                  </LinkRouter>
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <img className="mario" src="https://i.gifer.com/origin/e5/e5c61ee7a6e01580a10c50afbad9a49b_w200.gif"></img>
        <a className="text-white" href="#">
        
        </a>
      </div>
    </MDBFooter>
  );
}
