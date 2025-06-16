const Pizza = (props) => {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <div className="pizza-details">
        <img src={props.photoName} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </div>
      <span className="price">
        {props.soldOut ? "SOLD OUT" : `$${props.price}`}
      </span>
    </li>
  );
};

export default Pizza;
