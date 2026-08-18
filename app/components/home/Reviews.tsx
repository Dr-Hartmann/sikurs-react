import { Card } from "@heroui/react";

interface Review {
  id: string;
  name: string;
  product: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="my-8">
      {/* TODO Typography */}
      <div className="mb-4 text-green-600">
        <p className="text-xl">Отзывы</p>
        <h3 className="mt-2 text-4xl font-bold">Покупатели так отзываются о нас</h3>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="rounded-lg border border-gray-300 bg-white">
            <Card.Header>
              <Card.Title className="text-xl font-bold text-green-600">{review.name}</Card.Title>

              <Card.Description className="text-lg text-gray-900">
                {review.product}
              </Card.Description>
            </Card.Header>
            {/* TODO нельзя автоматизировать звёзды? */}
            <Card.Content>
              <div className="flex gap-1" aria-label={`Оценка ${review.rating} из 5`}>
                {Array.from({ length: 5 }, (_, star) => (
                  <span
                    key={star}
                    className={star < review.rating ? "text-orange-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-2 text-lg text-gray-500">{review.comment}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}
