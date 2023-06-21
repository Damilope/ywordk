import FimidaraBackedBlog from "@/components/FimidaraBackedBlog";
import { systemConstants } from "@/lib/definitions/system";
import { GetServerSideProps, NextPage } from "next";

interface IFaithBlogPageProps {
  filepath: string;
}

type PagePathParams = {
  filename: string;
};

const FaithBlogPage: NextPage<IFaithBlogPageProps> = (props) => {
  const { filepath } = props;

  return <FimidaraBackedBlog filepath={filepath} />;
};

export const getServerSideProps: GetServerSideProps<
  IFaithBlogPageProps,
  PagePathParams
> = async (context) => {
  const filename = context.params?.filename;
  const filepath = `${systemConstants.faithBlogFolder}/${filename}`;
  return {
    props: { filepath },
  };
};

export default FaithBlogPage;
