import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>About Us Page</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}