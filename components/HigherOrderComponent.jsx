import HigherOrderEnhancement from "./sub-components/HigherOrderEnhancement";
import SimpleButton from "./sub-components/SimpleButton";

export default function HigherOrderComponent() {
  const HigherOrderButton = HigherOrderEnhancement(SimpleButton);
  return (
    <>
      <div>
        <h2>Higher Order Component</h2>
        <div>
          A Higher-Order Component (HOC) is a function that takes a component
          and returns a new enhanced component. It's a pattern for reusing
          component logic.
        </div>
        <br />
        <div>
          Button without any new enhancement (simple button):
          <SimpleButton label="Simple Button" />
        </div>
        <br />
        <div>
          Higher order component (button with new enhancement):
          <HigherOrderButton
            label="Higher Order Component Button"
            info={{ name: "Udaya", age: 45, city: "Fremont" }}
          />
        </div>
      </div>
    </>
  );
}
