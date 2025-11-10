import { Link, useNavigate } from "react-router-dom";
import { students } from "../data/students";

export default function Student() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Takes the user back to the previous page in history
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.sId}>
            <Link to={`/students/${student.sId}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
