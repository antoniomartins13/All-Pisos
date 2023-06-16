import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MapsIframe = ({ embedId }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iframeWidth = windowWidth - 100;
  const iframeHeight = windowWidth <= 320 ? windowWidth.toString() : "450";

  return (
    <div className="maps">
      <iframe
        src={`https://www.google.com/maps/embed${embedId}`}
        width={iframeWidth}
        height={iframeHeight}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Endereço da All Pisos"
      ></iframe>
    </div>
  );
};

MapsIframe.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default MapsIframe;
