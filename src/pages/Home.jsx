import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle, faOrcid } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/images/my image.jpg';
import resumePDF from '../assets/files/Resume.pdf';


const Home = () => {
    return (
        <div className="home">
            <div className="content-container">

                {/* Left Section */}
                <div className="left-section">
                    <img
                        src={profileImage}
                        alt="Jannatul Ferdoush Jannati"
                        className="profile-photo"
                    />

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/jannat349/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/jannat-349`" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://scholar.google.com/citations?user=GbZ2fZgAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="https://orcid.org/0009-0002-0053-884X" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faOrcid} />
                        </a>
                    </div>

                    <div className="email-section">
                        <p><strong>Work:</strong> jannatul.jannati@utdallas.edu</p>
                        <p><strong>Personal:</strong> jannatul.6249@gmail.com</p>
                        <a
                            href={resumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-link"
                        >
                            My Resume
                        </a>

                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section">

                    <h3 className="bio-title">
                        Hello, I’m glad you’re here!!
                    </h3>

                    <p className="bio-text">
                        I am a <strong>PhD student in Computer Science</strong> at
                        <a href="https://cs.utdallas.edu" target="_blank" rel="noopener noreferrer">
                            {' '}The University of Texas at Dallas
                        </a>, where I began my doctoral studies in <strong>Spring 2026</strong>.
                        I am currently serving as a <strong>Teaching Assistant</strong>.
                    </p>

                    <p className="bio-text">
                        Prior to my doctoral studies, I worked as a <strong>Software Quality Assurance (SQA) Engineer</strong> at
                        <a href="https://www.dsinnovators.com" target="_blank" rel="noopener noreferrer">
                            {' '}Dynamic Solution Innovators Ltd.
                        </a>.
                        I was part of the <strong>DPE team</strong>, contributing to the development of the
                        <a href="https://ipemis.dpe.gov.bd/" target="_blank" rel="noopener noreferrer">
                            {' '}IPEMIS system
                        </a>,
                        a nationwide digital platform supporting primary education in Bangladesh.
                    </p>

                    <p className="bio-text">
                        I earned my <strong>Bachelor of Science in Computer Science and Engineering</strong> from
                        <a href="https://juniv.edu/" target="_blank" rel="noopener noreferrer">
                            {' '}Jahangirnagar University
                        </a>.
                        My undergraduate education provided a strong foundation in algorithms, data analysis,
                        and research-oriented problem solving.
                    </p>

                    <p className="bio-text">
                        My undergraduate research focused on solving <strong>transcendental modal equations</strong>
                        using <strong>Particle Swarm Optimization (PSO)</strong> and
                        <strong> Genetic Algorithms (GA)</strong>.
                        This work applied metaheuristic optimization techniques to optical fiber propagation problems
                        and was conducted under the supervision of
                        <a href="https://juniv.edu/teachers/imdad" target="_blank" rel="noopener noreferrer">
                            {' '}Dr. Md. Imdadul Islam
                        </a>.
                    </p>

                    <p className="research-interest">
                        <strong>Research Interests:</strong> Artificial Intelligence, Machine Learning,
                        Cybersecurity, and Robotics.
                    </p>

                    <div className="button-container">
                        <Link to="/projects" className="btn">Projects</Link>
                        <Link to="/researches" className="btn">Research</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
