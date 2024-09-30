import React from "react";
import PropType from "prop-types";

const GoogleMaps = ({ mapLink }) => (
  <iframe
    src={mapLink}
    style={{ border: 0, width: "100%", height: "400px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);
GoogleMaps.propTypes = {
  mapLink: PropType.string.isRequired,
};
export default GoogleMaps;
