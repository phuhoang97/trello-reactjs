import "./Card.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <>
      <div className="task-item">{card.image && card.title}</div>
    </>
  );
};

export default Card;
