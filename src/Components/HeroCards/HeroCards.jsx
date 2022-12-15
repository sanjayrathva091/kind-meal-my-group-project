import React from "react";
import "./HeroCards.css";
import datahompage from "./homepagemapdata";
// import { useNavigate } from "react-router-dom";

const HeroCards = () => {
  // const navs = useNavigate();
  return (
    <>
    <div className="bnn">
      <div className="lighblue_box">
        <div className="homepage_box1">
          <div className="homepage_box1_headline">
            <div className="homepage_box1_headline_left">
              <h2 className="headline__mainpage_h2">Latest News & Videos</h2>
            </div>
            <div className="homepage_box1_headline_right">
              {" "}
              <h3 className="headline__mainpage_h2 yoyo">
                Save Lives with Your Blog . News &Article . Follow Our Facebook{" "}
              </h3>
            </div>
          </div>
          <div
            className="homepage_box1_cont"
            // onClick={() => {
            //   navs("/VideoDisplaypage");
            // }}
          >
            {datahompage.map(({ id, category, img, describe }) => {
              if (category === "Latest News & Videos") {
                return (
                  <div key={id} className="homepage_box1_card">
                    <img src={img} className="homepage_box1_img" />
                    <p className="homepage_box1_desc">{describe}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="padpad_pad"></div>

        <div className="homepage_box1">
          <div className="homepage_box1_headline">
            <div className="homepage_box1_headline_left">
              <h2 className="headline__mainpage_h2">Yummylicious Moments</h2>
            </div>
            <div className="homepage_box1_headline_right">
              {" "}
              <h3 className="headline__mainpage_h2 yoyo">
                Secret Recipes . Member Hot Picks .Photo Moments
              </h3>
            </div>
          </div>
          <div
            className="homepage_box1_cont"
            // onClick={() => {
            //   navs("/Article");
            // }}
          >
            {datahompage.map(({ id, category, img, describe }) => {
              if (category === "Yummylicious Moments") {
                return (
                  <div key={id} className="homepage_box1_card">
                    <img src={img} className="homepage_box1_img" />
                    <p className="homepage_box1_desc">{describe}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="padpad_pad"></div>

        <div className="homepage_box1">
          <div className="homepage_box1_headline">
            <div className="homepage_box1_headline_left">
              <h2 className="headline__mainpage_h2">Discover Restaurants</h2>
            </div>
            <div className="homepage_box1_headline_right">
              {" "}
              <h3 className="headline__mainpage_h2 yoyo">
                Vegetarian Directory . Resturant Menu . Food Map{" "}
              </h3>
            </div>
          </div>
          <div
            className="homepage_box1_cont"
            // onClick={() => {
            //   navs("/Article");
            // }}
          >
            {datahompage.map(({ id, category, img, describe }) => {
              if (category === "Discover Restaurants") {
                return (
                  <div key={id} className="homepage_box1_card">
                    <img src={img} className="homepage_box1_img" />
                    <p className="homepage_box1_desc">{describe}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="padpad_pad"></div>

        <div className="homepage_box1">
          <div className="homepage_box1_headline">
            <div className="homepage_box1_headline_left">
              <h2 className="headline__mainpage_h2">Amazing Superheroes</h2>
            </div>
            <div className="homepage_box1_headline_right">
              {" "}
              <h3 className="headline__mainpage_h2 yoyo">
                Latest Buzz . Lifestyle Ambassadors . Win Gifts!
              </h3>
            </div>
          </div>
          <div
            className="homepage_box1_cont"
            // onClick={() => {
            //   navs("/Article");
            // }}
          >
            {datahompage.map(({ id, category, img, describe }) => {
              if (category === "Amazing Superheroes") {
                return (
                  <div key={id} className="homepage_box1_card">
                    <img src={img} className="homepage_box1_img" />
                    <p className="homepage_box1_desc">{describe}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HeroCards;