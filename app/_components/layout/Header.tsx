'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-lg z-50">
      <div className="h-full flex items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          生成AIを用いた商談動画チェック
        </Link>
        <nav className="flex space-x-4">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            ホーム
          </Link>
          <Link
            href="/evaluations"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive('/evaluations') ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            評価項目管理
          </Link>
        </nav>
      </div>
    </header>
  );
}