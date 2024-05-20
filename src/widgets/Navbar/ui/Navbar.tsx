import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={styles.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </nav>
  );
};

export { Navbar };
