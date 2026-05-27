const HigherOrderEnhancement = (Comp) => {
  return (props) => {
    console.log("props:", props);
    const handleClick = () => {
      console.log("Handle Click: ", props.info);
    };

    return (
      <div onClick={handleClick}>
        <Comp {...props} />
      </div>
    );
  };
};

export default HigherOrderEnhancement;
