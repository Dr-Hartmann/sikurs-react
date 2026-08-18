interface Item {
  label: string;
}

interface LocationProps {
  contacts: Item[];
  services: Item[];
}

export function Location({ contacts, services }: LocationProps) {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div
        className="relative pb-32 sm:pb-40 lg:pb-48"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
        }}
      >
        {/* Фон карточки */}
        <div className="absolute inset-0 bg-neutral-800/95" />

        {/* Дополнительный градиент */}
        <div className="absolute inset-0 bg-linear-to-b from-neutral-700/80 via-neutral-800/90 to-transparent" />

        {/* Контент */}
        <div className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="flex max-w-5xl flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-green-500 sm:text-base lg:text-lg">
                Где нас найти
              </p>

              <h2 className="mt-2 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                Офис, консультации и подбор систем безопасности
              </h2>
            </div>

            <p className="text-base leading-relaxed text-gray-200 sm:text-lg">
              Работаем по адресу: г. Череповец, ул. Городецкая, д. 1. Здесь можно обсудить проект с
              инженером, посмотреть подходящие решения и быстро согласовать следующий шаг по
              монтажу, модернизации и сервису.
            </p>

            <div className="flex flex-wrap gap-3">
              {contacts.map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-lg border border-white/30 px-4 py-3 text-sm text-gray-200 sm:text-base"
                >
                  {contact.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="rounded-lg border border-white/30 px-4 py-3 text-sm text-gray-200 sm:text-base"
                >
                  {service.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
