import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Блииин!</h1>
      <p>Такой страницы у нас пока нет 😔</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}