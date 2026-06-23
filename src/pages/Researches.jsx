import React, { useState } from 'react';
import '../styles/Researches.css';

const Researches = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const researchPapers = [
        {
            title: "Computational Intelligence-Based Evaluation of Propagation Modes in Planar Optical Waveguide using PSO and GA",
            authors: "Jannatul Ferdoush Jannati, Sayeda Parvin, Md. Imdadul Islam",
            supervisorUrl: "https://www.juniv.edu/teachers/imdad",
            area: "Computational Intelligence, Optical Fiber, Genetic Algorithm, Particle Swarm Optimization",
            journal: "International Journal of Wireless and Microwave Technologies (IJWMT)",
            volume: "Vol. 16, No. 2, pp. 118–138",
            doi: "https://doi.org/10.5815/ijwmt.2026.02.09",
            date: "Published: April 8, 2026",
            status: "Published",
            abstract: "The solution of the modal equation of a planar optical waveguide is a cumbersome job and usually incident angle of successful modes is determined by a graphical solution. In this research work, we applied two computational intelligence methods: Particle Swarm Optimization (PSO) and Genetic algorithm (GA) in a segment-wise approach to solving the modal equation of the tangent function. The motivation for employing Computational Intelligence (CI) lies in its ability to optimize functions without requiring high-level mathematics or complex statistical models, as opposed to traditional analytical methods. This strategic use of CI significantly reduces the overall computational cost, providing an efficient alternative. Particularly for functions with complex solutions, the utilization of CI or soft computing methods becomes imperative to obtain an approximate solution. Finally, the outcomes derived from both methods (PSO and GA) are meticulously compared with the results obtained through the traditional graphical solution. Notably, the findings reveal a close correlation between the computational intelligence approaches and the graphical method — PSO achieving 99.95% accuracy and GA achieving 99.87% accuracy — offering a promising avenue for advancing the field with a more computationally feasible approach.",
            pdfUrl: "https://www.mecs-press.org/ijwmt/ijwmt-v16-n2/v16n2-9.html",
        },
        {
            title: "A Comparative Analysis of Machine Learning in Stroke Prediction",
            authors: "Iffat Ara Sanzida, Jannatul Ferdoush Jannati, Sumaita Binte Shorif, Asmaul Shahana Begum, Mubasher Adnan Jihad",
            supervisedBy: "Sarnali Basak",
            supervisorUrl: "https://www.juniv.edu/teachers/sarnali.cse",
            area: "Machine Learning, Prediction, Random Forest, SMOTE, Logistic Regression, XGBoost",
            date: "Dec 2023 -- Apr 2024",
            status: "Not Published Yet",
            abstract: "Among the leading causes of death, stroke is third which is caused by the blood circulation interruption in the brain. The post-effects of stroke include paralysis, vision problems, etc. An early prediction of stroke, based on different health conditions like blood pressure, diabetes, heart disease, smoking, etc. can lead one to take precautions for it. In this paper, we will predict stoke using some ML algorithms: Logistic Regression(LR), Random Forest(RF), Synthetic Minority Over-sampling Technique(SMOTE), and Extreme Gradient Boosting(XGBoost). Lastly, we will compare the results of these algorithms.",
            pdfUrl: "https://drive.google.com/file/d/1M3GqiRSR0SFCsx-g119tbdh_uODJr4CV/view",
        },
        {
            title: "Blockchain-Enabled Smart Contracts: Architecture, Applications, and Future Trends",
            authors: "Jannatul Ferdoush Jannati, Israt Jahan Eva",
            supervisedBy: "Anup Majumder",
            supervisorUrl: "https://www.juniv.edu/teachers/anupmajumder",
            area: "Blockchain",
            date: "Aug 2019 -- Jan 2020",
            status: "Not Published Yet",
            abstract: "The past decade has witnessed the rapid evolution in blockchain technologies, which has attracted tremendous interests from both the research communities and industries. The blockchain network was originated from the Internet financial sector as a decentralized, immutable ledger system for transactional data ordering. Nowadays, it is envisioned as a powerful backbone/framework for decentralized data processing and data-driven self-organization in flat, open-access networks. In particular, the plausible characteristics of decentralization, immutability, and self-organization are primarily owing to the unique decentralized consensus mechanisms introduced by blockchain networks. This survey is motivated by the lack of a comprehensive literature review on the development of decentralized consensus mechanisms in blockchain networks. In this paper, we provide a systematic vision of the organization of blockchain networks. By emphasizing the unique characteristics of decentralized consensus in blockchain networks, our in-depth review of the state-of-the-art consensus protocols is focused on both the perspective of distributed consensus system design and the perspective of incentive mechanism design. From a game-theoretic point of view, we also provide a thorough review of the strategy adopted for self-organization by the individual nodes in the blockchain backbone networks. Consequently, we provide a comprehensive survey of the emerging applications of blockchain networks in a broad area of telecommunication. We highlight our special interest in how the consensus mechanisms impact these applications. Finally, we discuss several open issues in the protocol design for blockchain consensus and the related potential research directions.",
            pdfUrl: "https://drive.google.com/file/d/18lJOkQsbsup0PJBRqJh374s5pRgaF4cH/view",
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="researches-container">
            <section>
                <h2>My Research Works</h2>
                <div className="research-grid">
                    {researchPapers.map((paper, index) => (
                        <div className="research-item" key={index}>
                            <div className="research-content">
                                <h3>{paper.title}</h3>
                                <div className="research-meta">
                                    <p><strong>Authors:</strong> {paper.authors}</p>
                                    {paper.supervisedBy && (
                                        <p>
                                            <strong>Supervised By: </strong>
                                            <a href={paper.supervisorUrl} target="_blank" rel="noopener noreferrer">
                                                {paper.supervisedBy}
                                            </a>
                                            <span className="job-title"></span>
                                        </p>
                                    )}
                                    <p><strong>Research Area:</strong> {paper.area}</p>
                                    {paper.journal && (
                                        <p><strong>Journal:</strong> {paper.journal}</p>
                                    )}
                                    {paper.volume && (
                                        <p><strong>Volume:</strong> {paper.volume}</p>
                                    )}
                                    {paper.doi && (
                                        <p><strong>DOI:</strong> <a href={paper.doi} target="_blank" rel="noopener noreferrer">{paper.doi}</a></p>
                                    )}
                                    <p><strong>Date:</strong> {paper.date}</p>
                                    <p className={`status ${paper.status.replace(/\s+/g, '-').toLowerCase()}`}>
                                        {paper.status}
                                    </p>
                                    <div className={`research-abstract ${expandedIndex === index ? 'expand' : ''}`}>
                                        <p><strong>Abstract:</strong> {paper.abstract}</p>
                                    </div>
                                    {paper.abstract.length > 100 && (
                                        <a
                                            className="read-more"
                                            onClick={() => toggleExpand(index)}
                                        >
                                            {expandedIndex === index ? 'Show Less' : 'See More'}
                                        </a>
                                    )}
                                </div>
                                {paper.pdfUrl && !paper.doi && (
                                    <div className="research-actions">
                                        <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Researches;
