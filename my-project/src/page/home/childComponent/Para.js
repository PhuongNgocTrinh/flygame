import React from "react";

const Para = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="row overview">
        <h5 style={{ textAlign: "start", marginBottom: "40px" }}>
          Specifications
        </h5>
        <div className="col-6">
          <h6 className="level">Medium</h6>
          <div style={{ marginBottom: "40px" }}>
            <h6>OS version</h6>
            <p>Windows 7</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>CPU</h6>
            <p>Intel Core i3-2100 / AMD® FX-6300</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>Memory</h6>
            <p>2 GB RAM</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>version</h6>
            <p>Windows</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>GPU</h6>
            <p>NVIDIA® GeForce GTX 750 Ti / ATI Radeon HD 7950</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>DirectX</h6>
            <p>DirectX 9</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>Storage</h6>
            <p>6</p>
          </div>
        </div>
        <div className="col-6">
          <h6 className="level">Recommended</h6>

          <div style={{ marginBottom: "40px" }}>
            <h6>OS version</h6>
            <p>Windows or better</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>CPU</h6>
            <p>Intel Core i7-3770 / AMD® FX-8350</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>Memory</h6>
            <p>16 GB RAM</p>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h6>GPU</h6>
            <p>NVIDIA® GeForce GTX 970 / ATI Radeon R9 series</p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h6>Storage</h6>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Para;
