import { useState } from 'react';
import { Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

interface ForgotPasswordPageProps {
  onNavigate: (page: 'signin' | 'forgot' | 'reset') => void;
}

export function ForgotPasswordPage({ onNavigate }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F8F6F3] via-[#FAF8F5] to-[#F5F3F0] dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
        <ThemeToggle />

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-md text-center animate-scale-in">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#FB9228] rounded-full flex items-center justify-center animate-bounce-slow">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Check Your Email
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We've sent a password reset link to{' '}
              <span className="font-semibold text-[#FB9228]">{email}</span>
            </p>

            <div className="space-y-4">
              <button
                onClick={() => onNavigate('signin')}
                className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FB9228] text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-[#FB9228]/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Back to Sign In
              </button>

              <button
                onClick={() => setIsSuccess(false)}
                className="w-full py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#FB9228] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Resend Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#F8F6F3] via-[#FAF8F5] to-[#F5F3F0] dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <ThemeToggle />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center items-center p-12 relative">
          <div className="max-w-md animate-fade-in">
            <div className="w-64 h-64 mb-8 bg-gradient-to-br from-[#FF6B35]/20 via-[#FB9228]/20 to-[#FFA500]/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse-slow">
              <Mail className="w-32 h-32 text-[#FB9228]" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] via-[#FB9228] to-[#FFA500] bg-clip-text text-transparent">
              Don't Worry
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We'll help you get back into your account. Just enter your email and we'll send you a reset link.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md animate-slide-in-right">
            <button
              onClick={() => onNavigate('signin')}
              className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#FB9228] transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Sign In
            </button>

            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Forgot Password?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                No worries! Enter your email and we'll send you reset instructions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FB9228] transition-colors duration-300" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:border-[#FB9228] focus:ring-4 focus:ring-[#FB9228]/20 dark:focus:ring-[#FB9228]/30 outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#FB9228] text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-[#FB9228]/40 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Reset Link
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 p-4 bg-[#FB9228]/10 dark:bg-[#FB9228]/20 border border-[#FB9228]/30 rounded-xl animate-fade-in hover-lift transition-box" style={{ animationDelay: '0.3s' }}>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Remember your password?{' '}
                <button
                  onClick={() => onNavigate('signin')}
                  className="font-medium text-[#FB9228] hover:text-[#FF6B35] transition-colors duration-300"
                >
                  Sign in instead
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
