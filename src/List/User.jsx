import React from 'react'
import HandelUser from './HandelUser'
function User() {
    let users=[
        {  
            name:"ankan",
            age:20,
            skill:"Cpp"
        },
        {
            name:"Subh",
            age:21,
            skill:"js"
        },
        {
            name:"Tridip",
            age:20,
            skill:"MERN"
        }
    ]
//   return (
//     <div>
//       {// 2nd bracket use for what to be evalute
//       users.map((user)=>{
//         return <div>Name:{user.name},age:{user.age}</div>
//       })
//       }
//     </div>
//   )//// 1 way

// let All=users.map((user)=><div>Name:{user.name},age:{user.age}</div>)
// return(
//     <>{All}</>
// )/////2 way
let userList=users.map((user,idx)=><HandelUser key={idx} user={user}/>)
//key is a reserve key word which cannot accessible by child Component
return <div>{userList}</div>
}
// to see why need unique key ==>LEC 18
// we try to not use index as key why==>LEC 19
// only at only we use index as key when thw list is static,not re-ordered or filtered
export default User
