import React, {Component} from 'react'


export default class ContactTextbox extends Component {

    // state = {
    //     clicked: false
    // }

    // componentDidMount() {
    //     this.setState({
    //         clicked: false
    //     })
    // }
    // textFieldClicked = () => {
    //     this.setState({
    //         clicked: !this.state.clicked
    //     })
    //     console.log(this.state.clicked);
    // }

   render(){
    return (

       
        <div>
                <input placeholder={this.props.placeholder}></input>
         </div>
        
    )
   }
}
