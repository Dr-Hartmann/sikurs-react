import { z } from "zod";

export type CatalogResponse = z.infer<typeof CatalogResponseSchema>;
export type ProductResponse = z.infer<typeof ProductSchema>;

// TODO - расширить, упростить однотипные поля

const HeadphonesProductSchema = z.object({
  id: z.string(),
  type: z.literal("headphones"),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  brand: z.string(),
  stock: z.number(),
  available: z.boolean(),
  rating: z.number(),
  attributes: z.object({
    color: z.string(),
    connection: z.string(),
    battery_life_hours: z.number(),
  }),
});

const KeyboardProductSchema = z.object({
  id: z.string(),
  type: z.literal("keyboard"),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  brand: z.string(),
  stock: z.number(),
  available: z.boolean(),
  rating: z.number(),
  attributes: z.object({
    layout: z.string(),
    switches: z.string(),
    backlight: z.boolean(),
  }),
});

const ProductSchema = z.discriminatedUnion("type", [
  HeadphonesProductSchema,
  KeyboardProductSchema,
]);

const PaginationSchema = z.object({
  page: z.number(),
  limit: z.number(),
  total: z.number(),
});

export const CatalogResponseSchema = z.object({
  products: z.array(ProductSchema),
  pagination: PaginationSchema,
});
