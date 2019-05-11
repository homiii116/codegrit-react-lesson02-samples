import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

export default class extends Component {
  render() {
    return (
      <main>
        <h1>"こんにちは 世界"と表示します。</h1>
        <HelloWorld hello='こんにちは' world='世界' />
      </main>
    )
  }
}