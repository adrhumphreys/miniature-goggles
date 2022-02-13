import EditNote from "@components/EditNote";
import ListOfNotes from "@components/ListOfNotes";
import TwoColumn from "@components/TwoColumn";
import { Suspense } from "react";

const Note = () => {
  return (
    <TwoColumn
      switchOnSmall={true}
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

export default Note;
