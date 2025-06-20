import Link from 'next/link';

export default function LabsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Em Construção</h1>
        <p className="text-gray-600">
          Esta página está em desenvolvimento. Volte mais tarde!
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          ← Voltar para Home
        </Link>
      </div>
    </div>
  );
}