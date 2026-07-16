function StudentCard({ student }) {
  return (
    <div className="card shadow h-100">
      <div className="card-body">
        <h4>{student.name}</h4>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

        <p>
          <strong>Mark:</strong> {student.mark}
        </p>

        <span
          className={`badge ${
            student.mark >= 50
              ? "bg-success"
              : "bg-danger"
          }`}
        >
          {student.mark >= 50 ? "Pass" : "Fail"}
        </span>
      </div>
    </div>
  );
}

export default StudentCard;