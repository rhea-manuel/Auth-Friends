import React from 'react'

class Friend extends React.Component{

    render(){

        return(
            <div>
                <ul>
                    <li>Name: {this.props.name}</li>
                    <li>Age: {this.props.age}</li>
                    <li>Email: {this.props.email}</li>
                </ul>
            </div>
        )
    }
}

export default Friend