import React from 'react';
import { SignInPage } from './shared/SignInPage';
import { HomePage } from './shared/HomePage';
import { Router, RouteComponentProps } from "@reach/router";



function App() {
  return (
    <div className="App">
      <Router>
        <RouterPage path="/home" pageComponent={<HomePage/>}/>
        <RouterPage path="/" pageComponent={<SignInPage/>}/>
      </Router>
    </div>
  );
}
export default App;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent
