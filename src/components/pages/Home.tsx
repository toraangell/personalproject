import React from "react";
import { useNavigate } from "react-router-dom";
import HomePageToolBar from "../UIComponents/HomePageToolBar";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToPlanner = () => {
    navigate("/planner");
  };

  return (
    <div>
      <HomePageToolBar />
      <h1>Welcome to the Home Page</h1>
      <button
        className="bg-purple-500 hover:bg-purple-300 text-purple-50 font-bold rounded-3xl py-2 px-4"
        onClick={goToPlanner}
      >
        {t(`planlegger.planleggNyØkt`)}
      </button>
    </div>
  );
};

export default Home;
