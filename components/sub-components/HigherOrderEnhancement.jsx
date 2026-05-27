const HigherOrderEnhancement = (Comp) => {
  return (props) => {
    console.log("props:", props);
    const handleClick = () => {
      console.log("Handle Click: ", props.info);
    };

    return (
      <span onClick={handleClick}>
        <Comp {...props} />
      </span>
    );
  };
};

export default HigherOrderEnhancement;
