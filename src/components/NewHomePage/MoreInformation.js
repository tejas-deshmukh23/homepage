import React, { useState, useEffect } from "react";
import "./MoreInformation.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // Import icons from react-icons library
import delhiimage from "./NewHomePageImages/delhiimage.png";
import bangloreimage from "./NewHomePageImages/bangloreimage.png";
import mumbaiimage from "./NewHomePageImages/mumbaiimage.png";
import puneimage from "./NewHomePageImages/puneimage.jpg";
import hyderabadimage from "./NewHomePageImages/Hyderabadimage.jpg";
import kolkataimage from "./NewHomePageImages/kolkataimage.jpg";
import noidaimage from "./NewHomePageImages/noidaimage.png";
import chennaiimage from "./NewHomePageImages/chennaiimage.jpg";

const MoreInformation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const images = [
    { id: 1, src: delhiimage, name: "Personal loan in Delhi" },
    { id: 2, src: bangloreimage, name: "Personal loan in Bangalore" },
    { id: 3, src: mumbaiimage, name: "Personal loan in Mumbai" },
    { id: 4, src: puneimage, name: "Personal loan in Pune" },
    { id: 5, src: hyderabadimage, name: "Personal loan in Hyderabad" },
    { id: 6, src: kolkataimage, name: "Personal loan in Kolkata" },
    { id: 7, src: noidaimage, name: "Personal loan in Noida" },
    { id: 8, src: chennaiimage, name: "Personal loan in Chennai" },
  ];

  // Function to detect if the viewport is in mobile mode
  const checkMobileView = () => {
    const isMobile = window.innerWidth <= 768; // Adjust based on your design needs
    setIsMobileView(isMobile);
  };

  // Listen for window resize to update isMobileView state
  useEffect(() => {
    checkMobileView(); // Initial check
    window.addEventListener("resize", checkMobileView); // Listen for resize events
    return () => {
      window.removeEventListener("resize", checkMobileView); // Clean up listener
    };
  }, []);

  const handleClickNext = () => {
    setCurrentSlide((prev) => {
      const totalSlides = images.length;
      if (prev + (isMobileView ? 1 : 4) >= totalSlides) {
        return 0; // Loop back to the first slide
      } else {
        return prev + (isMobileView ? 1 : 4);
      }
    });
  };

  const handleClickPrev = () => {
    setCurrentSlide((prev) => {
      const totalSlides = images.length;
      if (prev - (isMobileView ? 1 : 4) < 0) {
        // Calculate the previous slide index properly for desktop view
        const slidesToShow = isMobileView ? 1 : 4;
        return Math.floor(totalSlides / slidesToShow) * slidesToShow - slidesToShow;
      } else {
        return prev - (isMobileView ? 1 : 4);
      }
    });
  };

  // Function to dynamically set image styles based on view mode
  const getImageStyle = () => {
    if (isMobileView) {
      return { width: "100%", height: "auto" }; // Adjust for mobile view
    } else {
      return { width: "250px", height: "180px" }; // Default style for desktop
    }
  };

  // Function to set fixed height for images in mobile view
  const getMobileImageStyle = () => {
    return { width: "100%", height: "200px", objectFit: "cover" };
  };

  return (
    <div className="moreinfocomp">
      <h3>More Information</h3>
      <div className="image-slider">
        {/* Arrow left, displayed in both mobile and desktop views */}
        <div className="arrow arrow-left" onClick={handleClickPrev} style={{ display: "block" }}>
          <BsChevronLeft />
        </div>
        
        {/* Images and arrows based on current view mode */}
        {images.slice(currentSlide, currentSlide + (isMobileView ? 1 : 4)).map((image) => (
          <div className="image-container" key={image.id}>
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="slide-image"
              style={isMobileView ? getMobileImageStyle() : getImageStyle()} // Apply dynamic style based on view mode
            />
            <p className="image-name">{image.name}</p>
          </div>
        ))}
        
        {/* Arrow right, displayed in both mobile and desktop views */}
        <div className="arrow arrow-right" onClick={handleClickNext} style={{ display: "block" }}>
          <BsChevronRight />
        </div>
      </div>
      {/* YouTube Video Section */}
      <div className="youtube-video">
        <iframe
          width="100%"
          height="305"
          src="https://www.youtube.com/embed/3_4RaQEeDMY?autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=3_4RaQEeDMY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MoreInformation;
