import { useState } from 'react';
import { IUser } from '../sharedInterfaces/IUser';

interface ICard {
  name: string;
  age: number;
  imgUrl?: string;
  user: IUser;
}

const Card = ({ name, age, imgUrl, user }: ICard): JSX.Element => {
  const [color, changeColor] = useState<string>('');

  const setRandomColor = () => {
    const colors = ['red', 'blue', 'black', 'green', 'white'];
    changeColor(colors[Math.floor(Math.random() * colors.length)]);
  }

  return (
    <div style={{ margin: 'auto', textAlign: 'center', maxWidth: '500px', backgroundColor: color }}>
      {imgUrl && <img style={{ maxWidth: '100%' }} src={imgUrl} alt={name} />}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <div>Hobbies: {user.hobbies.map(hobby => <div key={hobby}>{hobby}</div>)}</div>
      <button onClick={setRandomColor}>
        Change Card Color
      </button>
    </div>
  )
};

export default Card;
