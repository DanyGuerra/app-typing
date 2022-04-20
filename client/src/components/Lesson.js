import { useNavigate } from "react-router";

function Lesson({ lesson }) {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${lesson.id}`);
  };

  return (
    <button key={lesson.id} onClick={handleNavigate}>
      <h1>{lesson.number}</h1>
    </button>
  );
}

export default Lesson;
