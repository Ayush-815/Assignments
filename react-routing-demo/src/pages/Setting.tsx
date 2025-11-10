import { useNavigate } from 'react-router-dom';

export default function Setting() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Setting Page</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}