import React, { useState } from "react";
import NavBar from "../UIComponents/NavBar";
import { useTranslation } from "react-i18next";
import ListItemLine from "../lists/ListItemLine";
import ListItemBox from "../lists/ListItemBox";
import NestedListItemAdd from "../lists/NestedListItemAdd";

const Planner: React.FC = () => {
  const { t } = useTranslation();
  const [isNestedAddExpanded, setIsNestedAddExpanded] = useState(false);

  const toggleNestedAddExpand = () => {
    setIsNestedAddExpanded(!isNestedAddExpanded);
  };

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
          label={t(`planlegger.leggTilOppvarming`)}
          value=""
          placeholder={t(`planlegger.placeholderOppvarming`)}
        />
      ) : (
        <NestedListItemAdd
          label={t(`planlegger.leggTilOppvarming`)}
          onClick={toggleNestedAddExpand}
        />
      )}
    </div>
  );
};

export default Planner;
