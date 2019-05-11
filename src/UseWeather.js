import React, { Component } from 'react'
import Weather from './Weather' // Weatherコンポーネントをインポートする。

export default class extends Component {
  render() {
    return (
      <div>
        <h1>天気のコンポーネントを呼び出します。</h1>
        <Weather />
      </div>
    );
  }
}