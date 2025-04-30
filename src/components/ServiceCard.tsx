
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  const delayClass = delay > 0 ? `float-delay-${delay}` : 'float';
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 transform-gpu service-card perspective-card">
      <div className={`h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 icon-container ${delayClass}`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
