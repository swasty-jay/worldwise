import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import PropTypes from "prop-types";
import { useCities } from "../context/CitiesContext";
const CityList = () => {
  const { cities, isloading } = useCities();
  if (isloading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array,
  isloading: PropTypes.bool,
};

export default CityList;
