import { useNavigate } from "react-router-dom";
import "./error-style.scss";

export default function Unknown() {
  const navigate = useNavigate();
  return (
    <div className="error__page">
      <h1>404</h1>

      <h3>Looks like the page you`re looking for doesn`t exist.</h3>

      <button onClick={() => navigate(-1)}>Take me back home</button>
    </div>
  );
}
