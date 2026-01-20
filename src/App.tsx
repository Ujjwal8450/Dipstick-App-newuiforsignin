import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { SignInPage } from './pages/SignInPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { DashboardPage } from './pages/DashboardPage';

type Page = 'signin' | 'forgot' | 'reset' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('signin');

  const handleSignIn = () => {
    setCurrentPage('dashboard');
  };

  const handleSignOut = () => {
    setCurrentPage('signin');
  };

  return (
    <ThemeProvider>
      {currentPage === 'signin' && (
        <SignInPage onNavigate={setCurrentPage} onSignIn={handleSignIn} />
      )}
      {currentPage === 'forgot' && (
        <ForgotPasswordPage onNavigate={setCurrentPage} />
      )}
      {currentPage === 'reset' && (
        <ResetPasswordPage onNavigate={setCurrentPage} />
      )}
      {currentPage === 'dashboard' && (
        <DashboardPage onSignOut={handleSignOut} />
      )}
    </ThemeProvider>
  );
}

export default App;
