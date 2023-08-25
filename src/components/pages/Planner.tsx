import React, { useState } from "react";
import NavBar from "../UIComponents/NavBar";
import { useTranslation } from "react-i18next";
import ListItemLine from "../lists/ListItemLine";
import ListItemBox from "../lists/ListItemBox";
import NestedListItemAdd from "../lists/NestedListItemAdd";
/* import CustomList from "../lists/CustomList"; */

const Planner: React.FC = () => {
  const { t } = useTranslation();
  const [isNestedAddExpanded, setIsNestedAddExpanded] = useState(false);

  const toggleNestedAddExpand = () => {
    setIsNestedAddExpanded(!isNestedAddExpanded);
  };

  /* const listItems = ["Distanse", "Tid", "Stigning", "Rep(s)", "Set(s)"]; */

  return (
    <div className="max-w-md mx-auto">
      <NavBar pageTitle="Planlegger" />
      <div className="relative z-0">
        <input
          type="text"
          id="floating_standard"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {t(`planlegger.øktnavn`)}
        </label>
      </div>

      <ListItemLine placeholder={t(`planlegger.øktnavn`)} />
      <ListItemBox
        label={t(`planlegger.stedTittel`)}
        value=""
        placeholder={t(`planlegger.stedTekst`)}
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
      {/* <CustomList items={listItems} /> */}
      <div className="relative">
        <input
          type="text"
          id="floating_filled"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-purpledull-100 bg-contrast-500 dark:bg-gray-700 border-0 border-b-2 border-contrast-400 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-purpledull-500 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_filled"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-purpledull-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          {t(`planlegger.oppvarming`)}
        </label>
      </div>
    </div>
  );
};

export default Planner;
