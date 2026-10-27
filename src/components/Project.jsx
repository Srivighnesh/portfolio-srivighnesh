import { useState } from 'react';

function Project(){
    const [showMore, setShowMore] = useState(false);

    const projects = [
        {
            name: 'GenAl Document QA System (RAG)',
            des: 'Using Python, LangChain, FAISS, Streamlit, Gemini api. Built a RAG-based application that allows users to upload PDFs and ask questions, using LangChain for document processing, FAISS for vector search, and Gemini LLM for generating answers.',
            GitUrl: 'https://github.com/Srivighnesh/Gen-AI-RAG',
            liveURL: 'https://dasboard-socaial-media.streamlit.app/',
            tags: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'Gemini']
        },
        
        // {
        //     name: 'GenAl Document QA System (RAG)',
        //     des: 'Using Python, LangChain, FAISS, Streamlit, Gemini api. Built a RAG-based application that allows users to upload PDFs and ask questions, using LangChain for document processing, FAISS for vector search, and Gemini LLM for generating answers.',
        //     GitUrl: 'https://github.com/Srivighnesh/Gen-AI-RAG',
        //     tags: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'Gemini']
        // },
        {
            name: 'Social Media User Behavior Analysis using Unsupervised Learning.',
            des: 'Using Python, Streamlit, Scikit-learn, Pandas, Plotly Developed an interactive dashboard to analyze social media user behavior using EDA, K-Means, and DBSCAN clustering, with cluster evaluation using Silhouette Score and Davies-Bouldin Index and interactive visualizations using Plotly and PCA.',
            GitUrl: 'https://github.com/Srivighnesh/Social-Media-User-Behavior-Dashboard',
            liveURL: 'https://dasboard-socaial-media.streamlit.app/',
            tags: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Streamlit']
        }

    ];

    const displayedProjects = showMore ? projects : projects.slice(0, 2);
    return(
        <section className="px-6 md:px-12 py-16 md:py-20" >
            <div className="max-w-6xl mx-auto">
               <h2 className="cards-h2 text-3xl md:text-4xl font-alfa-slab font-bold mb-12 text-center">
                    Projects
               </h2>
               <div className="space-y-6">
                    {
                    displayedProjects.map((project, index) => (
                        <div key={index} className="glass-effect border border-amber-400/20 rounded-xl p-6 md:p-8 card-hover group">
                            {index < 2 ? (
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        {project.des}
                                    </p>
                                    {project.tags && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-400/30">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className='flex flex-row gap-3 items-center'>
                                        <a
                                            href={project.GitUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 
                                                    text-black px-4 py-2 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-amber-400/50 transition-shadow w-fit"
                                        >
                                            View on GitHub
                                        </a>
                                        <a
                                            href={project.liveURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg 
                                                font-bold text-sm hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 w-fit" >
                                            Live Demo
                                        </a>
                                    </div>

                                </div>
                            ) : (
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-amber-400">
                                        {project.name}
                                    </h3>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <a
                                            href={project.GitUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 
                                                    rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-amber-400/50 transition-shadow w-fit"
                                        >
                                            View on GitHub
                                        </a>
                                        <a
                                            href={project.GitUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg 
                                                font-bold text-sm hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 w-fit"
                                        >
                                            Live Demo
                                        </a>
                                    </div>

                                </div>
                            )}
                        </div>
                    ))}
               </div>
               {projects.length > 2 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-400/50 transition-shadow"
                        >
                            {showMore ? 'Show Less Projects' : 'See More Projects'}
                        </button>
                    </div>
               )}
            </div>
        </section>
    )
}

export default Project