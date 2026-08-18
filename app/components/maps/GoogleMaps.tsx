"use client";

import {
  APIProvider,
  Map,
  Marker,
  // Map3D,
  // Marker3D,
} from "@vis.gl/react-google-maps";

interface GoogleMapsProps {
  position: { lat: number; lng: number };
  googleMapsApiKey: string;
}

export default function GoogleMaps({ position, googleMapsApiKey }: GoogleMapsProps) {
  return (
    <APIProvider apiKey={googleMapsApiKey}>
      {/* <Map3D
        defaultCenter={position}
        defaultZoom={3}
        disableDefaultUI
        defaultRange={5000}
        // defaultTilt={45}
        mode={"HYBRID"}
      >
        <Marker3D position={{ ...position, altitude: 0 }} title="ООО Сикурс" />
      </Map3D> */}
      <Map defaultCenter={position} defaultZoom={15} gestureHandling="greedy" disableDefaultUI>
        <Marker position={{ ...position, altitude: 0 }} title="ООО Сикурс" />
      </Map>
    </APIProvider>
  );
}
