import React from 'react'

function MeoComp(props) {
    console.log("Memo Comp")
  return (
    <div>
      {props.name}
    </div>
  )
}

//export default MeoComp // Normal Case
export default React.memo(MeoComp)
