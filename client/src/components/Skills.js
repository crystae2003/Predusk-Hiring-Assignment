import React, { useState } from 'react';
import './Skills.css';

const SkillsCarousel = () => {
  // currentSlide is the index of the leftmost visible slide.
  const [currentSlide, setCurrentSlide] = useState(0);
  

  // Icons as SVG components
  const UsersIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const DeveloperIcon  = () => (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="48"
    //   height="48"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="1.5"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   className="text-gray-400"
    // >
    //   <circle cx="11" cy="11" r="8" />
    //   <path d="m21 21-4.3-4.3" />
    // </svg>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
  );

  const ProbIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 2a7 7 0 0 0 0 20h0V2h0zM9 12h5" />
    <circle cx="19" cy="5" r="2.5" />
    <circle cx="19" cy="12" r="2.5" />
    <circle cx="19" cy="19" r="2.5" />
    <path d="M14 5h3M14 12h3M14 19h3" />
  </svg>
  );

  const ChevronLeft = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );

  const ChevronRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  const slides = [
    {
      title: "Communication & Collaboration",
      icon: <UsersIcon />,
      description:
        "Skilled in conveying complex ideas clearly and confidently across technical and non-technical audiences. I value active listening, clarity, and collaboration—ensuring every interaction drives progress and mutual understanding.",
    },
    {
      title: "Full-Stack Development",
      icon: <DeveloperIcon />,
      description:
        "Experienced in building scalable web applications with seamless front-end and back-end integration. I work with modern technologies to craft efficient, end-to-end digital solutions.",
    },
    {
      title: "Machine Learning",
      icon: <ProbIcon />,
      description:
        "I explore machine learning to build intelligent systems that solve real-world challenges. My work includes models for medical imaging, predictive analytics, and pattern recognition.",
    },
  ];
  
  // Increment currentSlide by one. Since two slides are visible, the maximum valid left index is slides.length - 2.
  // When the end is reached, wrap back to the start.
  const handleNext = () => {
    if (currentSlide < slides.length - 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  // Decrement currentSlide by one. If already at 0, wrap to the last valid index.
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(slides.length - 2);
    }
  };

  // Sample skills data in header (unchanged)
  const skillsData = [
    { name: "Python", category: "Data" },
    { name: "SQL", category: "Data" },
    { name: "NumPy & Pandas", category: "Data" },
    { name: "TensorFlow", category: "Data" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "JavaScript (React, Node.js)", category: "" },
    { name: "HTML & CSS", category: "" },
    { name: "Flutter (Dart)", category: "" },
    { name: "Git", category: "" },
  ];
  const highlightedCategories = ['Data', 'DevOps'];

  return (
    <div className="skills-carousel-wrapper">
      <div className="skills-carousel-container">
        {/* Header Section */}
        <div className="skills-header">
          <div className="header-left">
            <p className="header-subtitle">WHAT I CAN OFFER</p>
            <h1 className="header-title">
              Designing for the future.
              <br />
              Fresh perspective
            </h1>
          </div>
          <div className="header-right">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-divider"></div>
            <div className="skills-list">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-item ${
                    highlightedCategories.includes(skill.category)
                      ? "highlight-skill"
                      : ""
                  }`}
                >
                  <span className="skill-name">{skill.name}</span>
                  {skill.category && (
                    <span className="skill-category">({skill.category})</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-container">
          <button
            onClick={handlePrev}
            className="carousel-btn prev-btn"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>

          {/* Track wrapper limits visible area to two slides */}
          <div className="carousel-track-wrapper">
            {/* cards-track holds all slides and transitions based on currentSlide */}
            <div
              className="cards-track"
              style={{ transform: `translateX(-${currentSlide * 52}%)` }}
            >
              {slides.map((slide, i) => (
                <div className="card" key={i}>
                  <div className="card-icon">{slide.icon}</div>
                  <h3 className="card-title">{slide.title}</h3>
                  <p className="card-description">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="carousel-btn next-btn"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;