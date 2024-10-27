import Tilt from "react-parallax-tilt";

const TiltCard = ({children}) => {
  return (
    <Tilt>
      {children}
    </Tilt>
  );
};

export default TiltCard;
