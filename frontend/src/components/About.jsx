import { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContetx";
const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, [a]);

  return (
    <div>
      This is about {a.state.name} and he is in {a.state.class}
    </div>
  );
};

export default About;
