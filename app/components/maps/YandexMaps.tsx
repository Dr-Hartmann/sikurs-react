import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
} from "ymap3-components";

interface YandexMapsProps {
  position: { lat: number; lng: number };
  yandexMapsApiKey: string;
}

export default function YandexMaps({ position, yandexMapsApiKey }: YandexMapsProps) {
  return (
    <div>
      <YMapComponentsProvider apiKey={yandexMapsApiKey}>
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
      </YMapComponentsProvider>
    </div>
  );
}
