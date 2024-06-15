import styles from "./Intro.module.scss";
import villain from "../../images/villain.png";
import target from "../../images/target.png";

interface IntroProps {
  go_to_mission: () => void;
}

export const Intro = ({ go_to_mission }: IntroProps) => {
  return (
    <div className={styles.intro}>
      <div className={styles.text}>
        Ciao Super Visky, l'obbiettivo della missione è respingere 10
        supercattivi prima che arrivino a te.
      </div>
      <div className={styles.targetVillain}>
        <img src={target} className={styles.target} />
        <img src={villain} className={styles.villain} />
      </div>
      <div className={styles.text}>
        Al completamento della missione ci sarà una ricompensa ad aspettarti
      </div>
      <div onClick={go_to_mission} className={styles.goToMissionCTA}>
        VAI ALLA MISSIONE
      </div>
    </div>
  );
};
