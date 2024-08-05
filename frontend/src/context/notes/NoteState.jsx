import NoteContext from "./NoteContetx";
import PropTypes from "prop-types";

const NoteState = (props) => {
  return (
    <NoteContext.Provider value={{}}>
      {props.children}
    </NoteContext.Provider>
  );
};

NoteState.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NoteState;
