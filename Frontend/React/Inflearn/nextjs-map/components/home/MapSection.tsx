import useCurrentStore from '../../hooks/useCurrentStore';
import useMap from '../../hooks/useMap';
import Map from './Map';
import Markers from './Markers';

import type { NaverMap } from "../../types/map";
const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, "click", clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};
export default MapSection;
