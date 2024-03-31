import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../../store/weatherSlicer";
import { useEffect, useState, useCallback } from "react";
import * as Location from "expo-location";

const useWeather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const [showGrap, setShowGrap] = useState(false);
  const [triggerSetPage, setTriggerSetPage] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const onClickDay = useCallback(
    ({ index }) => {
      if (!showGrap) {
        setShowGrap(true);
      }
    },
    [setShowGrap, showGrap]
  );

  const onCloseGraph = () => {
    setShowGrap(false);
  };

  useEffect(() => {
    dispatch(
      fetchWeather({
        lat: location?.coords?.latitude,
        lon: location?.coords?.longitude,
      })
    );
  }, [location]);

  return {
    data: weather?.data,
    onClickDay,
    onCloseGraph,
    showGrap,
    triggerSetPage,
    setTriggerSetPage,
    onRefresh: (p) => {
      dispatch(
        fetchWeather({
          lat: location?.coords?.latitude,
          lon: location?.coords?.longitude,
        })
      );
    },
  };
};

export default useWeather;
