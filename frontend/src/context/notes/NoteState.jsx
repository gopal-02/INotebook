import NoteContext from "./NoteContetx";
import PropTypes from "prop-types";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "Gopal Kumar",
    class: "12A",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Gopal Kumar Updated",
        class: "12A Updated",
      });
    }, [1000]);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

NoteState.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NoteState;
