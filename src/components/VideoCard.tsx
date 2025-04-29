
import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  videoId: string;
}

const VideoCard = ({ thumbnail, title, duration, videoId }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div 
        className="relative overflow-hidden rounded-xl shadow-lg group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video relative">
          <img 
            src={thumbnail} 
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button 
              onClick={openModal}
              className={`bg-infine-teal/90 hover:bg-infine-teal text-white rounded-full p-4 transform transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
            >
              <Play className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
            {duration}
          </div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="font-medium truncate">{title}</h3>
          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-infine-teal mt-2 hover:underline"
          >
            Watch on YouTube <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="relative w-full max-w-4xl p-2 mx-4" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 text-white hover:text-infine-teal"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
