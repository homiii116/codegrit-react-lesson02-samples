import { createElement, Component } from 'react';

export default class extends Component  {
  render() {
    return (
      createElement('main', null,
        createElement('div', { class: "test" },
          createElement('p', null, "これはテストの説明です。")
        )
      )
    );
  }
}
