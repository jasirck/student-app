import { useNavigate } from "react-router-dom";

function Students() {

  const navigate = useNavigate();

  const students = [
    {
      id: 1,
      name: "Ahmed",
      course: "React",
      mark: 90,
    },
    {
      id: 2,
      name: "Rahul",
      course: "Bootstrap",
      mark: 82,
    },
    {
      id: 3,
      name: "Sara",
      course: "JavaScript",
      mark: 95,
    },
    {
      id: 4,
      name: "Anu",
      course: "HTML",
      mark: 75,
    },
  ];

  return (
    <>
      <h2 className="mb-4">Students</h2>

      <div className="row">

        {students.map((student) => (

          <div className="col-md-6 col-lg-4 mb-4" key={student.id}>

            <div className="card shadow">

              <div className="card-body">

                <h4>{student.name}</h4>

                <p>
                  <strong>Course:</strong> {student.course}
                </p>

                <p>
                  <strong>Mark:</strong> {student.mark}
                </p>

                <button
                  className="btn btn-success"
                  onClick={() => navigate("/")}
                >
                  Go Home
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}

export default Students;