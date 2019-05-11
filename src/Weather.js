import React, { Component } from 'react'

export default class extends Component {
  render() {
    const weather = "晴れ"
    return <p>今日の天気は{weather}です。</p>
  }
}