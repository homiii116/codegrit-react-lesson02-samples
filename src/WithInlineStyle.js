import React, { Component } from 'react'

export default class extends Component {
  render() {
    // styleをオブジェクトを利用して定義。
    const inlineStyle = {
      fontSize: '14px',
      color: 'red',
      textAlign: 'left',
      fontWeight: 600
    }
    return <p style={inlineStyle}>インラインスタイル適用</p>
  }
}