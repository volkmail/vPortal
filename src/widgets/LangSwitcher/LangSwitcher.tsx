import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import styles from "./LangSwitcher.module.scss";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onToggleLangHandler = useCallback(
    () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru"),
    []
  );

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [props.className])}
      theme={ThemeButton.CLEAR}
      onClick={onToggleLangHandler}
    >
      {t("Язык")}
    </Button>
  );
};
