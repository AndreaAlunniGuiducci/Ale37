import stlyes from "./GameOver.module.scss";
import superAleDefeat from "../../images/super_ale_defeat.jpg";

export const GameOver = () => {
  return (
    <div className={stlyes.gameOver}>
      <p className={stlyes.text}>GAME OVER</p>
      <img src={superAleDefeat} className={stlyes.superAleDefeat} />
    </div>
  );
};
