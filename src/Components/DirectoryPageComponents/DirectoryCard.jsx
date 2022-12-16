import React from "react";
import styled from "styled-components";

const DirectoryCard = ({
  shopName,
  description,
  Address,
  Phone,
  OpeningHours,
}) => {
  return (
    <CardWrapper>
      <div>
        <h1>{shopName}</h1>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Address</h3>
        <p>{Address}</p>
        <h3>Phone</h3>
        <p>{Phone}</p>
        <h3>Opening Hours</h3>
        <p>{OpeningHours}</p>
      </div>
      <MapWrapper>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="map"
              width="100%"
              height="150"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${Address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">
              divi discount
            </a>
            <a href="https://www.embedgooglemap.net">
              google map iframe generator
            </a>
          </div>
        </div>
      </MapWrapper>
      <div>
        <button className="cardBtn">Visit Website</button>
        <button className="cardBtn">Get Directions</button>
        <button>Nearby Shops</button>
      </div>
    </CardWrapper>
  );
};

export default DirectoryCard;

const CardWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 1rem;
  h1 {
    color: #04be5a;
    font-weight: 400;
  }
  > div {
    padding: 1rem 2rem;
  }
  > div > h3 {
    margin-bottom: 0;
    padding-bottom: 0;
    text-align: left;
    font-weight: 400;
  }
  > div > p {
    margin-top: 3px;
    text-align: left;
  }
  > div:last-of-type {
    display: flex;
    justify-content: center;
  }
  button {
    color: #4095ff;
    background-color: white;
    font-size: 1.2rem;
    border: 0;
    margin: 0;
    padding: 0 0.8rem;
  }
  .cardBtn {
    border-right: 1px solid #666666;
  }
`;

const MapWrapper = styled.div`
  .mapouter {
    position: relative;
    text-align: right;
    height: 150px;
    width: 100%;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 150px;
    width: 100%;
  }
`;
