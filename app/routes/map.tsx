import { Card } from "@heroui/react";
import { lazy, Suspense, useEffect, useState } from "react";

// import { YandexMaps } from "~/components/maps/YandexMaps";
import position from "~/resources/position.json";

import type { Route } from "./+types/map";

const YandexMaps = lazy(() => import("~/components/maps/YandexMaps"));

// TODO изменить описание
export function meta({}: Route.MetaArgs) {
  return [{ title: "Карты" }, { name: "description", content: "Тестовый сайт" }];
}

const yandexMapsApiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY;

export default function Map() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0" style={{ width: "100%", height: "50vh" }}>
        <Card.Content></Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Suspense fallback={null}>
            <YandexMaps position={position} yandexMapsApiKey={yandexMapsApiKey} />
          </Suspense>
        </Card.Content>
      </Card>
    </main>
  );
}
