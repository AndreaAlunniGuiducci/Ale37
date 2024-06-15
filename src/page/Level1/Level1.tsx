import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import city from "../../images/città_notte.jpg";
import villain from "../../images/villain.png";
import styles from "./Level1.module.scss";
import { loseLife } from "../../store/slice/lifeSlice";
import { addPoint } from "../../store/slice/pointsSlice";

export const Level1 = () => {
  const dispatch = useAppDispatch();

  const [showVillain, setShowVillain] = useState(false);
  const [topPosition, setTopPosition] = useState(50);
  const [leftPosition, setLeftPosition] = useState(40);
  const [timoutId, setTImeoutId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (showVillain) {
      const punchTheHero = setTimeout(() => {
        setShowVillain(false);
        dispatch(loseLife());
      }, 2000);
      setTImeoutId(punchTheHero);
    } else {
      const punchTheHero = setTimeout(() => {
        setShowVillain(true);
        const top = Math.floor(Math.random() * (60 - 40) + 40);
        const left = Math.floor(Math.random() * (80 - 20) + 20);
        setTopPosition(top);
        setLeftPosition(left);
      }, 2000);
      setTImeoutId(punchTheHero);
    }
  }, [showVillain]);

  return (
    <div className={styles.level1}>
      <img
        onClick={() => {
          clearTimeout(timoutId);
          setShowVillain(false);
          dispatch(addPoint());
        }}
        src={villain}
        className={`${styles.villain} ${showVillain && styles.showVillain}`}
        style={{ top: `${topPosition}%`, left: `${leftPosition}%` }}
      />
      <img
        src={city}
        className="levelImage"
        onClick={() => setShowVillain(true)}
      />
    </div>
  );
};
