import { Button, Header, Link } from "@heroui/react";

// TODO убрать импорты ассетов на уровень выше
import SiLogo from "~/resources/sikurs-logo.png";

// TODO бургер-меню при sm:
export function HeaderLine() {
  return (
    <Header>
      <div className="mx-auto flex max-w-6xl items-center justify-between py-2">
        <img src={SiLogo} alt="СИКУРС" className="h-8 w-auto object-contain" />
        <nav className="flex gap-5">
          <Link href="/" className="hover:text-green-400!">
            О компании
          </Link>
          <Link href="#" className="hover:text-green-400!">
            Услуги
          </Link>
          <Link href="/catalog" className="hover:text-green-400!">
            Товары
          </Link>
          <Link href="#" className="hover:text-green-400!">
            Отзывы
          </Link>
          <Link href="/map" className="hover:text-green-400!">
            Контакты
          </Link>
        </nav>

        <Button className="rounded-lg bg-green-600">Оставить заявку</Button>
      </div>
    </Header>
  );
}
