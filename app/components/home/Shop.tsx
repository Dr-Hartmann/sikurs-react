import { Button, Card } from "@heroui/react";

import categories from "~/resources/categories.json";
import quickSteps from "~/resources/quickSteps.json";
import startOptions from "~/resources/startOptions.json";

export function Shop() {
  return (
    <section className="my-2 grid gap-4 bg-neutral-600 p-4 sm:gap-5 sm:p-6 md:gap-6 md:p-8 lg:grid-cols-5 lg:p-10">
      <Card className="w-full min-w-0 rounded-none bg-neutral-600 lg:col-span-3">
        <p className="text-base text-green-500 sm:text-lg">Магазин</p>

        <Card.Title className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Основные разделы каталога
        </Card.Title>

        <Card.Description className="text-sm text-gray-300 sm:text-base md:text-lg">
          Мы собрали здесь самые понятные маршруты для старта.
        </Card.Description>

        {/* TODO доработать стили lg */}
        <Card.Content className="mt-4 grid w-full min-w-0 grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
          {categories.map((category) => (
            <Button
              key={category.title}
              className="h-auto min-h-28 w-full min-w-0 justify-start rounded-lg border border-gray-500 bg-neutral-500 px-4 py-3 text-left whitespace-normal sm:min-h-32 md:min-h-36"
            >
              <div className="w-full min-w-0">
                <p className="text-base font-bold text-white sm:text-lg md:text-xl">
                  {category.title}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {category.description}
                </p>
              </div>
            </Button>
          ))}
        </Card.Content>
      </Card>

      <Card className="flex h-full w-full min-w-0 flex-col rounded-none border border-green-700 bg-emerald-800 p-4 sm:p-6 md:p-8 lg:col-span-2 lg:p-6">
        <p className="text-base text-green-400 sm:text-lg">Быстрый старт</p>

        <Card.Title className="text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl">
          При открытии каталога рекомендуем начать с этих шагов
        </Card.Title>

        <Card.Description className="text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          Сначала выбирают категорию оборудования, потом смотрят акции и готовые комплекты, а уже
          после уточняют доставку, монтаж и совместимость под объект.
        </Card.Description>

        <div className="flex flex-wrap gap-2">
          {startOptions.map((option) => (
            <Button
              key={option}
              size="sm"
              className="h-auto min-h-9 w-auto rounded-md bg-emerald-900 px-3 py-2 text-sm text-gray-200 sm:text-base"
            >
              {option}
            </Button>
          ))}
        </div>

        <div className="mt-1 flex flex-col gap-2">
          {quickSteps.map((step) => (
            <Button
              key={step}
              className="h-auto min-h-12 w-full min-w-0 justify-start rounded-md border border-l-4 border-gray-500 border-l-green-600 bg-emerald-900 px-4 py-3 text-left text-sm whitespace-normal text-gray-200 sm:text-base md:text-lg"
            >
              {step}
            </Button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <Button className="w-full rounded-lg bg-green-600 text-base text-white sm:text-lg">
            Открыть каталог
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-lg border-white bg-transparent text-base text-white sm:text-lg"
          >
            Нужен подбор
          </Button>
        </div>
      </Card>
    </section>
  );
}
