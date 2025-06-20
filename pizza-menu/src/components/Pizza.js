const Pizza = (props) => {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <div className="pizza-content">
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span className="price">
          {props.soldOut ? "SOLD OUT" : `$${props.price}`}
        </span>
      </div>
    </li>
  );
};

export default Pizza;
