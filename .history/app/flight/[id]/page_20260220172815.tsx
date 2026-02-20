import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export async function generateStaticParams() {
  // Generate static pages for common flight IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

'use client'

export default function FlightDetailsPage() {
  const params = useParams()
  const flightId = params.id

  // Mock flight data
  const flightData = {
    id: '1',
    airline: 'SkyAir',
    flightNumber: 'SA-2847',
    departure: { time: '06:00 AM', date: 'Mar 15, 2024', airport: 'LAX', city: 'Los Angeles' },
    arrival: { time: '02:20 PM', date: 'Mar 15, 2024', airport: 'NYC', city: 'New York' },
    duration: '5h 20m',
    stops: 0,
    price: 189,
    aircraft: 'Boeing 737-800',
    baggage: {
      carry: '1 carry-on + 1 personal item',
      checked: '1 checked bag (23 kg)',
    },
    fare: {
      basePrice: 150,
      taxes: 25,
      fees: 14,
      total: 189,
    },
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Link href="/results" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Results
          </Link>

          {/* Flight Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{flightData.airline}</h1>
                <p className="text-foreground/60">Flight #{flightData.flightNumber}</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary mb-2">${flightData.price}</div>
                <p className="text-foreground/60">Per Passenger</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Timeline */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-8">Flight Timeline</h2>

                <div className="space-y-8">
                  {/* Departure */}
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4">
                        ✈
                      </div>
                      <div className="w-1 h-12 bg-border"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Departure</h3>
                      <p className="text-3xl font-bold text-foreground mb-2">{flightData.departure.time}</p>
                      <p className="text-foreground/70">{flightData.departure.date}</p>
                      <p className="font-semibold text-foreground mt-3 mb-1">
                        {flightData.departure.city} ({flightData.departure.airport})
                      </p>
                      <p className="text-sm text-foreground/60">Terminal 2, Gate B12</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-bold">
                        ⏱
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Flight Duration</h3>
                      <p className="text-2xl font-bold text-foreground">{flightData.duration}</p>
                      <p className="text-foreground/70 mt-2">
                        {flightData.stops === 0 ? 'Non-stop flight' : `${flightData.stops} stop`}
                      </p>
                      <p className="text-sm text-foreground/60 mt-1">Aircraft: {flightData.aircraft}</p>
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        🎯
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Arrival</h3>
                      <p className="text-3xl font-bold text-foreground mb-2">{flightData.arrival.time}</p>
                      <p className="text-foreground/70">{flightData.arrival.date}</p>
                      <p className="font-semibold text-foreground mt-3 mb-1">
                        {flightData.arrival.city} ({flightData.arrival.airport})
                      </p>
                      <p className="text-sm text-foreground/60">Terminal 1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Baggage Info */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Baggage Allowance</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🎒</span>
                      <h3 className="font-semibold text-foreground">Carry-On</h3>
                    </div>
                    <p className="text-foreground/70">{flightData.baggage.carry}</p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🧳</span>
                      <h3 className="font-semibold text-foreground">Checked</h3>
                    </div>
                    <p className="text-foreground/70">{flightData.baggage.checked}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Price Breakdown */}
              <div className="bg-card border border-border rounded-xl p-8 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Fare Details</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-foreground/70">
                    <span>Base Fare</span>
                    <span>${flightData.fare.basePrice}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Taxes</span>
                    <span>${flightData.fare.taxes}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Fees</span>
                    <span>${flightData.fare.fees}</span>
                  </div>

                  <div className="border-t border-border pt-4 flex justify-between font-bold text-lg text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${flightData.fare.total}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-lg transition-all">
                  Book Now
                </button>

                <p className="text-xs text-foreground/60 text-center mt-4">
                  No payment required for this demo
                </p>
              </div>

              {/* Flight Info */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-lg font-bold text-foreground mb-4">Flight Info</h2>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-foreground/60">Flight Number</p>
                    <p className="font-semibold text-foreground">{flightData.flightNumber}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Aircraft</p>
                    <p className="font-semibold text-foreground">{flightData.aircraft}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Duration</p>
                    <p className="font-semibold text-foreground">{flightData.duration}</p>
                  </div>
                  <div>
                    <p className="text-foreground/60">Stops</p>
                    <p className="font-semibold text-foreground">
                      {flightData.stops === 0 ? 'Non-stop' : `${flightData.stops} Stop`}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
