import { Marker } from 'react-map-gl';
import styles from './style.module.css';

const BASE = import.meta.env.BASE_URL;

interface IRunMarkerProperties {
  startLon: number;
  startLat: number;
  endLon: number;
  endLat: number;
}

const RunMarker = ({
  startLon,
  startLat,
  endLon,
  endLat,
}: IRunMarkerProperties) => {
  const size = 5;
  return (
    <>
      <Marker
        key="maker_start"
        longitude={startLon}
        latitude={startLat}
        pitchAlignment="viewport"
      >
        <div
          style={{
            transform: `translate(${-size / 2}px,${-size}px)`,
            maxWidth: '25px',
          }}
        >
          <img
            src={`${BASE}assets/start.svg`}
            alt="Start"
            className={styles.locationSVG}
          />
        </div>
      </Marker>
      <Marker key="maker_end" longitude={endLon} latitude={endLat}>
        <div
          style={{
            transform: `translate(${-size / 2}px,${-size}px)`,
            maxWidth: '25px',
          }}
        >
          <img
            src={`${BASE}assets/end.svg`}
            alt="End"
            className={styles.locationSVG}
          />
        </div>
      </Marker>
    </>
  );
};

export default RunMarker;
