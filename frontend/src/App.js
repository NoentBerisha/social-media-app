import { useState } from 'react';
import './App.css';
import Login from './components/auth/Login';
import ForgotPasswordView from './components/auth/ForgotPassword';
import SignUp from './components/auth/SignUp';

function App() {
  const [currentView, setCurrentView] = useState('login');

  const renderComponent = () => {
    switch (currentView) {
      case 'login':
        return <Login setCurrentView={setCurrentView} />;
      case 'forgotPassword':
        return <ForgotPasswordView setCurrentView={setCurrentView} />;
      case 'signUp':
        return <SignUp setCurrentView={setCurrentView} />;
      default:
        return <Login setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="App">
      {renderComponent()}
    </div>
  );
}

export default App;
