import classes from "../../scss/NumberGame.module.scss";
import { useState } from "react";

// プレイヤー名
const PLAYER = ["A", "B"];

/**
 * 現在のゲーム状況を表示
 * 数字増加、ターン終了ボタン
 *
 * @param  props
 * @returns jsx
 */
const GameArea = (props) => {
  if (props.status) {
    return (
      <div className={classes.game_area}>
        <p>{props.increaseCount}</p>
        <p>{props.turnPlayer}さんのターンです</p>
        <div className={classes.game_area_button}>
          <button
            onClick={() => {
              props.setIncreaseCount();
              props.setClickCount();
            }}
            disabled={props.clickCount === 3 || props.judge ? true : false}
          >
            数字を増加
          </button>
          <button
            onClick={() => {
              props.setClickCountZero();
              props.setTurnPlayer();
            }}
            disabled={props.clickCount === 0 || props.judge ? true : false}
          >
            ターン終了
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>ゲーム開始前です</p>
      </div>
    );
  }
};

/**
 * 勝敗がついた際に、負けた方を表示
 * @param props
 * @returns jsx
 */
const JudgeArea = (props) => {
  if (props.judge) {
    return (
      <div>
        <p>{props.turnPlayer}さんの負け</p>
      </div>
    );
  }
};

export const NumberGame = () => {
  // ゲームのスタート有無
  const [status, setStatus] = useState(false);
  // 特定の数字
  const [deadNumber, setDeadNumber] = useState(10);
  // 積み上げた数字
  const [increaseCount, setIncreaseCount] = useState(0);
  // どちらのターン
  const [turnPlayer, setTurnPlayer] = useState(PLAYER[0]);
  // 1ターンに増加した数
  const [clickCount, setClickCount] = useState(0);
  // paramの検証
  const [paramCheck, setParamCheck] = useState(false);
  // 勝敗判定
  const judge =
    Number(deadNumber) === Number(increaseCount) && Number(increaseCount) !== 0
      ? true
      : false;

  return (
    <div className={classes.main}>
      <div>
        <label for="input-dead-number">数字を入力してください：</label>
        <input
          id="input-dead-number"
          type="text"
          name="dead-number"
          maxLength="2"
          value={deadNumber}
          onChange={(e) => setDeadNumber(e.target.value)}
          disabled={status}
        />
        <button
          onClick={() => {
            if (deadNumber > 0) {
              setStatus(true);
              setParamCheck(false);
            } else {
              setParamCheck(true);
            }
          }}
          disabled={status}
        >
          ゲーム開始
        </button>
        {paramCheck && (
          <div className={classes.param_error}>
            <label>数字２桁以内で入力してください</label>
          </div>
        )}
      </div>
      <GameArea
        status={status}
        deadNumber={deadNumber}
        increaseCount={increaseCount}
        setIncreaseCount={() => setIncreaseCount(increaseCount + 1)}
        turnPlayer={turnPlayer}
        setTurnPlayer={() => {
          turnPlayer === PLAYER[0]
            ? setTurnPlayer(PLAYER[1])
            : setTurnPlayer(PLAYER[0]);
        }}
        clickCount={clickCount}
        setClickCount={() => setClickCount(clickCount + 1)}
        setClickCountZero={() => setClickCount(0)}
        judge={judge}
      />
      <JudgeArea judge={judge} turnPlayer={turnPlayer} />
      <div>
        <button
          onClick={() => {
            setStatus(false);
            setDeadNumber(10);
            setIncreaseCount(0);
            setClickCount(0);
            setTurnPlayer(PLAYER[0]);
          }}
        >
          リセット
        </button>
      </div>
    </div>
  );
};
