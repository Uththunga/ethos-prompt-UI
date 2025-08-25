interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="space-y-2">
      <h4 className="text-ethos-gray text-2xl lg:text-3xl font-bold">
        {title}
      </h4>
      <p className="text-ethos-gray text-xl lg:text-2xl font-normal leading-relaxed">
        {description}
      </p>
    </div>
  );
};
