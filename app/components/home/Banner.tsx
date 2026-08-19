import { Button } from "@heroui/react";
import { Link } from "react-router";

// TODO убрать импорты ассетов на уровень выше
import SiBG from "~/resources/sikurs-bg.png";
import SiCam from "~/resources/sikurs-cam.png";

export function Banner() {
  return (
    <section className="relative aspect-2/1 overflow-hidden">
      <img src={SiBG} alt="" className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/40" />

      <img
        src={SiCam}
        alt=""
        className="absolute inset-y-0 left-0 h-full max-w-[55%] object-contain object-left"
      />

      <div className="relative flex h-full items-center justify-end px-4 text-white sm:px-8 lg:px-12 xl:px-20">
        <div className="w-full max-w-md">
          <h3 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">Сикурс</h3>

          <p className="mt-3 text-center text-base sm:mt-4 sm:text-lg lg:text-xl">
            Подберем, установим и обслужим под ключ. Выезд на объект в день обращения
          </p>

          <div className="mt-6 flex gap-2 sm:mt-8 sm:gap-4">
            <Button className="h-auto min-w-0 flex-1 rounded-lg border border-green-600 bg-green-600 px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base">
              Рассчитать стоимость
            </Button>

            <Link
              to="/catalog"
              className="flex min-w-0 flex-1 items-center justify-center rounded-lg border border-white bg-transparent px-3 py-2 text-center text-sm sm:px-6 sm:py-3 sm:text-base"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
