import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Ensure your styles are imported
// import reportWebVitals from './reportWebVitals'; // Remove this line if you're not using it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you decide to use reportWebVitals, uncomment the below line
// reportWebVitals();
