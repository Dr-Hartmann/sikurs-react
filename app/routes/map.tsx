import { Card } from "@heroui/react";
import { useRouteLoaderData } from "react-router";

import { YandexMaps } from "~/components/maps/YandexMaps";
import position from "~/resources/position.json";

export default function Map() {
  const rootData = useRouteLoaderData("root");

  return (
    <main className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0" style={{ width: "100%", height: "50vh" }}>
        <Card.Content></Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <YandexMaps position={position} yandexMapsApiKey={rootData?.yandexMapsApiKey} />
        </Card.Content>
      </Card>
    </main>
  );
}
