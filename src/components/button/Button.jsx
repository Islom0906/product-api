import { Link } from "react-router-dom";
const Button = ({ bg, value, link }) => {
  return link ? (
    <Link to={link} className={`px-8 py-3 ${
      bg === "button" ? "bg-button" : "bg-white"
    } border rounded-lg ${bg === "button" ? "text-white" : "text-button"}`}>{value}</Link>
  ) : (
    <button
      className={`px-8 py-3 ${
        bg === "button" ? "bg-button" : "bg-white"
      } border rounded-lg ${bg === "button" ? "text-white" : "text-button"}`}
    >
      {value}
    </button>
  );
};

export default Button;
