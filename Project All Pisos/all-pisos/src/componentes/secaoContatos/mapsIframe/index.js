import React from "react";
import PropTypes  from "prop-types";

const MapsIframe = ({ embedId }) => (
    <div className="maps">
        <iframe 
            src={`https://www.google.com/maps/embed${embedId}`} 
            width={window.innerWidth - 100}
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
);
MapsIframe.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default MapsIframe;