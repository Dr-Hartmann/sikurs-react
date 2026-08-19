// TODO убрать импорты ассетов на уровень выше
import SiLogo from "~/resources/sikurs-logo.png";

export function Footer() {
  return (
    <footer className="items-center justify-between border-t border-gray-200 bg-black px-6 py-8">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="max-w-6xl">
          <section>
            {/* <h2 className="font-semibold">
              СИКУРС
            </h2> */}
            <img src={SiLogo} alt="СИКУРС" className="h-8 w-auto object-contain grayscale" />
            <p className="mt-2 text-sm text-gray-600">
              Комплексные решения по видеонаблюдению, контролю доступа и охранной сигнализации.
            </p>
          </section>

          <section className="px-6 py-8">
            <h2 className="font-semibold text-white">Каталог</h2>

            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Видеонаблюдение
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Видеорегистраторы
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Домофоны и СКУД
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Сигнализация
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white">Услуги</h2>

            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Подбор оборудования
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Монтаж и пусконаладка
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Гарантия и сервис
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Доставка и оплата
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white">Контакты</h2>

            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>+7 921 123-32-32</li>
              <li>info@sikurs.ru</li>
              <li>г. Череповец, ул. Городецкая, д. 1</li>
            </ul>

            <button className="mt-4 rounded-lg bg-green-600 px-6 py-3 text-sm text-white hover:bg-green-700">
              Обсудить проект
            </button>
          </section>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4 text-sm text-gray-500">
          <section>© 2026 ООО "СИКУРС". Все права защищены.</section>
          <section className="flex gap-4">
            <a href="#" className="hover:underline">
              Политика конфиденциальности
            </a>

            <a href="#" className="hover:underline">
              Доставка и оплата
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
