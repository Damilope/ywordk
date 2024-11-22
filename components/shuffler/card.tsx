import { cn } from "../utils.ts";

export interface ICardProps {
  card: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<ICardProps> = ({ card, className, style }) => {
  return (
    <div className={cn("p-4 bg-border rounded-lg", className)} style={style}>
      {card}
    </div>
  );
};
