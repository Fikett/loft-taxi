import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    //   mapboxgl.accessToken =
    //   "pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJja2hrcmp6ZWEwOWZxMnNsbjc1NXlrcTd5In0.w964wIfUKgnYjQLp0Ods7Q";
    // this.map = new mapboxgl.Map({
    //   container: this.mapContainer.current,
    //   style: "mapbox://styles/mapbox/light-v10",
    //   center: [30.2656504, 59.8029126],
    //   zoom: 15
    // });
  }, []);

  return <>Map</>;
};

export default React.memo(Map);
