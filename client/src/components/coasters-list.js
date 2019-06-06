import React, { Component } from 'react'
import CoasterServices from '../service/coaster-services'
import CoasterCard from './coaster-card'

class CoastersList extends Component {

    constructor() {
        super()
        this.state = { coasters: [] }
        this.services = new CoasterServices()
    }


    componentDidMount() {
        this.services.getAllCoasters()
            .then(allCoasters => this.setState({ coasters: allCoasters }))
    }


    render() {
        return (

            <div className="container">

                <h1>Listado de montañas rusas</h1>

                <div className="row coaster-list">

                    {this.state.coasters.map((theCoaster, idx) => <CoasterCard key={idx} {...theCoaster} />)}

                </div>

            </div>
        )
    }
}

export default CoastersList