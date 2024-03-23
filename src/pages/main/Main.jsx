import "./Main.scss";
import Cards from "../../components/Cards";

const Main = () => {
  return (
    <div className="containerMain">
      <div className="main-title">
        <span></span>
        <h2>Shop new Collection</h2>
        <span></span>
      </div>

      <div className="content">
        <Cards />
      </div>
    </div>
  );
};
export default Main;
