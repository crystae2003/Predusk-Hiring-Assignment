import React, { useEffect, useRef } from 'react';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutMeDetailed = `
    I am a third-year B.Tech Computer Science student at IIT Ropar with a diverse background in developing innovative technology solutions. My profile highlights include:   
  `;
  const about_points = [
    `Competitive Programming:
    Strong problem-solving skills honed through extensive experience in C and C++, forming the backbone of my efficient and clean coding practices.`,
    `Web and Backend Development:
    Proficient in creating dynamic front-end experiences using HTML5, CSS3, JavaScript, and React. I also have solid experience in backend development with Python using FastAPI, complemented by hands-on work with SQLite3 for secure and scalable data management.`,
    `Mobile Development:
    Skilled in Flutter and Dart, enabling me to design and develop cross-platform mobile applications that combine native performance with elegant, user-friendly interfaces.`,
    `Notable Achievement:
    My most significant accomplishment to date is winning the IEEE VIP Cup. As part of an innovative team, I contributed to developing a groundbreaking medical eye scan-based diabetes detection model, demonstrating my ability to blend healthcare innovation with advanced technology solutions.`];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom bottom',
          toggleActions: 'restart none none reverse',
        },
      }
    );

    gsap.fromTo(
      heading,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
          end: 'bottom bottom',
          toggleActions: 'restart none none reverse',
        },
      }
    );

    gsap.fromTo(
      content,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: content,
          start: 'top 90%',
          end: 'bottom bottom',
          toggleActions: 'restart none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <h2 className="about-heading" ref={headingRef}>
          About Me
        </h2>
        <div className="about-content" ref={contentRef}>
          {aboutMeDetailed.trim().split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul className="about-list">
            {about_points.map((point, index) => (
              <li key={index} className="about-list-item">
                <div className="bullet-container">
                  <div className="bullet"></div>
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;