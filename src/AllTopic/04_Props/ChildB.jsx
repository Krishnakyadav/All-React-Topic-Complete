const ChildB = (props) => {
    console.log(props);
    let {data:{str,obj:{fname},arr}} = props
  return (
    <div>
      <h1>I am Child B Component</h1>
      <h2>{str}</h2>
      <h2>{fname}</h2>
      <h3>{arr}</h3>
    </div>
  );
};

export default ChildB;
