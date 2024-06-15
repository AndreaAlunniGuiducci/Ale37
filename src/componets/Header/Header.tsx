import { useAppSelector } from "../../hooks";
import heartEmpty from "../../images/heart_empty.jpeg";
import heartFilled from "../../images/heart_filled.jpeg";
import styles from "./Header.module.scss";

interface headerProps {}

export const Header = ({}: headerProps) => {
  const lifes = useAppSelector((store) => store.lifes);
  const points = useAppSelector((store) => store.points);

  return (
    <div className={styles.header}>
      <div className={styles.heartWrapper}>
        Vite:{" "}
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
      <div className={styles.points}>Punti: {points}</div>
    </div>
  );
};
