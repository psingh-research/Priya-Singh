import React from "react"

function AwardAndRecognition() {
  const awards = [
    {
      id: 1,
      title: "Commendable Research Award",
      organization: "Delhi Technological University (DTU)",
      year: "2024",
      description: "Presented for Excellence in Research for the year 2023",
    },

  ]

  const technicalProgramCommittee = [
 
  ]

  const journalsReviewed = [
    {
      id: 1,
      name: "International Journal of Software Architecture and Engineering Management (IJSAEM)",
    },
    { id: 2, name: "Multimedia Tools and Applications (MTAP)" },
    { id: 3, name: "Neurocomputing" },
    { id: 4, name: "Scientific Reports" },
    { id: 5, name: "npj Heritage Science" },
    { id: 6, name: "Cluster Computing" },
    { id: 7, name: "Signal, Image and Video Processing" },
    { id: 8, name: "Discover Computing" },
    { id: 9, name: "Social Network Analysis and Mining" },
    {
      id: 10,
      name: "Indonesian Journal of Electrical Engineering and Informatics",
    },
    {
      id: 11,
      name: "Journal of Computer Information Systems & Industrial Management Applications",
    },
    { id: 12, name: "Journal of Trends in Machine Learning & Cybernetics" },
    { id: 13, name: "Journal of Big Data" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Awards and Recognitions
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Achievements and Contributions of Priya Singh
          </p>

          {/* Awards Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Awards
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-sm font-medium">S.No.</th>
                    <th className="py-3 px-4 text-sm font-medium">Title</th>
                    <th className="py-3 px-4 text-sm font-medium">
                      Organization
                    </th>
                    <th className="py-3 px-4 text-sm font-medium">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {awards.map((award, index) => (
                    <tr
                      key={award.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {award.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {award.title}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {award.organization}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {award.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Technical Program Committee Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Technical Program Committee
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-sm font-medium">S.No.</th>
                    <th className="py-3 px-4 text-sm font-medium">Event</th>
                    <th className="py-3 px-4 text-sm font-medium">Role</th>
                    <th className="py-3 px-4 text-sm font-medium">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalProgramCommittee.map((tpc, index) => (
                    <tr
                      key={tpc.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {tpc.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {tpc.event}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {tpc.role}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {tpc.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Review in Reputed Journals Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Review in Reputed Journals
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-sm font-medium">S.No.</th>
                    <th className="py-3 px-4 text-sm font-medium">
                      Journal Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {journalsReviewed.map((journal, index) => (
                    <tr
                      key={journal.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {journal.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {journal.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AwardAndRecognition
