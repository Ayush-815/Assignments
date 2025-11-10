import { useParams, useNavigate } from "react-router-dom";

const students = [
  { sId: 1, name: "Janak Pathak", bio: "I am a student from abc", rollNumber: 501, email: "jab@gmail.com" },
  { sId: 2, name: "Pradip Pyakurel", bio: "I am a student from sss", rollNumber: 502, email: "py@gmail.com" },
  { sId: 3, name: "Adam Giri", bio: "I am a student from sos", rollNumber: 503, email: "adam@gmail.com" },
  { sId: 4, name: "Jack Lamechhane", bio: "I am a student from la", rollNumber: 504, email: "jack@gmail.com" },
];

function StudentDetailsPage() {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.sId === Number(studentId));

  const handleGoBack = () => {
    navigate("/students");
  };

  if (!student) {
    return <div>No student found</div>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleGoBack}>Go back</button>
      <h2>This is student's details page</h2>
      <div>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Bio:</strong> {student.bio}</p>
        <p><strong>Roll Number:</strong> {student.rollNumber}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
    </div>
  );
}

export default StudentDetailsPage;