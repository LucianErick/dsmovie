import {
  BsStarFill as FullStar,
  BsStarHalf as HalfStar,
  BsStar as NoneStar,
} from "react-icons/bs";

type Props = {
  value: number;
};

export const Star = ({ value }: Props) => {
  
    const getStarIcon = (value: number) => {
        switch (value) {
        case 1:
            return <FullStar />;
        case 0.5:
            return <HalfStar />;
        case 0:
            return <NoneStar />;
        default:
            return <NoneStar />;
        }
  };

  return (
    <>
        {getStarIcon(value)}
    </>
  );
};
