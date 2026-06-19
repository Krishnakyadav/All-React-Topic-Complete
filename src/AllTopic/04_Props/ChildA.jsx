
const ChildA=(props)=>{
    // console.log(props); 
    let {str,obj:{fname},arr} = props; //Destructuring 
    
    return(
        <div>
            <h2>I am Child A Component</h2>
            <h3>{fname}</h3>
            
        </div>
    )
}

export default ChildA;