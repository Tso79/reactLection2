import "./Card.css";

const Card = (props) => {
  const classes = "cad " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
