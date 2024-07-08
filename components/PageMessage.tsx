import utilstyles from "../styles/util.module.css";
import Header from "./Header";
import Contact from "./contact/Contact";
import Layout from "./layout/Layout";
import { cn } from "./utils.ts";

export interface IPageMessageProps {
  message: string;
}

export default function PageMessage(props: IPageMessageProps) {
  const { message } = props;

  return (
    <Layout centerNodeClassName={cn(utilstyles["main-width"])}>
      <Header />
      <div className={cn(utilstyles.section, utilstyles["secondary-text"])}>
        {message}
      </div>
      <Contact className={utilstyles["section"]} />
    </Layout>
  );
}
