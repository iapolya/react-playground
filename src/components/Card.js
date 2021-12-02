const Card = () => {
  const { id, name, email } = this.props;
  return (
    <div className="bg-light-pink dib br3 pa3 ma2 grow pointer shadow-2">
      <img src={`https://robohash.org/${id}?set=set4&size=150x150`} alt="cat" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
