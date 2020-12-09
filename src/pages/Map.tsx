import React, { createRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapContainer from "components/MapContainer/MapContainer";
const Map = () => {
  return (
    <>
      <MapContainer />
    </>
  );
};

export default React.memo(Map);
