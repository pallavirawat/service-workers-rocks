import React  from 'react';
import './App.css';

const App = () => {
    const serviceWorkerSupported = () =>{
        return (<div>
            <div>Yay!!! Congratulations.</div>
            <div>Service Worker Supported</div>
            <div>Your current browser is just awesome as you are ;)</div>
        </div>);
    }

    const serviceWorkerNotSupported = () =>{
        return (<div>
            <div>Uh-oh.</div>
            <div>Service Workers are not at all supported</div>
            <div>You might want to live in current age and get a better browser</div>
            <a
                className="App-link"
                href="https://caniuse.com/#feat=serviceworkers"
                target="_blank"
                rel="noopener noreferrer"
            >
                I Need Some Help!
            </a>
        </div>);
    }

    const serviceWorkerSupportText = window.navigator.serviceWorker? serviceWorkerSupported() : serviceWorkerNotSupported()

      return (
      <div className="App">
        <header className="App-header">
          {serviceWorkerSupportText}
        </header>
      </div>
    );
}

export default App;
