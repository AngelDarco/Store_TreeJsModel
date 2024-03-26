import { useEffect, useRef, useState } from "react";
import Products from "../connections/Products";
import Loader from "./Loader";

const Card = ({ container }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [loadCards, setLoadCards] = useState(false);

  // set observer
  const setObserver = (node, fn) => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fn((x) => !x);
          observer.unobserve(node);
        }
      });
    }, options);
    if (node) observer.observe(node);
  };

  // get products data
  useEffect(() => {
    Promise.resolve(Products()).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  // append cards to container
  const cardsToShowRef = useRef(0);
  const initialCardsLoaded = 3;
  const length = initialCardsLoaded + cardsToShowRef.current;
  useEffect(() => {
    if ((data.length < 1, data.length === cards.length)) return;
    const card = [];
    for (let i = cardsToShowRef.current; i < length; i++) {
      if (i > data.length - 1) break;
      card.push(data[i]);
    }
    setCards((prevCards) => [...prevCards, ...card]);
    cardsToShowRef.current += 3;
  }, [data, loadCards]);

  // add last childs to trigger the intersection observer
  useEffect(() => {
    if (!container.current) return;
    const nodeToObserve = container.current.lastElementChild;
    setObserver(nodeToObserve, setLoadCards);
  }, [cards, container.current]);

  console.log(cards);

  return (
    <>
      {loading ? (
        <Loader color="black" />
      ) : (
        cards.length > 0 &&
        cards.map((product) => {
          return (
            <div className="card" key={product?.id}>
              <div className="img">
                <span className={`${product.id % 2 === 0 ? "spanBlack" : ""}`}>
                  SALE
                </span>
                <img src={product?.image} alt={product?.category} />
              </div>
              <div className="description">
                <p className="title">{product?.title}</p>
                <p className="category">{product?.category}</p>
                <button>${product?.price}</button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
export default Card;
