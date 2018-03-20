import React, { Component } from 'react'

class MainContent extends Component {
    render() {
        return (
            <div className="ed-container cross-center content-info">
                <div className="ed-item m-1-3">Código de pago
                    <span>9125682111</span>
                </div>
                <div className="ed-item m-1-3">Total S/.
                    <span>140.00</span>
                </div>
                <div className="ed-item m-1-3"> Tu orden expirará
                    <br />
                    <span>23 Feb - 01:12 p.m.</span>
                </div>
            </div>
        )
    }
}
export default MainContent