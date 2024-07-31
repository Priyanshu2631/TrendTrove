import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    // State to track visibility of the scroll-to-top button
  const [isVisible, setIsVisible] = useState(false);

  // State to track if the current screen is considered a desktop (>= 1024px)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

   // Function to toggle visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to update the 'isDesktop' state based on window width
  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1024); // Update 'isDesktop' if width >= 1024px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', updateMedia);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', updateMedia);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && isDesktop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-darkblue text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
