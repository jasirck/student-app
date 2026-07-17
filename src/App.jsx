// import { useState } from "react";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import StudentCard from "./components/StudentCard";
// import StudentForm from "./components/StudentForm";

// function App() {
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       name: "Jasir",
//       course: "React",
//       mark: 85,
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       course: "Python",
//       mark: 40,
//     },
//   ]);

//   const addStudent = (newStudent) => {
//     setStudents([
//       ...students,
//       newStudent,
//     ]);
//   };

//   return (
//     <>
//       <Header />

//       <div className="container mt-4">
//         <StudentForm addStudent={addStudent} />

//         <div className="row">
//           {students.map((student) => (
//             <div
//               className="col-md-4 mb-3"
//               key={student.id}
//             >
//               <StudentCard student={student} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;








import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Jasir",
      course: "React",
      mark: 85,
    },
    {
      id: 2,
      name: "Rahul",
      course: "Python",
      mark: 40,
    },
  ]);

  const [editingStudent, setEditingStudent] =
    useState(null);

  // Add
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Delete
  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  // Edit
  const updateStudent = (updatedStudent) => {
    const updatedStudents = students.map(
      (student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
    );

    setStudents(updatedStudents);
    setEditingStudent(null);
  };

  return (
    <>
      <Header />

      <div className="container mt-4">
        <StudentForm
          addStudent={addStudent}
          editingStudent={editingStudent}
          updateStudent={updateStudent}
        />

        <div className="row">
          {students.map((student) => (
            <div
              className="col-md-4 mb-3"
              key={student.id}
            >
              <StudentCard
                student={student}
                deleteStudent={deleteStudent}
                setEditingStudent={
                  setEditingStudent
                }
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;