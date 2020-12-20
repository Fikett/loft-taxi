import React, { createRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./MapContainer.css";
import RouteForm from "components/RouteForm/RouteForm";
import { useSelector } from "react-redux";
import { selectPaymentData } from "modules/auth/selectors";
import FillPaymentInfoPreview from "./FillPaymentInfoPreview";
import _ from "lodash";
import { selectcurrentRoute } from "modules/routes/selectors";
import { makeStyles } from "@material-ui/core/styles";

const styles = () => ({
  container: {
    position: "relative",
    zIndex: "-10",
  },
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: (props) => props.height - 64,
  },
});

const useStyles = makeStyles(styles);

const MapContainer = () => {
  const classes = useStyles({ height: window.innerHeight });

  const paymentData = useSelector(selectPaymentData);

  const currentRoute = useSelector(selectcurrentRoute);

  let mapRef = createRef();

  const [map, setmap] = useState(null);

  useEffect(() => {
    let a = (mapboxgl.accessToken =
      "pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJja2hrcmp6ZWEwOWZxMnNsbjc1NXlrcTd5In0.w964wIfUKgnYjQLp0Ods7Q");

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [30.2656504, 59.8029126],
      zoom: 15,
    });

    console.log("map", map);
    setmap(map);

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (map && currentRoute.length > 0) {
      drawRoute(map, currentRoute);
    }
  }, [currentRoute]);

  const drawRoute = (map, coordinates) => {
    let layer = map.getLayer("route");

    if (layer) {
      map.removeLayer("route");
    }

    map.flyTo({
      center: coordinates[0],
      zoom: 15,
    });
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.map} ref={mapRef} />
        {_.isEmpty(paymentData) ? <FillPaymentInfoPreview /> : <RouteForm />}
      </div>
    </>
  );
};

export default React.memo(MapContainer);
