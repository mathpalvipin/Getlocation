import React from 'react';
import './ErrorPage1.css'; // Import your CSS file

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-content">
          <h1 className="error-title">Error {errorCode}</h1>
          <p className="error-message">{errorMessage}</p>
        </div>
        <a href="/" className="back-button">
          Back to Home 
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
