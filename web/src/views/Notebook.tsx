import EditNote from "@components/EditNote";
import ListOfNotes from "@components/ListOfNotes";
import TwoColumn from "@components/TwoColumn";
import { Suspense } from "react";

const Notebook = () => {
  return (
    <TwoColumn
      secondary={
        <Suspense fallback={<p>Loading</p>}>
          <EditNote />
        </Suspense>
      }
    >
      <ListOfNotes />
    </TwoColumn>
  );
};

export default Notebook;
