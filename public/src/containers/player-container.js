import React, { Component } from "react"
import Player from "../components/player"

export default class PlayerContainer extends Component {
  render() {
    console.log("OPS", this.props)
    return <Player {...this.props.options} />
  }
}
