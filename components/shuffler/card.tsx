export interface ICardProps {
  card: number;
}

export const Card: React.FC<ICardProps> = ({ card }) => {
  return <div className="w-24 h-24 p-4 bg-border rounded-lg">{card}</div>;
};
