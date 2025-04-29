
import { useEffect, useState, useRef } from 'react';

interface CounterCardProps {
  value: number;
  suffix?: string;
  title: string;
  duration?: number;
}

const CounterCard = ({ value, suffix = '', title, duration = 2000 }: CounterCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = Math.ceil(value / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-infine-green mb-2">
        {count}{suffix}
      </div>
      <p className="text-lg text-gray-600">{title}</p>
    </div>
  );
};

export default CounterCard;
