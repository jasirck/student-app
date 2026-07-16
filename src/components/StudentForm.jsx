import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [mark, setMark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      course,
      mark: Number(mark),
    };

    addStudent(newStudent);

    setName("");
    setCourse("");
    setMark("");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h3>Add New Student</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            className="form-control mb-3"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="text"
            placeholder="Course"
            className="form-control mb-3"
            value={course}
            onChange={(e) =>
              setCourse(e.target.value)
            }
            required
          />

          <input
            type="number"
            placeholder="Mark"
            className="form-control mb-3"
            value={mark}
            onChange={(e) =>
              setMark(e.target.value)
            }
            required
          />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;