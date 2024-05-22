import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <>
      <div id="fifth">
        <h1>PROLIX SYSTEM</h1>
        <div>
          <div>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
              alt=" "
            />
            <span>
              <h3 className="h3-class">Address</h3>
              <br />
              <p>4813 Woodland Ave Royal Oak, Michigan - 48073, USA</p>
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
              <p>sales@prolixsystem.com</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
