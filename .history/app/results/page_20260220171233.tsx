import { Suspense } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ResultsContent } from './results-content'

function ResultsLoading() {
  return (
    <main className="flex-1 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-64"></div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-card rounded-xl p-6 animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<ResultsLoading />}>
        <ResultsContent />
      </Suspense>
      <Footer />
    </>
  )
}
