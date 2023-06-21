import FimidaraBackedBlog from "@/components/FimidaraBackedBlog";
import { systemConstants } from "@/lib/definitions/system";
import { GetServerSideProps, NextPage } from "next";

interface IOverEngineeredBlogPageProps {
  filepath: string;
}

type PagePathParams = {
  filename: string;
};

const OverEngineeredBlogPage: NextPage<IOverEngineeredBlogPageProps> = (
  props
) => {
  const { filepath } = props;

  return <FimidaraBackedBlog filepath={filepath} />;
};

export const getServerSideProps: GetServerSideProps<
  IOverEngineeredBlogPageProps,
  PagePathParams
> = async (context) => {
  const filename = context.params?.filename;
  const filepath = `${systemConstants.overengineeredBlogFolder}/${filename}`;
  return {
    props: { filepath },
  };
};

export default OverEngineeredBlogPage;
