import React, { Component } from 'react'

class Index extends Component {

  getSentence = () => {
    return <span>Hello, {this.props.word}</span>
  }

  render() {
    return <p>{this.getSentence()}</p>
  }
}

export default Index