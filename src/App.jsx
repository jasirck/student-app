// import { useState } from "react";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import StudentCard from "./components/StudentCard";
// import StudentForm from "./components/StudentForm";
// import "./App.css";

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

//   let = 60;
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








// import { useState, useEffect } from "react";

// import axios from "axios";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import StudentCard from "./components/StudentCard";
// import StudentForm from "./components/StudentForm";

// function App() {
  

//   const [editingStudent, setEditingStudent] =
//     useState(null);




// // ---------
//   const [students, setStudents] = useState([]);
// //   const [editingStudent, setEditingStudent] =
// //     useState(null);

//   useEffect(() => {
//   axios
//     .get(
//       "https://jsonplaceholder.typicode.com/users"
//     )
//     .then((response) => {
//       // console.log(response.data);

//       const formattedStudents =
//         response.data.map((user) => ({
//           id: user.id,
//           email : user.email,
//           name: user.name,
//           course: user.company.name,
//           mark: Math.floor(
//             Math.random() * 100
//           ),
//         }));
//         console.log(formattedStudents);

//       setStudents(formattedStudents);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
//   // --------

//   // Add
//   const addStudent = (newStudent) => {
//     setStudents([...students, newStudent]);
//   };

//   // Delete
//   const deleteStudent = (id) => {
//     const updatedStudents = students.filter(
//       (student) => student.id !== id
//     );

//     setStudents(updatedStudents);
//   };

//   // Edit
//   const updateStudent = (updatedStudent) => {
//     const updatedStudents = students.map(
//       (student) =>
//         student.id === updatedStudent.id
//           ? updatedStudent
//           : student
//     );

//     setStudents(updatedStudents);
//     setEditingStudent(null);
//   };

//   return (
//     <>
//       <Header />

//       <div className="container mt-4">
//         <StudentForm
//           addStudent={addStudent}
//           editingStudent={editingStudent}
//           updateStudent={updateStudent}
//         />

//         <div className="row">
//           {students.map((student) => (
//             <div
//               className="col-md-4 mb-3"
//               key={student.id}
//             >
//               <StudentCard
//                 student={student}
//                 deleteStudent={deleteStudent}
//                 setEditingStudent={
//                   setEditingStudent
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;





import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;