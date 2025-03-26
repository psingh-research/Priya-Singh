import React from "react"

function TeachingActivities() {
  const undergraduateSubjects = [
    {
      id: 1,
      subjectCode: "CO-101",
      subjectName: "Programming Lab",
      year: "2020-2021",
      semester: "1st",
    },
    {
      id: 2,
      subjectCode: "CO-101",
      subjectName: "Programming Lectures",
      year: "2020-2021",
      semester: "1st",
    },
    {
      id: 3,
      subjectCode: "CO-102",
      subjectName: "Programming Lectures",
      year: "2020-2021",
      semester: "2nd",
    },
    {
      id: 4,
      subjectCode: "CO-102",
      subjectName: "Programming Lab",
      year: "2020-2021",
      semester: "2nd",
    },
    {
      id: 5,
      subjectCode: "CO-101",
      subjectName: "Programming Lectures",
      year: "2021-2022",
      semester: "1st",
    },
    {
      id: 6,
      subjectCode: "SE-313",
      subjectName: "Advanced Data Structures",
      year: "2021-2022",
      semester: "5th",
    },
    {
      id: 7,
      subjectCode: "SE-308",
      subjectName: "Software Reliability",
      year: "2021-2022",
      semester: "5th",
    },
    {
      id: 8,
      subjectCode: "SM SE-409",
      subjectName: "Software Maintenance",
      year: "2021-2022",
      semester: "7th",
    },
    {
      id: 9,
      subjectCode: "SE-326",
      subjectName: "Machine Learning",
      year: "2021-2022",
      semester: "5th",
    },
    {
      id: 10,
      subjectCode: "CO-102",
      subjectName: "Programming Lectures",
      year: "2022-2023",
      semester: "2nd",
    },
    {
      id: 11,
      subjectCode: "SE-308",
      subjectName: "Software Reliability",
      year: "2022-2023",
      semester: "5th",
    },
    {
      id: 12,
      subjectCode: "SE-313",
      subjectName: "Advanced Data Structures",
      year: "2022-2023",
      semester: "5th",
    },
    {
      id: 13,
      subjectCode: "CO-101",
      subjectName: "Programming Lectures",
      year: "2022-2023",
      semester: "1st",
    },
    {
      id: 14,
      subjectCode: "CO-101",
      subjectName: "Programming Lectures",
      year: "2023-2024",
      semester: "1st",
    },
    {
      id: 15,
      subjectCode: "SE-313",
      subjectName: "Advanced Data Structures",
      year: "2023-2024",
      semester: "5th",
    },
    {
      id: 16,
      subjectCode: "SE-308",
      subjectName: "Software Reliability",
      year: "2023-2024",
      semester: "5th",
    },
    {
      id: 17,
      subjectCode: "CO-102",
      subjectName: "Programming Lectures",
      year: "2023-2024",
      semester: "2nd",
    },
  ]

  const postgraduateSubjects = [
    {
      id: 1,
      subjectCode: "CO-101",
      subjectName: "Programming Fundamentals",
      year: "2020-2021",
      semester: "Odd",
    },
    {
      id: 2,
      subjectCode: "CO-101",
      subjectName: "Programming Fundamentals Lab",
      year: "2020-2021",
      semester: "Odd",
    },
    {
      id: 3,
      subjectCode: "CO-102",
      subjectName: "Programming Fundamentals",
      year: "2020-2021",
      semester: "Even",
    },
    {
      id: 4,
      subjectCode: "CO-102",
      subjectName: "Programming Fundamentals Lab",
      year: "2020-2021",
      semester: "Even",
    },
  ]

  // Extract unique subjects from both undergraduate and postgraduate subjects
  const allSubjects = [
    ...undergraduateSubjects.map((subject) => subject.subjectName),
    ...postgraduateSubjects.map((subject) => subject.subjectName),
  ]
  const uniqueSubjects = [...new Set(allSubjects)].sort() // Remove duplicates and sort alphabetically

  // Map unique subjects to a list with IDs for display
  const uniqueSubjectsList = uniqueSubjects.map((subject, index) => ({
    id: index + 1,
    subjectName: subject,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Teaching Activities
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Subjects taught by Priya Singh
          </p>

          {/* Unique Subjects Taught Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Subjects Taught
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-sm font-medium">S.No.</th>
                    <th className="py-3 px-4 text-sm font-medium">
                      Subject Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {uniqueSubjectsList.map((subject, index) => (
                    <tr
                      key={subject.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {subject.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {subject.subjectName}
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

export default TeachingActivities
