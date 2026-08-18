import { Button, Card } from "@heroui/react";
import { useState } from "react";

import SiCamera from "~/resources/sikurs-cam.png";
import type { ProductResponse } from "~/schemas/catalog";

type ProductShowcaseProps = {
  products: ProductResponse[];
};

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (products.length === 0) {
    return null;
  }

  const product = products[currentIndex];

  const previousProduct = () => {
    setCurrentIndex((current) => (current === 0 ? products.length - 1 : current - 1));
  };

  const nextProduct = () => {
    setCurrentIndex((current) => (current === products.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="relative isolate overflow-hidden bg-transparent lg:aspect-7/6">
      {/* Фон */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-neutral-500"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 45%, 0 55%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-green-600"
        style={{
          clipPath: "polygon(0 55%, 100% 45%, 100% 92%, 0 100%)",
        }}
      />

      {/* Контент */}
      <div className="grid h-full grid-rows-[auto_auto] lg:grid-rows-2">
        {/* Верхняя часть */}
        <div className="grid grid-cols-1 gap-8 px-12 py-16 sm:grid-cols-5 sm:gap-6 sm:px-16 lg:gap-0 lg:px-0 lg:py-0">
          {/* Изображение */}
          <div className="flex items-center justify-center sm:col-span-2">
            <Card className="w-full max-w-72 bg-transparent shadow-none sm:max-w-80 lg:max-w-none">
              <Card.Content className="flex items-center justify-center p-0">
                <img
                  src={SiCamera}
                  alt="Изображение товара"
                  className="h-auto max-h-60 w-full object-contain sm:max-h-72 lg:max-h-full"
                />
              </Card.Content>
            </Card>
          </div>

          {/* Название + описание */}
          <div className="flex items-center sm:col-span-3">
            <Card className="w-full bg-transparent shadow-none">
              <Card.Content className="flex flex-col gap-3 p-0 sm:gap-4 lg:gap-6 lg:px-8">
                <Card.Title className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {product.name}
                </Card.Title>

                <Card.Description className="text-base leading-relaxed text-white sm:text-lg md:text-xl lg:text-2xl">
                  {product.description}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="grid grid-cols-1 gap-10 px-12 pt-8 pb-24 text-white sm:grid-cols-2 sm:gap-8 sm:px-16 sm:pt-10 sm:pb-28 lg:gap-0 lg:px-0 lg:py-0">
          {/* Цена */}
          <div className="flex items-center">
            <Card className="w-full bg-transparent shadow-none">
              <Card.Content className="flex flex-col items-start gap-2 p-0 sm:gap-3 lg:px-12">
                <Card.Title className="text-xl font-bold text-white sm:text-2xl">Цена</Card.Title>

                <Card.Description className="text-4xl leading-none font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {product.price.toFixed(2)} ₽
                </Card.Description>

                <Button
                  variant="outline"
                  className="mt-3 rounded-lg border-white bg-transparent px-6 text-lg text-white sm:mt-4 sm:px-8 sm:text-xl lg:mt-5 lg:px-10 lg:text-2xl"
                >
                  Купить
                </Button>
              </Card.Content>
            </Card>
          </div>

          {/* Характеристики */}
          <div className="flex items-center">
            <Card className="w-full bg-transparent shadow-none">
              <Card.Content className="flex flex-col gap-4 p-0 sm:gap-5 lg:px-8 lg:pt-4">
                <Card.Title className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Характеристики
                </Card.Title>

                <ul className="space-y-2 text-base sm:space-y-3 sm:text-lg lg:text-xl">
                  {Object.entries(product.attributes).map(([key, value]) => (
                    <li key={key} className="leading-relaxed">
                      <span className="font-semibold">{key}:</span> {String(value)}
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>

      {/* Навигация */}
      <Button
        variant="outline"
        onPress={previousProduct}
        className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-lg border-white bg-black/30 px-3 text-sm text-white sm:left-5 sm:px-4 sm:text-base lg:left-8"
        aria-label="Предыдущий товар"
      >
        <span className="sm:hidden">←</span>
        <span className="hidden sm:inline">Влево</span>
      </Button>

      <Button
        variant="outline"
        onPress={nextProduct}
        className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-lg border-white bg-black/30 px-3 text-sm text-white sm:right-5 sm:px-4 sm:text-base lg:right-8"
        aria-label="Следующий товар"
      >
        <span className="sm:hidden">→</span>
        <span className="hidden sm:inline">Вправо</span>
      </Button>
    </section>
  );
}
