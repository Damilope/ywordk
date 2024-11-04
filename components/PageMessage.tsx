import utilstyles from "../styles/util.module.css";
import { cn } from "./utils.ts";

export interface IPageMessageProps {
  message: string;
}

export default function PageMessage(props: IPageMessageProps) {
  const { message } = props;

  return (
    <div className={cn(utilstyles.section, utilstyles["secondary-text"])}>
      {message}
    </div>
  );
}
