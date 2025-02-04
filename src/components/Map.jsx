import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import { useGeolocation } from "../Hooks/GeoLocation";
import Button from "./Button";
import { UseUrlPosition } from "../Hooks/UseUrlPosition";

const Map = () => {
  const { cities } = useCities();
  const [MapLat, MapLng] = UseUrlPosition();

  // Default longitude
  const [mapPosition, setMapPosition] = useState([MapLat, MapLng]);
  const {
    isLoading: isloadingPostion,
    position: geolocationposition,
    getPosition,
  } = useGeolocation();

  useEffect(
    function () {
      if (geolocationposition) {
        setMapPosition([geolocationposition.lat, geolocationposition.lng]);
      }
    },
    [geolocationposition]
  );
  return (
    <div className={styles.mapContainer}>
      {!geolocationposition && (
        <Button type="position" onClick={getPosition}>
          {isloadingPostion ? "Loading......" : "Use your Position"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <h3>{city.cityName}</h3>
              <p>{city.country}</p>
            </Popup>
          </Marker>
        ))}
        <DetectClick />

        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
};
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
