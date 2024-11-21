import { cn } from "../utils";
import { Card } from "./card";

export interface ICardGroupProps {
  cards: number[];
  className?: string;
}

export const CardGroup: React.FC<ICardGroupProps> = ({ cards, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};
