import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <motion.h1
        className="text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        World‑Class Web App
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Deterministic, secure, fast, and accessible. Start here.
      </p>
      <div className="mt-8 flex gap-4">
        <Link className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" href="/about">
          Learn more
        </Link>
        <Link className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800" href="/docs">
          Docs
        </Link>
      </div>
    </section>
  );
}
