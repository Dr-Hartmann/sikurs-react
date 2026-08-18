import SealCheck from "@gravity-ui/icons/SealCheck";
import { Card, Chip, ToggleButton } from "@heroui/react";

import type { ProductResponse } from "~/schemas/catalog";

type ProductCardsProps = {
  products: ProductResponse[];
};

export default function ProductCards({ products }: ProductCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((i) => (
        <Card key={i.id}>
          <Card.Header>
            <div className="flex items-center justify-between">
              <Card.Title className="mr-1 truncate" title={i.name}>
                {i.name}
              </Card.Title>
              <ToggleButton size="sm" isSelected={i.available} isDisabled={true}>
                <SealCheck />
              </ToggleButton>
            </div>

            <Card.Description className="mr-2 line-clamp-2" title={i.description}>
              {i.description}
            </Card.Description>
          </Card.Header>

          <Card.Content>
            {i.type === "headphones" && <p>Время жизни: {i.attributes.battery_life_hours} ч.</p>}

            {i.type === "keyboard" && (
              <>
                <p>Тип клавиш: {i.attributes.switches}</p>
                <p>Подсветка: {i.attributes.backlight ? "Да" : "Нет"}</p>
              </>
            )}
          </Card.Content>

          <Card.Footer className="flex-wrap gap-2">
            {[i.brand, i.slug, i.type].map((c) => {
              return (
                c && (
                  <Chip key={c} size="sm" variant="primary">
                    {c}
                  </Chip>
                )
              );
            })}
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
