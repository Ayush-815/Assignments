import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Not Found Page</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}