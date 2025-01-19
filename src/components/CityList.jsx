import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
const CityList = ({ cities, isloading }) => {
  if (isloading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
