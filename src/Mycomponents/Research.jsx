import React, { useState } from "react"

function Research() {
  const [activeTab, setActiveTab] = useState("conferences")

 const conferences = [
   // 2024-2025
   {
     id: 15,
     year: "2024-2025",
     title:
       "Comparative study: Word2Vec versus TF-IDF in software defect predictions",
     authors: "G. Sharma and P. Singh",
     venue: "Data Science and Network Engineering (ICDSNE 2024)",
     details:
       "vol. 1165, S. Namasudra, N. Kar, S. K. Patra, and D. Taniar, Eds. Springer, Singapore, 2025",
     doi: "10.1007/978-981-97-8336-6_8",
   },
   {
     id: 16,
     year: "2024-2025",
     title:
       "Enhancing Tor-NonTor traffic classification across diverse classifiers",
     authors: "P. Singh, Ekansh, and M. Khattar",
     venue:
       "International Conference on Intelligent Computing and Communications Techniques, 2024",
     details: "",
     doi: "",
   },
   {
     id: 17,
     year: "2024-2025",
     title: "Enhanced image captioning using scene text - a holistic survey",
     authors: "P. Singh, Anamika, and K. Singh",
     venue:
       "4th International Conference on Machine Learning and Big Data Analytics (ICMLBDA), May 2024",
     details: "",
     doi: "",
   },
   {
     id: 18,
     year: "2024-2025",
     title: "Change in maintenance strategy for effective maintenance",
     authors: "P. Singh and P. S. Rathore",
     venue:
       "Second International Conference on Computer Science, Cyber Security and Information Technology (CCIT), 2024",
     details: "",
     doi: "",
   },
   {
     id: 19,
     year: "2024-2025",
     title: "Exploring the effectiveness of BERT for text summarization",
     authors: "P. Singh, I. Saxena, and Nikita",
     venue:
       "3rd International Conference on Power Electronics, Intelligent Control, and Energy Systems (IEEE-ICPEICES-2024), 2024",
     details: "",
     doi: "",
   },
   {
     id: 20,
     year: "2024-2025",
     title: "Enhancing image captioning using ensemble learning and CLIP model",
     authors: "P. Singh, V. Sakhuja, and B. Ahuja",
     venue:
       "International Conference on Data Analytics and Management, 14th–15th June 2024",
     details: "",
     doi: "",
   },
   {
     id: 21,
     year: "2024-2025",
     title:
       "Comparative study: FastText vs. Doc2Vec in software defect predictions",
     authors: "P. Singh and G. Sharma",
     venue:
       "Second International Conference on Inventive Computing and Informatics, 11th–12th June 2024",
     details: "",
     doi: "",
   },
   {
     id: 22,
     year: "2024-2025",
     title:
       "Deep AST-based approach for software defect prediction: A comparative analysis",
     authors: "R. Malhotra and P. Singh",
     venue:
       "5th International Conference on Data Science and Applications (ICDSA 2024), 17th–19th July 2024",
     details: "",
     doi: "",
   },
   {
     id: 23,
     year: "2024-2025",
     title: "CodeBERT-BiGRU for software defect prediction",
     authors: "R. Malhotra and P. Singh",
     venue:
       "6th International Conference on Artificial Intelligence and Speech Technology (AIST 2025), 2025",
     details: "",
     doi: "",
   },
   // 2023-2024
   {
     id: 8,
     year: "2023-2024",
     title:
       "Empirical Validation of Deep Learning Based on Image Captioning Models",
     authors: "P. Singh and A. Verma",
     venue:
       "Proceedings of the 7th International Conference on Advance Computing and Intelligent Engineering (ICACIE 2022)",
     details:
       "B. Pati, C. R. Panigrahi, P. Mohapatra, and K. C. Li, Eds. Lecture Notes in Networks and Systems, vol. 1. Singapore: Springer, 2024",
     doi: "10.1007/978-981-99-5015-7_38",
   },
   {
     id: 9,
     year: "2023-2024",
     title:
       "A Novel Deep Learning Based Fully Automated Framework for Captcha Security Vulnerability Checking",
     authors: "A. Thakur, Bhavishya, and P. Singh",
     venue: "Data Science and Network Engineering (ICDSNE 2023)",
     details:
       "S. Namasudra, M. C. Trivedi, R. G. Crespo, and P. Lorenz, Eds. Lecture Notes in Networks and Systems, vol. 791. Singapore: Springer, 2024",
     doi: "10.1007/978-981-99-6755-1_33",
   },
   {
     id: 10,
     year: "2023-2024",
     title:
       "Performance Analysis of Image Caption Generation Techniques Using CNN-Based Encoder–Decoder Architecture",
     authors: "P. Singh, C. Agrawal, and R. Bansal",
     venue: "Data Science and Network Engineering (ICDSNE 2023)",
     details:
       "S. Namasudra, M. C. Trivedi, R. G. Crespo, and P. Lorenz, Eds. Lecture Notes in Networks and Systems, vol. 791. Singapore: Springer, 2024",
     doi: "10.1007/978-981-99-6755-1_23",
   },
   {
     id: 11,
     year: "2023-2024",
     title: "Skin Cancer Detection with Edge Devices Using YOLOv7 Deep CNN",
     authors: "D. Datta, H. Prakash, and P. Singh",
     venue: "Proceedings of Data Analytics and Management (ICDAM 2023)",
     details:
       "A. Swaroop, Z. Polkowski, S. D. Correia, and B. Virdee, Eds. Lecture Notes in Networks and Systems, vol. 787. Singapore: Springer, 2023",
     doi: "10.1007/978-981-99-6550-2_5",
   },
   {
     id: 12,
     year: "2023-2024",
     title: "Deep Learning Methods for Vehicle Trajectory Prediction: A Survey",
     authors: "S. Shiwakoti, S. Bikram Shahi, and P. Singh",
     venue: "IoT Based Control Networks and Intelligent Systems (ICICNIS 2023)",
     details:
       "P. P. Joby, M. S. Alencar, and P. Falkowski-Gilski, Eds. Lecture Notes in Networks and Systems, vol. 789. Singapore: Springer, 2024",
     doi: "10.1007/978-981-99-6586-1_37",
   },
   {
     id: 13,
     year: "2023-2024",
     title:
       "Image Captions in Hindi Based on Encoder-Decoder Based Deep Learning Techniques",
     authors: "P. Singh, F. Raja, and H. Sharma",
     venue: "Reliability Engineering for Industrial Processes",
     details:
       "P. K. Kapur, H. Pham, G. Singh, and V. Kumar, Eds. Springer Series in Reliability Engineering. Cham, Switzerland: Springer, 2024",
     doi: "10.1007/978-3-031-55048-5_6",
   },
   // 2022-2023
   {
     id: 6,
     year: "2022-2023",
     title:
       "A literature review on automatic comment generation using deep learning techniques",
     authors: "P. Singh and S. Sharma",
     venue:
       "2022 3rd International Conference on Issues and Challenges in Intelligent Computing Techniques (ICICT)",
     details: "Ghaziabad, India, 2022, pp. 1–7",
     doi: "10.1109/ICICT55121.2022.10064537",
   },
   {
     id: 7,
     year: "2022-2023",
     title:
       "Automatic bug triaging analysis using machine learning techniques: A review",
     authors: "R. Sirohi and P. Singh",
     venue:
       "2022 3rd International Conference on Issues and Challenges in Intelligent Computing Techniques (ICICT)",
     details: "Ghaziabad, India, 2022, pp. 1–8",
     doi: "10.1109/ICICT55121.2022.10064589",
   },
   // 2021-2022
   {
     id: 1,
     year: "2021-2022",
     title:
       "A comparative analysis of deep learning algorithms for skin cancer detection",
     authors: "P. Singh, M. Kumar, and A. Bhatia",
     venue:
       "2022 6th International Conference on Intelligent Computing and Control Systems (ICICCS)",
     details: "2022, pp. 1160-1166",
     doi: "10.1109/ICICCS53718.2022.9788197",
   },
   {
     id: 2,
     year: "2021-2022",
     title:
       "A comparative study of machine learning based image captioning models",
     authors: "P. Singh, P. Gupta, and H. Jain",
     venue:
       "2022 6th International Conference on Trends in Electronics and Informatics (ICOEI)",
     details: "2022, pp. 1555-1560",
     doi: "10.1109/ICOEI53556.2022.9777153",
   },
 ]

  const journals = [
    // 2023-2024
    {
      id: 2,
      year: "2023-2024",
      title:
        "DHG-BiGRU: Dual-Attention based Hierarchical Gated BiGRU for Software Defect Prediction",
      authors: "R. Malhotra and P. Singh", // Corrected "Malhota" to "Malhotra"
      venue: "Information and Software Technology, SCI",
      details: "communicated",
      doi: "",
    },
    {
      id: 4,
      year: "2023-2024",
      title:
        "Harnessing Tc-Ls-Ga-At: A novel deep learning based hybrid approach for wind power forecasting",
      authors: "P. Singh, K. Bansal, and K. Bisht",
      venue:
        "International Journal of System Assurance Engineering and Management",
      details: "2024",
      doi: "", // DOI missing in your input, added placeholder
    },
    {
      id: 5,
      year: "2023-2024",
      title:
        "Recent advances in deep learning models: A systematic literature review",
      authors: "R. Malhotra and P. Singh",
      venue: "Multimedia Tools and Applications",
      details: "vol. 82, pp. 44977–45060, 2023",
      doi: "10.1007/s11042-023-15295-z",
    },
    {
      id: 6,
      year: "2023-2024",
      title:
        "Multi-objective hyperparameter optimization on gradient-boosting for breast cancer detection",
      authors: "P. Singh, S. Gupta, and V. Gupta",
      venue:
        "International Journal of System Assurance Engineering and Management",
      details: "vol. 15, pp. 1676–1686, 2024",
      doi: "10.1007/s13198-023-01955-8",
    },
    {
      id: 7,
      year: "2023-2024",
      title: "Next-LSTM: A novel LSTM-based image captioning technique",
      authors: "P. Singh, C. Kumar, and A. Kumar",
      venue:
        "International Journal of System Assurance Engineering and Management",
      details: "vol. 14, pp. 1492–1503, 2023",
      doi: "10.1007/s13198-023-01956-7",
    },
    // 2020-2021
    {
      id: 1,
      year: "2020-2021",
      title:
        "Exploiting bad-smells and object-oriented characteristics to prioritize classes for refactoring",
      authors: "R. Malhotra and P. Singh",
      venue:
        "International Journal of System Assurance Engineering and Management",
      details: "vol. 11, Suppl. 2, pp. 133–144, 2020",
      doi: "10.1007/s13198-020-01001-x",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Publications Section */}
          <section className="mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Publications
            </h1>
            <p className="text-gray-600 text-center mb-8 text-lg">
              Priya Singh's academic contributions and research work
            </p>

            {/* Tabs for Conferences and Journals */}
            <div className="flex flex-wrap justify-center mb-8">
              <button
                className={`px-6 py-2 mx-2 mb-2 rounded-md font-medium transition-colors ${
                  activeTab === "conferences"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setActiveTab("conferences")}
              >
                Conference Papers ({conferences.length})
              </button>
              <button
                className={`px-6 py-2 mx-2 mb-2 rounded-md font-medium transition-colors ${
                  activeTab === "journals"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => setActiveTab("journals")}
              >
                Journal Articles ({journals.length})
              </button>
            </div>

            {/* Conferences Tab */}
            {activeTab === "conferences" && (
              <div className="space-y-6">
                {["2024-2025", "2023-2024", "2022-2023", "2021-2022"].map(
                  (year) => (
                    <div key={year} className="mb-8">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        {year}
                      </h2>
                      <div className="space-y-4">
                        {conferences
                          .filter((paper) => paper.year === year)
                          .map((paper) => (
                            <div
                              key={paper.id}
                              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                                {paper.title}
                              </h3>
                              <p className="text-gray-700 mb-2">
                                {paper.authors}
                              </p>
                              <p className="text-gray-600 mb-1">
                                <span className="font-medium">Venue:</span>{" "}
                                {paper.venue}
                              </p>
                              {paper.details && (
                                <p className="text-gray-600 mb-1">
                                  {paper.details}
                                </p>
                              )}
                              {paper.doi && (
                                <p className="text-gray-600">
                                  <span className="font-medium">DOI:</span>{" "}
                                  <a
                                    href={`https://doi.org/${paper.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                  >
                                    {paper.doi}
                                  </a>
                                </p>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* Journals Tab */}
            {activeTab === "journals" && (
              <div className="space-y-6">
                {["2023-2024", "2020-2021"].map((year) => (
                  <div key={year} className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {year}
                    </h2>
                    <div className="space-y-4">
                      {journals
                        .filter((paper) => paper.year === year)
                        .map((paper) => (
                          <div
                            key={paper.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          >
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">
                              {paper.title}
                            </h3>
                            <p className="text-gray-700 mb-2">
                              {paper.authors}
                            </p>
                            <p className="text-gray-600 mb-1">
                              <span className="font-medium">Venue:</span>{" "}
                              {paper.venue}
                            </p>
                            {paper.details && (
                              <p className="text-gray-600 mb-1">
                                {paper.details}
                              </p>
                            )}
                            {paper.doi && (
                              <p className="text-gray-600">
                                <span className="font-medium">DOI:</span>{" "}
                                <a
                                  href={`https://doi.org/${paper.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {paper.doi}
                                </a>
                              </p>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Research
