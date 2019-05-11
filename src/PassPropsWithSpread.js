import React, { Component } from 'react'
import HelloWorld from './HelloWorld';

export default class extends Component {
  render() {
    const props = {
      hello: 'こんにちは',
      world: '世界',
    }
    return (
      <main>
        <h1>"こんにちは 世界"と表示します。</h1>
        <HelloWorld {...props} />
      </main>
    );
  }
}