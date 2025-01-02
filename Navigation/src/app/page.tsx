import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav className="bg-gradient-to-b from-blue-400 via-blue-950 to-blue-200 p-4">
        <ul className="flex justify-around">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/About" className="text-white">About</Link></li>
          <li><Link href="/Contact" className="text-white">Contact</Link></li>
        </ul>
      </nav>

      <main className="flex justify-center items-center h-screen bg-gradient-to-tr from-indigo-200 via-blue-900 to-blue-600">
        <h1 className="text-6xl font-extrabold text-white">Hello! Home Page</h1>
      </main>
    </div>
  );
}
