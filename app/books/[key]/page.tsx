import BookContent from "@/components/book/Book.tsx";

export interface BookDefPageProps {
  params: {
    key: string;
  };
}

export default function BookDefPage(props: BookDefPageProps) {
  const { params } = props;
  const { key } = params;

  return <BookContent id={key} />;
}
