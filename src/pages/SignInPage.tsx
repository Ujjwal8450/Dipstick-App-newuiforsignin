import { useState } from 'react';
import { Mail, Lock, ArrowRight, AlertCircle, Download } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

interface SignInPageProps {
  onNavigate: (page: 'signin' | 'forgot' | 'reset') => void;
  onSignIn: () => void;
}

export function SignInPage({ onNavigate, onSignIn }: SignInPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email.toLowerCase() === 'ujjwal' && password === '1234') {
        onSignIn();
      } else {
        setError('Invalid credentials. Try ujjwal / 1234');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F8F6F3] via-[#FAF8F5] to-[#F5F3F0] dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <ThemeToggle />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center items-center p-12 relative">
          <div className="max-w-md animate-fade-in">
            <img
              src="/dipstick-img_(1).png"
              alt="Dipstick Logo"
              className="w-64 h-64 mb-8 object-contain animate-float"
            />
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] via-[#FB9228] to-[#FFA500] bg-clip-text text-transparent">
              Welcome to Dipstick
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Monitor, analyze, and optimize your systems with intelligent insights.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md animate-slide-in-right">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Sign In
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email or Username
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FB9228] transition-colors duration-300" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl md:rounded-2xl focus:border-[#FB9228] focus:ring-4 focus:ring-[#FB9228]/20 dark:focus:ring-[#FB9228]/30 outline-none transition-box text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="Enter your email or username"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FB9228] transition-colors duration-300" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 md:py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl md:rounded-2xl focus:border-[#FB9228] focus:ring-4 focus:ring-[#FB9228]/20 dark:focus:ring-[#FB9228]/30 outline-none transition-box text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('forgot')}
                  className="text-xs md:text-sm font-medium text-[#FB9228] hover:text-[#FF6B35] transition-colors duration-300"
                >
                  Forgot password?
                </button>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 animate-shake">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-[#FF6B35] to-[#FB9228] text-white font-semibold rounded-xl md:rounded-2xl hover:shadow-2xl hover:shadow-[#FB9228]/40 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group animate-fade-in text-sm md:text-base"
                style={{ animationDelay: '0.4s' }}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            <div className="my-5 md:my-6 relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-[#FAF8F5] dark:bg-gray-800 text-gray-600 dark:text-gray-400">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 md:py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl md:rounded-2xl hover:border-[#FB9228] hover:bg-[#FB9228]/5 hover-lift transition-box flex items-center justify-center gap-2 animate-fade-in text-sm md:text-base"
              style={{ animationDelay: '0.55s' }}
            >
              <svg className="w-4 md:w-5 h-4 md:h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Sign in with Google</span>
            </button>

            <div className="mt-6 md:mt-8 space-y-5 md:space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
                Need to reset your password?{' '}
                <button
                  onClick={() => onNavigate('reset')}
                  className="font-medium text-[#FB9228] hover:text-[#FF6B35] transition-colors duration-300"
                >
                  Reset here
                </button>
              </p>

              <div className="p-3 md:p-4 bg-gradient-to-r from-[#FB9228]/10 to-[#FF6B35]/10 dark:from-[#FB9228]/20 dark:to-[#FF6B35]/20 border border-[#FB9228]/30 dark:border-[#FB9228]/40 rounded-lg md:rounded-xl space-y-3 hover-lift transition-box">
                <p className="text-center text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Subscription is required,</span>
                  <br />
                  please contact us at{' '}
                  <a href="mailto:hello@eklakshya.com" className="font-semibold text-[#FB9228] hover:text-[#FF6B35] transition-colors duration-300">
                    hello@eklakshya.com
                  </a>
                  {' '}for a demo login.
                </p>

                <button
                  type="button"
                  className="w-full py-2 md:py-3 bg-gradient-to-r from-[#FF6B35] to-[#FB9228] text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg hover:shadow-[#FB9228]/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-xs md:text-sm"
                >
                  <Download className="w-3 md:w-4 h-3 md:h-4 group-hover:translate-y-1 transition-transform duration-300" />
                  Download Our Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
