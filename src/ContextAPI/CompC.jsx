import React, { Component } from 'react'
import { Userconsumer } from './userContext'
// export 

// class CompC extends Component {
//   render() {
//     return (
//         <Userconsumer>
//             {
//                 (username)=>{
//                     return <h1>{username}</h1>
//                 }
//             }
//         </Userconsumer>
//     )
//   }
// }

// export default CompC


import { Nameconsumer } from './NameContext'
class CompC extends Component {
  render() {
    return (
        <Nameconsumer>
            {
                (username)=>{
                    return <h1>{username}</h1>
                }
            }
        </Nameconsumer>
    )
  }
}

export default CompC