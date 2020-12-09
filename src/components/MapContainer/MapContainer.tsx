import React, { createRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapContainer.css";
const MapContainer = () => {
  let mapRef = createRef();

  useEffect(() => {
    let a = (mapboxgl.accessToken =
      "pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJja2hrcmp6ZWEwOWZxMnNsbjc1NXlrcTd5In0.w964wIfUKgnYjQLp0Ods7Q");
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [30.2656504, 59.8029126],
      zoom: 15,
    });

    return () => map.remove();
  }, []);

  return (
    <>
      Map
      <div className="map-container" ref={mapRef} />
    </>
  );
};

export default React.memo(MapContainer);
