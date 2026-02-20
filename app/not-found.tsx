import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          <div className="text-8xl mb-6">🛫</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-xl text-foreground/70 mb-8">
            The page you&apos;re looking for has taken flight! Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
