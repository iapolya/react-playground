import { ICat } from '../types';

interface SrcProps {
  id: number;
  size: number;
}

const getImgSrc = ({ id, size }: SrcProps) => {
  return `https://robohash.org/${id}?set=set4&size=${size}x${size}`;
};

const Card = (props: ICat) => {
  const { id, name, email } = props;

  const small = getImgSrc({ id, size: 50 });
  const medium = getImgSrc({ id, size: 100 });
  const large = getImgSrc({ id, size: 150 });

  return (
    <div className="bg-light-pink dib br3 pa3 ma2 grow pointer shadow-2">
      <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} alt="cat" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
