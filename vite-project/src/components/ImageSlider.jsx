import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- Configuration Constants ---
// In your local project, you could put these in a separate 'config.js' file.
const BEFORE_IMAGE_URL = "https://placehold.co/1200x800/262626/808080?text=Before+Empty+Room";
const AFTER_IMAGE_URL = "https://placehold.co/1200x800/581c87/ffffff?text=After+Royal+Decor";

// ----------------------------------------------------------------------
// 1. ImageSlider Component (SHOULD BE MOVED TO: components/ImageSlider.jsx)
// ----------------------------------------------------------------------
// If moved to a separate file, you would need to export this component: export default ImageSlider;

const ImageSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Unified handler for calculating the new slider position based on mouse/touch event
  const calculatePosition = useCallback((clientX) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      let newPosition = (clientX - containerRect.left) / containerRect.width * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    }
  }, []);

  // Event handlers
  const handleStart = () => { setIsDragging(true); };
  const handleEnd = useCallback(() => { setIsDragging(false); }, []);
  const handleMove = useCallback((event) => {
    if (!isDragging) return;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    calculatePosition(clientX);
    event.preventDefault();
  }, [isDragging, calculatePosition]);

  // Effect for setting up global drag listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove, handleEnd]);


  // Inline styles for the after image clip and slider position
  const afterClipStyle = {
    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
  };
  const sliderStyle = {
    left: `${sliderPosition}%`,
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl cursor-ew-resize group"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {/* Before Image */}
      <img
        src={BEFORE_IMAGE_URL}
        alt="Before Interior"
        className="absolute inset-0 w-full h-full object-cover select-none"
        onDragStart={(e) => e.preventDefault()}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x800/1c1917/ffffff?text=Image+Load+Error"; }}
      />

      {/* After Image (Clipped) */}
      <img
        src={AFTER_IMAGE_URL}
        alt="After Interior"
        className="absolute inset-0 w-full h-full object-cover select-none transition-clip duration-50"
        style={afterClipStyle}
        onDragStart={(e) => e.preventDefault()}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x800/7e22ce/ffffff?text=Image+Load+Error"; }}
      />

      {/* Slider Bar */}
      <div
        className={`absolute top-0 bottom-0 w-1 bg-white transition-shadow duration-100 ${isDragging ? 'shadow-lg' : 'shadow-md'}`}
        style={sliderStyle}
      >
        {/* Slider Handle */}
        <div
          className={`absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-150 ${isDragging ? 'scale-110 ring-4 ring-purple-500/50' : 'group-hover:scale-105 group-hover:ring-2 ring-purple-500/30'}`}
        >
          {/* SVG Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#581C87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
            <polyline points="18 8 22 12 18 16"></polyline>
            <polyline points="2 12 22 12"></polyline>
            <polyline points="6 16 2 12 6 8"></polyline>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-4 left-4 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full">Before</span>
      <span className="absolute bottom-4 right-4 bg-purple-700/80 text-white text-sm font-semibold px-3 py-1 rounded-full">After</span>
    </div>
  );
};
export default ImageSlider