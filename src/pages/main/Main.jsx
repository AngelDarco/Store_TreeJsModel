import './Main.scss';
import Cards from '../../conponents/cards/Cards';

const Main = () => {
    return (
        <div className="containerMain">
            <div className="title">
                <span></span>
                <h2>Shop new Collection</h2>
                <span></span>
            </div>
        
            <div className="content">
                <Cards/>
            </div>
        
        </div>      
    )
}
export default Main;

