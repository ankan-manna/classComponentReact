import React from 'react'
const HigherOrder=(OriginalComponent,anyVar=1)=>{// default val = 1 set
    class UpdatedComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        increaseCount=()=>{
            this.setState((prevState)=>{
                return {count:prevState.count+anyVar}
            })
        }
        render(){
            return(
                <>
                <OriginalComponent count={this.state.count} increaseCount={this.increaseCount} {...this.props}/>
                {/* why spread operator see clickCounter.jsx */}
                </>
                
            )
        }
    }
    return UpdatedComponent
}
export default HigherOrder