const Pizza = (props) => {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.soldOut ? "SOLD OUT" : `$${props.price}`}</span>
    </li>
  );
};

export default Pizza;
