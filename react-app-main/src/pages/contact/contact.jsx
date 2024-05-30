import React from "react";
import { Helmet } from "react-helmet";
import "./contact.css";

export const Contact = () => {
  return (
    <>
          <Helmet>
        <title>Prolixic System - Contact Us</title>
        <meta name="title" content="Prolixic System - Contact Us" />
        <meta name="description" content="Contact information for Prolixic System." />
        <meta property="og:title" content="Contact Us - Prolixic System" />
        <meta property="og:description" content="Contact information for Prolixic System." />
      </Helmet>
      <div id="fifth">
        <h1>PROLIXIC SYSTEM</h1>
        <div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
              alt=" "
            />
            <span>
              <h3 className="h3-class">Address</h3>
              <br />
              <p>4813 Woodland Ave Royal Oak, Surat - 48073, India</p>
            </span>
          </div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
              alt=" "
            />
            <span>
              <h3 className="h3-class">Phone</h3>
              <br />
              <p>09486721972</p>
            </span>
          </div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
              alt=" "
            />
            <span>
              <h3 className="h3-class">E-mail</h3>
              <br />
              <p>sales@prolixicsystem.com</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
