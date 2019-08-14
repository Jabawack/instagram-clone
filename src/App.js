// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


// src/App.js
import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <section className="App-main">
                    <Post nickname="TK"
                          avatar="https://jabawack.github.io/images/logo.svg"
                          caption="WebReactor"
                          image="https://jabawack.github.io/images/WebReactor/logo.png"/>
                    <Post nickname="TK"
                          avatar="https://jabawack.github.io/images/logo.svg"
                          caption="Samsung TS 2014"
                          image="https://jabawack.github.io/images/SamsungTS2014/logo.jpg"/>

                    {/* more posts */}
                </section>
            </div>
        );
    }
}

export default App;