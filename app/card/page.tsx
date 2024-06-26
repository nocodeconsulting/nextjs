import Header from '../../components/Header';
import ConnorGustafson from '../../components/ConnorGustafson';
import Options from '../../components/Options';



const Card = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <ConnorGustafson />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Options />
      </div>
    </div>
  );
};

export default Card;
