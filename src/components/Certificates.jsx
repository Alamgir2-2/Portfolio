import React, { useState } from 'react';
import { AiFillStar, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsAwardFill, BsBuilding, BsFillCalendar2Fill, BsBoxArrowUpRight } from 'react-icons/bs';

const Certificates = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredCard, setHoveredCard] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "Full Stack Web Development",
            issuer: "Programming Hero",
            date: "2023",
            category: "development",
            credentialId: "fcc-fs-2024-001",
            verifyUrl: "#",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
            skills: ["React", "Node.js", "MongoDB"],
            featured: true
        },
        {
            id: 2,
            title: "CCNA Course",
            issuer: "WIT Institute",
            date: "2024",
            category: "Networking",
            credentialId: "aws-saa-2024-002",
            verifyUrl: "#",
            image: "https://plus.unsplash.com/premium_photo-1685697927817-8e8e0ab6ec9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2lja28lMjBuZXR3b3JrfGVufDB8fDB8fHww",
            featured: true,
            skills: ["RP", "ACLs", "Routing"]
        },
        {
            id: 3,
            title: "WEB Design",
            issuer: "Institute of Information Technology, NSTU",
            date: "2023",
            category: "development",
            credentialId: "gda-2023-003",
            verifyUrl: "#",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            skills: ["HTML", "CSS", "JavaScript"]
        },
        // {
        //     id: 4,
        //     title: "Certified Kubernetes Administrator",
        //     issuer: "Cloud Native Computing Foundation",
        //     date: "2024",
        //     category: "cloud",
        //     credentialId: "cka-2024-004",
        //     verifyUrl: "#",
        //     image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        //     skills: ["Kubernetes", "Docker", "Container Orchestration"]
        // },
        // {
        //     id: 5,
        //     title: "Machine Learning Specialization",
        //     issuer: "Stanford University",
        //     date: "2023",
        //     category: "ai",
        //     credentialId: "ml-stanford-2023-005",
        //     verifyUrl: "#",
        //     image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
        //     skills: ["Python", "TensorFlow", "Neural Networks"],
        //     featured: true
        // },
        // {
        //     id: 6,
        //     title: "Digital Marketing Professional",
        //     issuer: "HubSpot Academy",
        //     date: "2023",
        //     category: "marketing",
        //     credentialId: "dmp-hubspot-2023-006",
        //     verifyUrl: "#",
        //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        //     skills: ["SEO", "Content Marketing", "Analytics"]
        // }
    ];

    const categories = [
        { id: 'all', name: 'All Certificates', count: certificates.length },
        { id: 'development', name: 'Development', count: certificates.filter(c => c.category === 'development').length },
        { id: 'cloud', name: 'Cloud & DevOps', count: certificates.filter(c => c.category === 'cloud').length },
        { id: 'ai', name: 'AI & ML', count: certificates.filter(c => c.category === 'ai').length },
        { id: 'analytics', name: 'Data Analytics', count: certificates.filter(c => c.category === 'analytics').length },
        { id: 'marketing', name: 'Marketing', count: certificates.filter(c => c.category === 'marketing').length },
        { id: 'Networking', name: 'Networking', count: certificates.filter(c => c.category === 'Networking').length }
    ];

    const filteredCertificates = selectedCategory === 'all'
        ? certificates
        : certificates.filter(cert => cert.category === selectedCategory);

    const featuredCertificates = certificates.filter(cert => cert.featured);

    return (
        <div id="certificates" className="min-h-screen">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                        <BsAwardFill className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        My Certifications
                    </h1>
                    <p className="text-md text-gray-300 max-w-3xl mx-auto">
                        A showcase of my professional achievements and continuous learning journey in technology and beyond.
                    </p>
                    <div className="mt-4 flex items-center justify-center space-x-8 text-gray-300">
                        <div className="flex items-center space-x-2">
                            <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
                            <span>{certificates.length} Certificates</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AiFillStar className="w-5 h-5 text-yellow-400" />
                            <span>{featuredCertificates.length} Featured</span>
                        </div>
                    </div>
                </div>

                {/* Featured Certificates */}
                {featuredCertificates.length > 0 && (
                    <div className="mb-10 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                            Featured Certifications
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                            {featuredCertificates.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="group relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-4 sm:p-5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105"
                                >
                                    <div className="absolute top-4 right-4">
                                        <AiFillStar className="w-6 h-6 text-yellow-400 fill-current" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-3 sm:space-y-0">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                            <BsAwardFill className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                                                {cert.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center text-gray-300 text-sm sm:text-base mb-2 sm:mb-3">
                                                <BsBuilding className="w-4 h-4 mr-1" />
                                                <span>{cert.issuer}</span>
                                                <BsFillCalendar2Fill className="w-4 h-4 ml-4 mr-1" />
                                                <span>{cert.date}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs sm:text-sm bg-purple-500/30 text-purple-200 rounded-full border border-purple-400/30"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                )}

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${selectedCategory === category.id
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                                }`}
                        >
                            <span>{category.name}</span>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
                        </button>
                    ))}
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3 gap-6">
                    {filteredCertificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                        >
                            {cert.featured && (
                                <div className="absolute top-4 right-4 z-10">
                                    <AiFillStar className="w-5 h-5 text-yellow-400 fill-current" />
                                </div>
                            )}

                            <div className="h-40 overflow-hidden relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            <div className="p-3">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center text-gray-300 text-sm mb-2">
                                    <BsBuilding className="w-4 h-4 mr-2" />
                                    <span>{cert.issuer}</span>
                                </div>
                                <div className="flex items-center text-gray-300 text-sm mb-4">
                                    <BsFillCalendar2Fill className="w-4 h-4 mr-2" />
                                    <span>{cert.date}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-md border border-purple-400/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                {/* <div className="text-sm text-gray-400 mb-4">
                  Credential ID: {cert.credentialId}
                </div> */}
                                {/* <button
                  className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <BsBoxArrowUpRight className="w-4 h-4 mr-2" />
                  <span>Verify Certificate</span>
                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
