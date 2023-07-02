import { Link } from "react-router-dom";
import classes from "../sass/Home.module.scss";

const GAME_APP_LIST = [
  { name: "特定の数字を言ったら負け", link: "numbergame", sort: 2 },
  { name: "まるばつゲーム", link: "marubatsugame", sort: 1 },
];

const SortedGameAppList = GAME_APP_LIST.sort((a, b) => {
  return a.sort > b.sort ? -1 : 1;
});

export const Home = () => {
  return (
    <div className={classes.home}>
      <nav>
        <ul>
          {SortedGameAppList.map((gameApp) => {
            return (
              <li key={gameApp.sort}>
                <Link to={gameApp.link}>
                  <img src={`${gameApp.link}.png`} alt={gameApp.name} />
                  <p>{gameApp.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
