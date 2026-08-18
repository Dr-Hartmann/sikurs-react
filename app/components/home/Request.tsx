import { Card } from "@heroui/react";

// TODO реальная форма из heroui, стили
export function Request() {
  return (
    <section className="my-8 bg-neutral-600 p-5">
      <div className="flex items-center">
        {/* Текст */}
        <Card className="w-[42%] rounded-none bg-transparent p-5">
          <p className="text-lg text-green-500">Заявка</p>

          <p className="mt-2 text-4xl font-bold text-white">Подберём решение под вашу задачу</p>

          <p className="text-lg text-gray-300">
            Оставьте контакты и кратко опишите, что нужно:
            <br />
            свет, безопасность, электрика или комплексная поставка. Специалист Сикурс свяжется с
            вами и уточнит детали.
          </p>
        </Card>
      </div>
    </section>
  );
}
