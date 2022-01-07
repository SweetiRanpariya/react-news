import React, { Component } from 'react'
import loader from '../images/loading.gif'

export class Loder extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loader} alt="loader" className="src" />
            </div>
        )
    }
}

export default Loder
