import { cx } from "@emotion/css";
import utilstyles from "../styles/util.module.css";
import Contact from "./Contact";
import Header from "./Header";
import Layout from "./Layout";

export interface IPageMessageProps {
  message: string;
}

export default function PageMessage(props: IPageMessageProps) {
  const { message } = props;

  return (
    <Layout centerNodeClassName={cx(utilstyles["main-width"])}>
      <Header />
      <div className={cx(utilstyles.section, utilstyles["secondary-text"])}>
        {message}
      </div>
      <Contact className={utilstyles["section"]} />
    </Layout>
  );
}
