// import { useState } from "react";

// function StudentForm({ addStudent }) {
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [mark, setMark] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newStudent = {
//       id: Date.now(),
//       name, 
//       course,
//       mark: Number(mark),
//     };

//     addStudent(newStudent);

//     setName("");
//     setCourse("");
//     setMark("");
//   };

//   return (
//     <div className="card shadow mb-4">
//       <div className="card-body">
//         <h3>Add New Student</h3>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Student Name"
//             className="form-control mb-3"
//             value={name}
//             onChange={(e) =>
//               setName(e.target.value)
//             }
//             required
//           />

//           <input
//             type="text"
//             placeholder="Course"
//             className="form-control mb-3"
//             value={course}
//             onChange={(e) =>
//               setCourse(e.target.value)
//             }
//             required
//           />

//           <input
//             type="number"
//             placeholder="Mark"
//             className="form-control mb-3"
//             value={mark}
//             onChange={(e) =>
//               setMark(e.target.value)
//             }
//             required
//           />

//           <button
//             className="btn btn-primary"
//             type="submit"
//           >
//             Add Student
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default StudentForm;














import { useState, useEffect } from "react";

function StudentForm({
  addStudent,
  editingStudent,
  updateStudent,
}) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [mark, setMark] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setCourse(editingStudent.course);
      setMark(editingStudent.mark);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingStudent) {
      updateStudent({
        id: editingStudent.id,
        name,
        course,
        mark: Number(mark),
      });
    } else {
      addStudent({
        id: Date.now(),
        name,
        course,
        mark: Number(mark),
      });
    }

    setName("");
    setCourse("");
    setMark("");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h3>
          {editingStudent
            ? "Edit Student"
            : "Add Student"}
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Student Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Course"
            value={course}
            onChange={(e) =>
              setCourse(e.target.value)
            }
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Mark"
            value={mark}
            onChange={(e) =>
              setMark(e.target.value)
            }
          />

          <button
            className="btn btn-primary"
            type="submit"
          >
            {editingStudent
              ? "Update Student"
              : "Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;