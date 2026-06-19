

const UserList=()=> {
    const User = [
        {  id:1,name:"Krishna"},
        {id:2, name:"Rupesh"},
        {id:3,name:"Nitesh"},
        {id:4,name:"Kanhaiya"}
    ]
  return (
    <div>
        { User.map((ele)=>{
            return(
                <div key={ele.id}>
                    <h1>{ele.name}</h1>
                </div>
            )
        })
        }
      
    </div>
  )
}

export default UserList
