import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - ページが見つかりませんでした',
  description: 'お探しのページは存在しないか、削除された可能性があります。',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-256px)]">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            ページが見つかりませんでした
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-gray-600">
            お探しの動画は存在しないか、削除された可能性があります。
            <br />
            URLを確認するか、トップページから目的の動画をお探しください。
          </p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}