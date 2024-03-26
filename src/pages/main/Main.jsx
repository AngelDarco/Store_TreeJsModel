import "./Main.scss";
import Cards from "../../components/Cards";
import { useRef } from "react";

const Main = () => {
  const containerRef = useRef();
  return (
    <div className="containerMain">
      <div className="main-title">
        <span></span>
        <h2>Shop new Collection</h2>
        <span></span>
      </div>

      <div className="content" ref={containerRef}>
        <Cards container={containerRef} />
      </div>
    </div>
  );
};
export default Main;
