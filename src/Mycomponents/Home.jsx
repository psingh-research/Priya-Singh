import React from "react"
import Navbar from "@/DepthComponents/Navbar"
import priyasing from "@/assets/priyasinghh.jpeg"

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Main content area */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Section: Professor's Info */}
          <div className="w-full md:w-3/5 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Priya Singh
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-blue-700">
                Professor, Department of Software Engineering
              </h2>
              <div className="h-1 w-32 bg-blue-600 mt-2"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                I am an Assistant Professor in the Department of Software
                Engineering at Delhi Technological University (DTU), where I
                specialize in Deep Learning, Machine Learning, Computer Vision,
                Natural Language Processing, and AI for Software Engineering.
                <br />
                With over 4.5 years of teaching and research experience at DTU,
                I have mentored students and researchers, guiding them in
                cutting-edge AI-driven software solutions. Before transitioning
                to academia, I worked as a Software Developer at Oracle for 2.5
                years, gaining hands-on experience in software design,
                development, and optimization. My industry background allows me
                to integrate theoretical concepts with real-world applications,
                preparing students for both research and industry challenges.
                <br /> I thrive to integrate industry insights with
                research-driven methodologies to bridge the gap between theory
                and practical applications. I have authored several journal and
                conference publications in reputed venues.
                <br />I am committed to fostering innovation in AI-driven
                software solutions and mentoring students in cutting-edge
                research in the field of ML research. Through active
                collaborations with academia and industry, I strive to push the
                boundaries of AI applications in software engineering, security.
                computer vision, and applications of deep learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Information
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-gray-600">Email:</span>
                    <a
                      href="mailto:piyushg@eduvance.in"
                      className="ml-2 text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      priya.singh.academia@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-600">University:</span>
                    <span className="ml-2">
                      Delhi Technological University{" "}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-600">Office:</span>
                    <span className="ml-2">
                      Software Engineering Department{" "}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Memberships */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Professional Memberships
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    IEEE member id- 99272381
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    ACM
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    CSI
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Profile Links */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                Academic Profiles
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <a
                  href="https://scholar.google.com/citations?hl=en&user=7ohLH40AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-medium">
                    Google Scholar
                  </span>
                </a>
                <a
                  href="https://www.webofscience.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-medium">
                    Web of Science
                  </span>
                </a>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57703196400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-medium">Scopus</span>
                </a>
                <a
                  href=" https://www.researchgate.net/profile/Priya-Singh-64?ev=hdr_xprf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-medium">
                    ResearchGate
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyasingh23294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-blue-600 font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Professor's Photo */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg transform translate-x-3 translate-y-3"></div>
              <img
                src={priyasing}
                alt="Priya Singh "
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600">XX+</div>
            <div className="text-gray-600 mt-2">Publications</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600">XX+</div>
            <div className="text-gray-600 mt-2">Citations</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600">XX+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600">XX+</div>
            <div className="text-gray-600 mt-2">Research Projects</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
