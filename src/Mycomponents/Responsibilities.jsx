import React from "react"

function Responsibilities() {
  const workshopsOrganized = [
    {
      id: 1,
      workshopTitle: "Desh ka Mentor Program",
      date: "2021-22",
      role: "Faculty Coordinator",
    },
    {
      id: 2,
      workshopTitle: "Design Thinking Workshop",
      date: "13th-14th January 2022",
      role: "Organizer",
    },
    {
      id: 3,
      workshopTitle: "IPR & Start-Up Workshop",
      date: "28th April 2022",
      role: "Organizer",
    },
    {
      id: 4,
      workshopTitle: "World Entrepreneurs Day",
      date: "21st August 2022",
      role: "Coordinator",
    },
    {
      id: 5,
      workshopTitle:
        "Startup Planning Workshop - 'How to Plan for Start-up and Legal & Ethical Steps' (Collaboration with DTU-IRD & IIC-DTU)",
      date: "13th-14th January 2023",
      role: "Organizer",
    },
    {
      id: 6,
      workshopTitle: "DTU USIP Interns Interview",
      date: "2023-24",
      role: "Interviewer",
    },
    {
      id: 7,
      workshopTitle: "Desh ka Mentor Program",
      date: "2023-24",
      role: "Faculty Coordinator",
    },
  ]

  const universityDuties = [
    {
      id: 1,
      typeOfDuty: "M. Tech Dy. Coordinator (Admissions)",
      year: "2020 till 2025",
      role: "Coordinator",
    },
    {
      id: 2,
      typeOfDuty: "Placement and Alumni Coordination",
      year: "2022-23",
      role: "Coordinator",
    },
    {
      id: 3,
      typeOfDuty: "Desh ke Mentor Program",
      year: "2022-23",
      role: "Faculty Coordinator",
    },
    {
      id: 4,
      typeOfDuty: "Online Document Verification for DARC Recruitment",
      year: "Sept 24-28, 2022",
      role: "Coordinator",
    },
    {
      id: 5,
      typeOfDuty:
        "Workshop on 'Design Thinking, Critical Thinking, and Innovative Design'",
      year: "Jan 13-14, 2022",
      role: "Organizer",
    },
    {
      id: 6,
      typeOfDuty:
        "Orientation cum Induction Program for B.Tech. 1st Year Students",
      year: "July 31 - Aug 4, 2023",
      role: "Overall Coordinator",
    },
    {
      id: 7,
      typeOfDuty: "Discipline Committee for newly admitted B.Tech. students",
      year: "July 31 - Aug 4, 2023",
      role: "Coordinator",
    },
    {
      id: 8,
      typeOfDuty: "Faculty Coordinator for B17 Batch (1st Year Students)",
      year: "2022",
      role: "Faculty Coordinator",
    },
    {
      id: 9,
      typeOfDuty:
        "NAAC Data Collection (Criteria 5 - Infrastructure & Learning Resources)",
      year: "2021-22",
      role: "Coordinator",
    },
    {
      id: 10,
      typeOfDuty: "Workshop on World Entrepreneurs Day",
      year: "Aug 21, 2022",
      role: "Coordinator",
    },
    {
      id: 11,
      typeOfDuty: "IQAC Data Collection (Criteria 10)",
      year: "2022",
      role: "Committee Member",
    },
    {
      id: 12,
      typeOfDuty: "YUVAAN-2023 (Literature & Film Festival)",
      year: "2023",
      role: "Formal Events Coordinator",
    },
    {
      id: 13,
      typeOfDuty:
        "Workshop on 'How to plan for start-up and legal & ethical steps'",
      year: "Jan 13-14, 2023",
      role: "Organizer",
    },
    {
      id: 14,
      typeOfDuty: "NEP 2020 Preparedness Documents for AQAR",
      year: "2021-22",
      role: "Member Secretary",
    },
    {
      id: 15,
      typeOfDuty: "Raj Soin Hall & Homecoming Meet Inaugural Ceremony",
      year: "Oct 28, 2022",
      role: "Registration & Decoration Committee Member",
    },
    {
      id: 16,
      typeOfDuty:
        "M. Tech Admissions Dy. Coordinator (Dept. of Software Engg.)",
      year: "2023-24",
      role: "Deputy Coordinator",
    },
    {
      id: 17,
      typeOfDuty: "Placement and Alumni Coordinator (Dept. of Software Engg.)",
      year: "2023-24",
      role: "Coordinator",
    },
    {
      id: 18,
      typeOfDuty: "Faculty Coordinator for Desh ke Mentor",
      year: "2023-24",
      role: "Faculty Coordinator",
    },
    {
      id: 19,
      typeOfDuty:
        "Overall Coordinator for Orientation cum Induction Program (B.Tech 1st Sem)",
      year: "2023-24",
      role: "Overall Coordinator",
    },
    {
      id: 20,
      typeOfDuty:
        "Coordinator for Discipline Committee (Newly Admitted B.Tech Students)",
      year: "2024",
      role: "Coordinator",
    },
    {
      id: 21,
      typeOfDuty: "Member for Criteria 9 for NBA",
      year: "2023",
      role: "Member",
    },
    {
      id: 22,
      typeOfDuty: "Member for Conducting IIC Interview",
      year: "2023-24",
      role: "Member",
    },
    {
      id: 23,
      typeOfDuty:
        "Member for Committee for Collection of Data for Criteria-10 for NAAC",
      year: "2023-24",
      role: "Member",
    },
    {
      id: 24,
      typeOfDuty:
        "Coordinator in Formal Events Coordination Committee (YUVAAN-2023)",
      year: "2023",
      role: "Coordinator",
    },
    {
      id: 25,
      typeOfDuty:
        "Deputy Coordinator for Innovation and Entrepreneurship (Atal Tinkering Labs)",
      year: "2024",
      role: "Deputy Coordinator",
    },
    {
      id: 26,
      typeOfDuty:
        "Coordinator for Stage Management Duties (Exploring Engineering)",
      year: "July 2024",
      role: "Coordinator",
    },
    {
      id: 27,
      typeOfDuty:
        "Paper setter for CO-101 (odd semester) and CO-102 (even semester), conducted tests for CWS, MTE, ETE, and PRS",
      year: "2020-2021",
      role: "Paper Setter & Examiner",
    },
    {
      id: 28,
      typeOfDuty:
        "Performed examiner duties (paper setting, paper checking, grading) for CO-101, CO-102",
      year: "2020-2021",
      role: "Examiner",
    },
    {
      id: 29,
      typeOfDuty:
        "Coordinated M.Tech joint admissions for CSE, ISY, AI, and SWE",
      year: "2020-2021",
      role: "Admission Coordinator",
    },
    {
      id: 30,
      typeOfDuty: "M.Tech coordination-related activities",
      year: "2020-2021",
      role: "Coordinator",
    },
    {
      id: 31,
      typeOfDuty: "Convocation 2024 November Disciplinary Committee",
      year: "2023-24",
      role: "Coordinator Disciplinary Committee",
    },
    {
      id: 32,
      typeOfDuty: "NBA Visit Criteria 3",
      year: "2023-24",
      role: "Member",
    },
    {
      id: 33,
      typeOfDuty: "Zero Waste Technical Committee",
      year: "2024-25",
      role: "Member",
    },
    {
      id: 34,
      typeOfDuty: "World Teachers Day Printing & Publication Committee",
      year: "2024-25",
      role: "Member",
    },
    {
      id: 35,
      typeOfDuty: "Program Advisor",
      year: "2024-25",
      role: "Coordinator",
    },
    {
      id: 36,
      typeOfDuty: "Exploring Engineering Stage Management Committee",
      year: "2024-25",
      role: "Member",
    },
    {
      id: 37,
      typeOfDuty: "Atal Tinkering Lab School Linkage",
      year: "2024-25",
      role: "Dy. Coordinator",
    },
    {
      id: 38,
      typeOfDuty: "Open House Disciplinary Committee",
      year: "2022-23, 2023-24",
      role: "Coordinator",
    },
    {
      id: 39,
      typeOfDuty: "Desh ke Mentor Conclave",
      year: "2023-24",
      role: "Coordinator",
    },
    {
      id: 40,
      typeOfDuty:
        "DANICS 3-week Technical Training Programme from 11-29 September 2023",
      year: "2023-24",
      role: "Member",
    },
    {
      id: 41,
      typeOfDuty: "Paytm-DTU Wisdom on Wheels",
      year: "2024-25",
      role: "Core Committee Member",
    },
    {
      id: 42,
      typeOfDuty:
        "2nd International Conference on Social Responsibilities of Educational Institutions on 12 January",
      year: "2024-25",
      role: "Coordinator",
    },
  ]

  const departmentalDuties = [
    {
      id: 1,
      typeOfDuty: "Paper setter for SE-409, SE-313, CO-101, SE-326, SE-308",
      year: "2021-22",
      role: "Paper Setter & Examiner",
    },
    {
      id: 2,
      typeOfDuty: "Dy. Coordinator for Ph.D. Admission",
      year: "2021-22",
      role: "Deputy Coordinator",
    },
    {
      id: 3,
      typeOfDuty: "Placement and Alumni Coordinator",
      year: "2021-22",
      role: "Coordinator",
    },
    {
      id: 4,
      typeOfDuty: "Faculty Coordinator for 'Desh ka Mentor' program",
      year: "2021-22",
      role: "Faculty Coordinator",
    },
    {
      id: 5,
      typeOfDuty:
        "Organized two-day workshop on Design Thinking, Critical Thinking, and Innovation Design",
      year: "2021-22",
      role: "Coordinator",
    },
    {
      id: 6,
      typeOfDuty:
        "Organized one-day workshop on Intellectual Property Rights (IPRs) & IP Management for Start-Up",
      year: "2021-22",
      role: "Coordinator",
    },
    {
      id: 7,
      typeOfDuty:
        "Coordinated M.Tech joint admissions for CSE, ISY, AI, and SWE",
      year: "2020-21",
      role: "Admission Coordinator",
    },
    {
      id: 8,
      typeOfDuty: "Lab Incharge for Computer System Lab",
      year: "2021 onwards",
      role: "Lab Incharge",
    },
    {
      id: 9,
      typeOfDuty:
        "Coordinator and Examiner for Various Courses (CO101, CO102, SE313, SE106, SE308, SE103, B.Tech Project, B.Tech Mini Project)",
      year: "2023-24",
      role: "Coordinator & Examiner",
    },
    {
      id: 10,
      typeOfDuty: "Evaluation of Dissertation for M.Tech Final Year",
      year: "2020 onwards",
      role: "Coordinator",
    },
    {
      id: 11,
      typeOfDuty: "Industrial Linkage MoU Coordinator",
      year: "2023-24, 2024-25",
      role: "Coordinator",
    },
    {
      id: 12,
      typeOfDuty: "NAAC Internal Audit",
      year: "2023-24",
      role: "Coordinator",
    },
    {
      id: 13,
      typeOfDuty: "Mentor for M.Tech (DSC) 3rd Semester (Odd Sem)",
      year: "2023-24",
      role: "Mentor",
    },
    {
      id: 14,
      typeOfDuty: "Summer Semester Coordination for SE313 & SE427",
      year: "2023-24",
      role: "Coordinator",
    },
    {
      id: 15,
      typeOfDuty: "B.Tech Project Coordinator",
      year: "2023-24, 2024-25",
      role: "Coordinator",
    },
    {
      id: 16,
      typeOfDuty: "Training & placement",
      year: "2021-22",
      role: "Coordinator",
    },
    {
      id: 17,
      typeOfDuty: "M.Tech Project",
      year: "2022-23, 2023-24",
      role: "Coordinator",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Administrative Activities
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Contributions of Priya Singh in various roles
          </p>

          {/* Workshops Organized Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Workshops Organized
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-sm font-medium">S.No.</th>
                    <th className="py-3 px-4 text-sm font-medium">
                      Workshop Title
                    </th>
                    <th className="py-3 px-4 text-sm font-medium">Date</th>
                    <th className="py-3 px-4 text-sm font-medium">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {workshopsOrganized.map((workshop, index) => (
                    <tr
                      key={workshop.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {workshop.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {workshop.workshopTitle}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {workshop.date}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {workshop.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* University Duties Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              University Duties
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-sm font-medium">S.No.</th>
                    <th className="py-3 px-4 text-sm font-medium">
                      Type of Duty
                    </th>
                    <th className="py-3 px-4 text-sm font-medium">Year</th>
                    <th className="py-3 px-4 text-sm font-medium">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {universityDuties.map((duty, index) => (
                    <tr
                      key={duty.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.typeOfDuty}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.year}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Departmental Duties Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Departmental Duties
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-sm font-medium">S.No.</th>
                    <th className="py-3 px-4 text-sm font-medium">
                      Type of Duty
                    </th>
                    <th className="py-3 px-4 text-sm font-medium">Year</th>
                    <th className="py-3 px-4 text-sm font-medium">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentalDuties.map((duty, index) => (
                    <tr
                      key={duty.id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.typeOfDuty}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.year}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {duty.role}
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

export default Responsibilities
