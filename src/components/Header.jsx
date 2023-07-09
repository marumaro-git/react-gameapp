import classes from "../scss/Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={classes.header}>
      <p>ゲームアプリ</p>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>勝敗結果</li>
        </ul>
      </nav>
    </header>
  );
};
