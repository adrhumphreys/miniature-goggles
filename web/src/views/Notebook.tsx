import { Editor } from "@components";
import ListOfNotes from "@components/ListOfNotes";
import TwoColumn from "@components/TwoColumn";

const Notebook = () => {
  return (
    <TwoColumn secondary={<Editor />}>
      <ListOfNotes />
    </TwoColumn>
  );
};

export default Notebook;
