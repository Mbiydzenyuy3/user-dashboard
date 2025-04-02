import { useNavigate } from "react-router";

export default function BackToHomeButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="buttondiv">
        <button className="back-home secondary" onClick={onClick}>
          Back to home
        </button>
      </div>
    </>
  );
}
