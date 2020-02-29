import React from 'react';


import './App.css';
import Header from './Header/Header';
import PostSetup from "./Post/PostSetup"


function App() {

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <PostSetup />
        </section>
      </div>
    );
  }


export default App;

