import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>存在しないページです</h1>
      <p>
        <i>エラー内容：{error.statusText}</i>
      </p>
    </div>
  );
};
