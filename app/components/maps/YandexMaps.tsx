// import {
//   YMap,
//   YMapComponentsProvider,
//   // YMapDefaultSchemeLayer,
//   // YMapDefaultFeaturesLayer,
//   // YMapMarker,
//   YMapDefaultMarker,
// } from "ymap3-components";

interface YandexMapsProps {
  position: { lat: number; lng: number };
  yandexMapsApiKey: string;
}

export function YandexMaps({ position, yandexMapsApiKey }: YandexMapsProps) {
  return (
    <div>
      {position.lat}-{position.lng}
      {yandexMapsApiKey}
      {/* <YMapComponentsProvider apiKey={yandexMapsApiKey}>
        <YMap
          location={{
            center: position,
            zoom: 9,
          }}
          mode="vector"
        >
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          <YMapDefaultMarker coordinates={position} draggable />
        </YMap>
      </YMapComponentsProvider> */}
    </div>
  );
}
