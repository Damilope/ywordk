import { cn } from "../utils";
import { Card } from "./card";

export interface ICardGroupProps {
  cards: number[];
  className?: string;
}

export const CardGroup: React.FC<ICardGroupProps> = ({ cards, className }) => {
  return (
    <div className={cn("grid gap-4 grid-cols-3 sm:grid-cols-5", className)}>
      {cards.map((card, index) => (
        <Card key={index} card={card} className="h-32" />
      ))}
    </div>
  );
};
