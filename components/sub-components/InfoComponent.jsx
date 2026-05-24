import { memo } from "react";

const InfoComponent = ({ title, count }) => {
  console.log(title, count);
  return (
    <>
      <div>
        <h2>Info Component</h2>
        <div>
          {title} : {count}
        </div>
      </div>
    </>
  );
};

export default memo(InfoComponent);
