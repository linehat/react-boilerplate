import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot, AppContainer } from "react-hot-loader";

const rootElement = document.getElementById("app");
// const Core = hot(module)(App)

// if (module.hot) {
//   ReactDOM.render(
//       <Core />
//     rootElement
//   );
//   // module.hot.accept("./App", () => {
//   //   const NextApp = require("./App").default;
//   //   ReactDOM.render(
//   //     <AppContainer>
//   //       <NextApp />
//   //     </AppContainer>,
//   //     rootElement
//   //   );
//   // });
// } else {
//   ReactDOM.render(
//       <App />
//     rootElement
//   );
// }
// ReactDOM.render(
//   <App/>,
//   document.getElementById('app'),
// )

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement,
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    // if you are using harmony modules ({modules:false})
    render(App)
    // in all other cases - re-require App manually
    render(require('./App'))
  })
}