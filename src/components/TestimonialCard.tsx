
import { useState } from 'react';

interface TestimonialCardProps {
  image: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ image, name, position, company, quote, rating }: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 ${
        isHovered ? 'shadow-xl scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 italic mb-4">"{quote}"</p>
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{name}</span>
            <span className="text-sm text-gray-500">{position}, {company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
