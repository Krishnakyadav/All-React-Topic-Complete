import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";

const PropsParent = () => {
  let str = "Hello World";
  let obj = { fname: "john" };
  let arr = [10, 20, 30, 40, 50];
  return (
    <div>
      <h1>I am Parent Component</h1>
      {/* Sending Multiple Props */}
      <ChildA str={str} obj={obj} arr={arr}/>
      <hr/>
      {/* sending single props with multiple data  */}
      <ChildB data={{str,obj,arr}}/>
      <hr/>
      {/* Destructring with direct Props */}
      <ChildC str={str} obj={obj} arr={arr}/>
    </div>
  );
};

export default PropsParent;
