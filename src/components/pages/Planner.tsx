import React, { useState } from "react";
import NavBar from "../UIComponents/NavBar";
import { useTranslation } from "react-i18next";
import ListItemLine from "../lists/ListItemLine";
import ListItemBox from "../lists/ListItemBox";
import NestedListItemAdd from "../lists/NestedListItemAdd";
import CustomList from "../lists/CustomList";

const Planner: React.FC = () => {
  const { t } = useTranslation();
  const [isNestedAddExpanded, setIsNestedAddExpanded] = useState(false);

  const toggleNestedAddExpand = () => {
    setIsNestedAddExpanded(!isNestedAddExpanded);
  };

  const listItems = ["Distanse", "Tid", "Stigning", "Rep(s)", "Set(s)"];

  return (
    <div>
      <NavBar pageTitle="Planlegger" />
      <ListItemLine placeholder={t(`planlegger.øktnavn`)} />
      <ListItemBox
        label={t(`planlegger.øktnavn`)}
        value=""
        placeholder={t(`planlegger.øktnavn`)}
      />
      {isNestedAddExpanded ? (
        <ListItemBox
          label={t(`planlegger.oppvarming`)}
          value=""
          placeholder={t(`planlegger.oppvarmingTekst`)}
        />
      ) : (
        <NestedListItemAdd
          label={t(`planlegger.oppvarming`)}
          onClick={toggleNestedAddExpand}
        />
      )}
      <CustomList items={listItems} />
    </div>
  );
};

export default Planner;
