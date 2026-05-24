import { memo } from "react";

const HeadingComponent = () => {
  console.log("Heading Component");
  return (
    <>
      <div>
        <h1>Counter Example</h1>
      </div>
    </>
  );
};

export default memo(HeadingComponent);
