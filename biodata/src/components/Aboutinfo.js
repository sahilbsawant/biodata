import React from "react";
// import "./AboutinfoStyle.css"
import "../components/AboutinfoStyle.css";
import pro1Img from "../assets/pro1.jpg";

const Aboutinfo = () => {
  return (
    <>
      <div className="content">
        <h1>About Us : </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="image" src={pro1Img} alt="pro1Img"></img>
          </div>
          <div className="col-lg-6">
            <p className="mt-3">
              {" "}
              hi am sahil sawant dream to become a full stack development hi am
              sahil sawant dream to become a full stack development{" "}
            </p>

            <div className="row">
              <div className="col-lg-6">
                <p>
                  <span className="textStyle">Website :-</span> www.com{" "}
                </p>
                <p>
                  <span className="textStyle">Phone :- </span>8268172899{" "}
                </p>
                <p>
                  <span className="textStyle">Gmail :-</span>{" "}
                  sbsawant358@gmail.com{" "}
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  <span className="textStyle">Degree (completed) :-</span> Bsc
                  in Computer Science{" "}
                </p>
                <p>
                  <span className="textStyle">Pursuing (Degree) :- </span>Msc in
                  Information Technology{" "}
                </p>
              </div>
              <p class="text-break"> HERE INFO WILL COME.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutinfo;
