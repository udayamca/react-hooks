import { useState } from "react";

const HigherOrderEnhancement = (Comp) => {
  const [info, setInfo] = useState("");
  return (props) => {
    console.log("props:", props);
    const handleClick = () => {
      console.log("Handle Click: ", props.info);
      setInfo(props.info);
    };

    return (
      <>
        <span onClick={handleClick}>
          <Comp {...props} />
        </span>
        <h3>{info.name}</h3>
        <h3>{info.age}</h3>
        <h3>{info.city}</h3>
      </>
    );
  };
};

export default HigherOrderEnhancement;
