import React from 'react';
import './ComponentStyles.css';

function Skills() {
  
  const technicalSkills = [
    { name: 'Python', category: 'Data' },
    { name: 'SQL', category: 'Data' },
    { name: 'Pandas & NumPy', category: 'Data' },
    { name: 'Tensorflow', category: 'Data' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'JavaScript (React, Node.js)', category: 'Web' },
    { name: 'HTML & CSS', category: 'Web' },
    { name: 'Git', category: 'Tools' },
  ];


  const highlightedCategories = ['Data', 'DevOps'];

  return (
    <section id="skills" className="portfolio-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {technicalSkills.map((skill) => (
          <li
            key={skill.name}
            className={`skill-item ${
              highlightedCategories.includes(skill.category) ? 'highlight-skill' : ''
            }`}
          >
            {skill.name}
            {highlightedCategories.includes(skill.category) && (
              <span className="skill-category-tag"> ({skill.category})</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;