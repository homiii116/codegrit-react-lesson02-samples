import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WithJsx from './WithJsx';
import WithCreateElement from './WithCreateElement';
import Weather from './Weather';
import UseWeather from './UseWeather';
import PassPropsDirectly from './PassPropsDirectly';
import PassPropsWithSpread from './PassPropsWithSpread';
import WithInlineStyle from './WithInlineStyle';
import ComponentWithClass from './ComponentWithClass';
import ComponentWithFunction from './ComponentWithFunction';
import * as serviceWorker from './serviceWorker';

// createElementを使う場合

// ReactDOM.render(
//   createElement(WithCreateElement, null, null), 
//   document.getElementById('root'));

// JSXを使う場合

// ReactDOM.render(
//   <WithJsx />,
//   document.getElementById('root'));
// 

// 変数を利用する

// ReactDOM.render(
//   <Weather />,
//   document.getElementById('root'));


// コンポーネント内で、別のコンポーネントを呼び出す

ReactDOM.render(
  <UseWeather />,
  document.getElementById('root'));

// 直接Propsを渡す。

// ReactDOM.render(
//   <PassPropsDirectly />,
//   document.getElementById('root'));

// Spread構文を利用してPropsを渡す。

// ReactDOM.render(
//   <PassPropsWithSpread />,
//   document.getElementById('root'));

// インラインスタイルを適用する

// ReactDOM.render(
//   <WithInlineStyle />,
//   document.getElementById('root'));

// Classを利用してコンポーネントを作る

// ReactDOM.render(
//   <ComponentWithClass word="世界" />,
//   document.getElementById('root'));

// ファンクションを利用してコンポーネントを作る

// ReactDOM.render(
//   <ComponentWithFunction word="世界" />,
//   document.getElementById('root'));

serviceWorker.unregister();

