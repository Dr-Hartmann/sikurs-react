import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

interface GoogleMapsProps {
  position: { lat: number; lng: number };
  googleMapsApiKey: string;
}

export default function GoogleMaps({ position, googleMapsApiKey }: GoogleMapsProps) {
  return (
    <APIProvider apiKey={googleMapsApiKey}>
      <Map defaultCenter={position} defaultZoom={15} gestureHandling="greedy" disableDefaultUI>
        <Marker position={{ ...position, altitude: 0 }} title="ООО Сикурс" />
      </Map>
    </APIProvider>
  );
}
