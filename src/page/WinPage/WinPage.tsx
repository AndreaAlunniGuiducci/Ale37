import styles from "./WinPage.module.scss";
import superAleWon from "../../images/super_ale_won.png";
import prize from "../../images/viaggio_compleanno.jpg";
import { useState } from "react";

export const WinPage = () => {
  const [showPrize, setShowPrize] = useState(false);

  return !showPrize ? (
    <div className={styles.winPage}>
      <div className={styles.text}>HAI VINTO</div>
      <div
        onClick={() => {
          setShowPrize(true);
        }}
        className={styles.winCTA}
      >
        Clicca qui per la ricompensa
      </div>
      <img src={superAleWon} className={styles.superAleWon} />
    </div>
  ) : (
    <div className={styles.prizeContainer}>
      <div className={styles.text}>Un viaggio al mare</div>
      <img className={styles.prize} src={prize} />
      <div className={styles.text}>
        per un meritato riposo dal lavoro di Supermamma
      </div>
    </div>
  );
};
