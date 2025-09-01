'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '🏠 Home' },
    { href: '/rules', label: '📋 Rules' },
    { href: '/wall-of-fame', label: '🏆 Wall of Fame' },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
                🏋️ Heavy Mug Challenge
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105 ${
                    pathname === item.href
                      ? 'bg-yellow-500 text-slate-900 shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-yellow-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
