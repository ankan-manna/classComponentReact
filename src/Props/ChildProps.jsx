import React from 'react'

function ChildProps({ arrayData, title, userInfo }) {
// function ChildProps(pr) {
    //  userInfo.name="ank" ==> it work due to de-structring although it reflects only this file locally
     title="manna"
    // pr.title="abc"
    return (
        <div>
            {/* Display the variable */}
            {/* <h1>{title}</h1> */}

            {/* Display the array */}
            {/* <ul>
                {arrayData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> */}

            {/* Display the object properties */}
            {/* <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>Location: {userInfo.location}</p> */}

           <h1>ha ha</h1>
           
        </div>
    )
}

export default ChildProps
