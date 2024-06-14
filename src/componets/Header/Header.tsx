import styles from "./Header.module.scss";
import heartFilled from "../../images/heart_filled.jpeg";
import heartEmpty from "../../images/heart_empty.jpeg";
import { useAppSelector } from "../../hooks";

interface headerProps {}

export const Header = ({}: headerProps) => {
  const lifes = useAppSelector((store) => store.lifes);
  return (
    <div className={styles.header}>
      <div className={styles.heartWrapper}>
        {Array(3)
          .fill("")
          .map((i, index) => {
            if (lifes >= index + 1) {
              return (
                <img key={index} src={heartFilled} className={styles.heart} />
              );
            }
            return (
              <img key={index} src={heartEmpty} className={styles.heart} />
            );
          })}
      </div>
    </div>
  );
};
