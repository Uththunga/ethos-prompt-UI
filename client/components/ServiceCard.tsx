interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <article className="space-y-2">
      <h4 className="text-ethos-gray text-xl sm:text-2xl lg:text-3xl font-bold">
        {title}
      </h4>
      <p className="text-ethos-gray text-base sm:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed">
        {description}
      </p>
    </article>
  );
};
