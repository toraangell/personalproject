//Package dependencies
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { FC } from "react";
import { isMobile } from "react-device-detect";
import { Switch } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Sun, Moon, LockIcon } from "lucide-react";

//Local dependencies
import NavBar from "../UIComponents/NavBar";
import SettingsListItem from "../lists/ListComponent";

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
  const { t } = useTranslation();

  const [enabled, setEnabled] = useState(false);

  return (
    <div className="max-w-md mx-auto">
      <NavBar pageTitle="Brukerinnstillinger" />

      <SettingsListItem
        label={t(`bruker.tittelNavn`)}
        value={t(`bruker.navn`)}
      />
      <SettingsListItem
        label={t(`bruker.passord`)}
        Icon={LockIcon}
        onClick={() => navigate("/password")}
      />

      <SettingsListItem
        enabled={isMobile}
        label={t(`bruker.tittelNavn`)}
        value={t(`bruker.navn`)}
        chevronType="down"
      >
        <div>
          <p>This is the content that appears when the item is expanded.</p>
        </div>
      </SettingsListItem>
      {isMobile ? (
        <SettingsListItem
          enabled={true}
          label={t(`bruker.tittelNavn`)}
          value={t(`bruker.navn`)}
          chevronType="down"
        >
          <div>
            <p>This is the content that appears when the item is expanded.</p>
          </div>
        </SettingsListItem>
      ) : null}
      <div className="py-16">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-purple-900 " : "bg-purple-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Account;
