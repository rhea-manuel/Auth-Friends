import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend'

class Friends extends React.Component {

    constructor() {
        super()
        this.state = {
            friends: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
            .get("/friends").then(req => {
                // console.log(req.data)
                this.setState({
                    friends: req.data,
                    isLoading:false
                })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            
            this.state.friends.map((item)=>{
                return <Friend name={item.name} email={item.email} age={item.age}></Friend>
            })
        )
    }
}

export default Friends