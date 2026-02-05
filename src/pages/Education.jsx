import React from 'react';
import '../styles/About.css';


const Education = () => {
  return (
    <div className="about-container">
      <section>
        <h2>Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3>
              <a href="https://cs.utdallas.edu" target="_blank" rel="noopener noreferrer">
                University of Texas at Dallas
              </a>
            </h3>
            <p className="duration">Jan. 2026 -- Present</p>
          </div>
          <p>Doctor of Philosophy in Computer Science</p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>
              <a href="https://www.juniv.edu" target="_blank" rel="noopener noreferrer">
                Jahangirnagar University
              </a>
            </h3>
            <p className="duration">Feb. 2019 -- Apr. 2024</p>
          </div>
          <p>Bachelor of Science in Computer Science and Engineering (CGPA: 3.84, Position: 3/59)</p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>
              <a href="https://www.hcc.edu.bd/" target="_blank" rel="noopener noreferrer">
                Holy Cross College
              </a>
            </h3>
            <p className="duration">2016 -- 2018</p>
          </div>
          <p>Science (GPA: 5.00/5.00)</p>
        </div>
        <div className="education-item">
          <div className="education-header">
            <h3>
              <a href="https://www.facebook.com/bbahschool/" target="_blank" rel="noopener noreferrer">
                Bangladesh Bank Adarsha High School
              </a>
            </h3>
            <p className="duration">2006 -- 2016</p>
          </div>
          <p>Science (GPA: 5.00/5.00)</p>
        </div>
      </section>
    </div>
  );
};

export default Education;
