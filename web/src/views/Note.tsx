import { Editor } from "@components";
import ListOfNotes from "@components/ListOfNotes";
import TwoColumn from "@components/TwoColumn";

const Note = () => {
  return (
    <TwoColumn switchOnSmall={true} secondary={<Editor />}>
      <ListOfNotes />
    </TwoColumn>
  );
};

export default Note;
