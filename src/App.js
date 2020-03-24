import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Post from "./components/Post";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/posts/:post_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

//To use the params without adding extra post part import Switch tag and wrap around routes
