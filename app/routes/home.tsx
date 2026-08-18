import { useRouteLoaderData } from "react-router";

import { Banner } from "~/components/home/Banner";
import { Request } from "~/components/home/Request";
import { Reviews } from "~/components/home/Reviews";
import { Shop } from "~/components/home/Shop";
import GoogleMaps from "~/components/maps/GoogleMaps";
import { ProductShowcase } from "~/components/products/ProductShowcase";
// import { Location } from "~/components/home/Location";
// import contacts from "~/resources/contacts.json";
// import services from "~/resources/services.json";
import offers from "~/resources/offers.json";
import position from "~/resources/position.json";
import response_1 from "~/resources/response-1.json";
import reviews from "~/resources/reviews.json";
import SecurityPNG from "~/resources/sikurs-security-features.png";
import { CatalogResponseSchema } from "~/schemas/catalog";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // TODO заменить на случайные реальные товары
  const result = CatalogResponseSchema.safeParse(response_1);
  if (!result.success) {
    return <p>Некорректный ответ сервера</p>;
  }

  const rootData = useRouteLoaderData("root");

  return (
    <main className="mx-auto w-full max-w-6xl">
      <Banner />
      <section className="my-4 grid grid-cols-2 gap-3 text-center text-base font-bold text-green-600 sm:grid-cols-4 sm:gap-4 sm:text-lg">
        {offers.map((offer) => (
          <div key={offer}>{offer}</div>
        ))}
      </section>
      <section className="aspect-1100/950">
        <img src={SecurityPNG} className="h-full w-full object-cover" />
      </section>
      <ProductShowcase products={result.data.products} />
      <Reviews reviews={reviews} />
      <section className="relative my-8 h-187.5 w-full overflow-hidden sm:h-200 lg:h-212.5">
        {/* Карта */}
        <div className="absolute inset-0 z-0">
          <GoogleMaps position={position} googleMapsApiKey={rootData?.googleMapsApiKey} />
        </div>

        {/* Переход + карточка
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10">
          <div className="pointer-events-auto">
            <Location contacts={contacts} services={services} />
          </div>
        </div> */}
      </section>

      <Shop />
      <Request />
    </main>
  );
}
