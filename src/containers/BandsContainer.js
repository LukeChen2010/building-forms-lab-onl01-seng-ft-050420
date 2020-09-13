import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
<<<<<<< HEAD
import Bands from '../components/Bands'
=======
>>>>>>> 4b1b68c3c74ac6dd2ccefc90356a85d92366c49c


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
