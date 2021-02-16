import { useState, useEffect } from "react";
import * as Location from "expo-location";
import logger from "../utiliy/logger";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export { useLocation };
