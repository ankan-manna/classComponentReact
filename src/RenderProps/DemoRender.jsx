// import React, { Component } from 'react'

// export class DemoRender extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//       </div>
//     )
//   }
// }

// export default DemoRender
//---------------------------------------------------------------------------
// import React, { Component } from 'react'

// export class DemoRender extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.name()}</h1>
//       </div>
//     )
//   }
// }

// export default DemoRender
//---------------------------------------------------------------------------------
import React, { Component } from 'react'

export class DemoRender extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name(false)}</h1>
      </div>
    )
  }
}

export default DemoRender
