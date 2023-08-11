import React from "react";
import { useNavigate } from "react-router-dom";

const Planner: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the Planner page</h1>
      <button
        className="bg-purple-500 hover:bg-purple-300 text-purple-50 font-bold rounded-3xl py-2 px-4"
        onClick={goToHome}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Planner;
