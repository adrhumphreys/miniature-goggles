import EmptyNotebooks from "@components/EmptyNotebooks";
import { useGetNotebooksQuery } from "generated-types";
import { Link } from "react-router-dom";

const Home = () => {
  const [result] = useGetNotebooksQuery({
    variables: { userId: "b9aee6b5-90ef-467a-8e8b-808f5694a761" },
  });

  if (!result.data?.user?.notebooks) {
    return <EmptyNotebooks />;
  }

  return (
    <div className="p-2">
      {result.data?.user?.notebooks?.map((notebook) => (
        <Link key={notebook?.id} to={`/notebooks/${notebook?.id}`}>
          {notebook?.title}
        </Link>
      ))}
    </div>
  );
};

export default Home;
