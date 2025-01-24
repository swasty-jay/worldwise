import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form  ")}>
      <h2>map</h2>
      <h3>
        position: {lat}, {lng}
      </h3>

      <button onClick={() => setSearchParams({ lat: 40, lng: -70 })}>
        change position
      </button>
    </div>
  );
};

export default Map;
