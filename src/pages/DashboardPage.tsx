import { LogOut } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

interface DashboardPageProps {
  onSignOut: () => void;
}

export function DashboardPage({ onSignOut }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <ThemeToggle />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div className="flex items-center gap-4">
              <img
                src="/dipstick-img_(1).png"
                alt="Dipstick Logo"
                className="w-16 h-16"
              />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Welcome, Ujjwal!
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  You've successfully signed in to Dipstick
                </p>
              </div>
            </div>

            <button
              onClick={onSignOut}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#fe0000] hover:text-[#fe0000] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { color: '#fe0000', label: 'Critical', value: '2' },
              { color: '#ffc000', label: 'Warning', value: '5' },
              { color: '#fffc87', label: 'Info', value: '12' },
              { color: '#92d14f', label: 'Good', value: '24' },
              { color: '#00af50', label: 'Excellent', value: '48' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#00af50] transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
