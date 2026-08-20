// ! временно
import { Typography } from "@heroui/react/typography";
import { useState } from "react";

import PaginationLine from "~/components/products/PaginationLine";
import ProductCards from "~/components/products/ProductCards";
import response_1 from "~/resources/response-1.json";
import response_2 from "~/resources/response-2.json";
import { CatalogResponseSchema } from "~/schemas/catalog";

import type { Route } from "./+types/catalog";

// TODO изменить описание
export function meta({}: Route.MetaArgs) {
  return [{ title: "Каталог товаров и услуг" }, { name: "description", content: "Тестовый сайт" }];
}

// TODO сделать реальные запросы с реальными ограничениями размера данных от клиента
const responses = [response_1, response_2];
const totalPages = responses.length;

export default function Catalog() {
  const [page, setPage] = useState(1);

  const result = CatalogResponseSchema.safeParse(responses.at(page - 1)!);

  if (!result.success) {
    // TODO все клиентские сообщения брать из файла для мультиязычности
    return <p>Некорректный ответ сервера</p>;
  }

  const { products } = result.data;

  return (
    <main>
      <Typography type="h1" weight="bold" align="center">
        Каталог
      </Typography>
      <ProductCards products={products} />
      <PaginationLine totalPages={totalPages} page={page} onChangePage={setPage} />
    </main>
  );
}
