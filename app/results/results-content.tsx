'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Flight {
  id: string
  airline: string
  departure: string
  arrival: string
  duration: string
  stops: number
  price: number
  departureTime: string
  arrivalTime: string
}

export function ResultsContent() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || 'LAX'
  const to = searchParams.get('to') || 'NYC'
  const passengers = searchParams.get('passengers') || '1'

  const [sortBy, setSortBy] = useState('cheapest')
  const [priceRange, setPriceRange] = useState([50, 800])
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([])
  const [selectedStops, setSelectedStops] = useState<number[]>([])

  const mockFlights: Flight[] = [
    {
      id: '1',
      airline: 'SkyAir',
      departure: 'LAX',
      arrival: 'NYC',
      duration: '5h 20m',
      stops: 0,
      price: 189,
      departureTime: '06:00 AM',
      arrivalTime: '02:20 PM',
    },
    {
      id: '2',
      airline: 'BlueSky',
      departure: 'LAX',
      arrival: 'NYC',
      duration: '6h 45m',
      stops: 1,
      price: 156,
      departureTime: '08:30 AM',
      arrivalTime: '04:15 PM',
    },
    {
      id: '3',
      airline: 'StarJet',
      departure: 'LAX',
      arrival: 'NYC',
      duration: '5h 10m',
      stops: 0,
      price: 234,
      departureTime: '11:00 AM',
      arrivalTime: '07:10 PM',
    },
    {
      id: '4',
      airline: 'QuickFly',
      departure: 'LAX',
      arrival: 'NYC',
      duration: '7h 30m',
      stops: 2,
      price: 132,
      departureTime: '01:00 PM',
      arrivalTime: '08:30 PM',
    },
    {
      id: '5',
      airline: 'AeroPath',
      departure: 'LAX',
      arrival: 'NYC',
      duration: '5h 30m',
      stops: 0,
      price: 198,
      departureTime: '03:00 PM',
      arrivalTime: '10:30 PM',
    },
    {
      id: '6',
      airline: 'CloudWings',
      departure: 'LAX',
      arrival: 'NYC',
      duration: '6h 15m',
      stops: 1,
      price: 167,
      departureTime: '05:30 PM',
      arrivalTime: '12:45 AM',
    },
  ]

  const airlines = Array.from(new Set(mockFlights.map((f) => f.airline)))

  const filteredFlights = useMemo(() => {
    return mockFlights
      .filter((flight) => {
        const inPriceRange = flight.price >= priceRange[0] && flight.price <= priceRange[1]
        const airlineMatches =
          selectedAirlines.length === 0 || selectedAirlines.includes(flight.airline)
        const stopsMatches =
          selectedStops.length === 0 || selectedStops.includes(flight.stops)
        return inPriceRange && airlineMatches && stopsMatches
      })
      .sort((a, b) => {
        if (sortBy === 'cheapest') return a.price - b.price
        if (sortBy === 'fastest') return parseFloat(a.duration) - parseFloat(b.duration)
        return a.price / parseFloat(a.duration) - b.price / parseFloat(b.duration)
      })
  }, [priceRange, selectedAirlines, selectedStops, sortBy])

  const toggleAirline = (airline: string) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
    )
  }

  const toggleStops = (stops: number) => {
    setSelectedStops((prev) =>
      prev.includes(stops) ? prev.filter((s) => s !== stops) : [...prev, stops]
    )
  }

  return (
    <main className="flex-1 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">
            Flights from {from} to {to}
          </h1>
          <p className="text-foreground/60">
            {filteredFlights.length} flights available for {passengers} {passengers === '1' ? 'passenger' : 'passengers'}
          </p>
        </div>

        {/* Sort */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex gap-4">
            <button
              onClick={() => setSortBy('cheapest')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                sortBy === 'cheapest'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-foreground hover:bg-secondary'
              }`}
            >
              Cheapest
            </button>
            <button
              onClick={() => setSortBy('fastest')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                sortBy === 'fastest'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-foreground hover:bg-secondary'
              }`}
            >
              Fastest
            </button>
            <button
              onClick={() => setSortBy('bestvalue')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                sortBy === 'bestvalue'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-foreground hover:bg-secondary'
              }`}
            >
              Best Value
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-20">
              <h2 className="font-bold text-foreground mb-6">Filters</h2>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="50"
                    max="800"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-foreground/60">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Airlines */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Airlines</h3>
                <div className="space-y-3">
                  {airlines.map((airline) => (
                    <label key={airline} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAirlines.includes(airline)}
                        onChange={() => toggleAirline(airline)}
                        className="rounded"
                      />
                      <span className="text-foreground/70">{airline}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stops */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Stops</h3>
                <div className="space-y-3">
                  {[0, 1, 2].map((stops) => (
                    <label key={stops} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStops.includes(stops)}
                        onChange={() => toggleStops(stops)}
                        className="rounded"
                      />
                      <span className="text-foreground/70">
                        {stops === 0 ? 'Non-stop' : `${stops} ${stops === 1 ? 'Stop' : 'Stops'}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <section className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFlights.length > 0 ? (
                filteredFlights.map((flight) => (
                  <Link href={`/flight/${flight.id}`} key={flight.id}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                        {/* Airline */}
                        <div>
                          <div className="font-semibold text-foreground">{flight.airline}</div>
                          <div className="text-sm text-foreground/60">Flight Details</div>
                        </div>

                        {/* Time & Duration */}
                        <div>
                          <div className="font-semibold text-lg text-foreground">
                            {flight.departureTime}
                          </div>
                          <div className="text-sm text-foreground/60">{flight.departure}</div>
                        </div>

                        {/* Duration */}
                        <div className="text-center">
                          <div className="text-sm font-medium text-foreground/70 mb-1">
                            {flight.duration}
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <div className="text-xs text-foreground/60">
                              {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                            </div>
                          </div>
                        </div>

                        {/* Arrival */}
                        <div>
                          <div className="font-semibold text-lg text-foreground">
                            {flight.arrivalTime}
                          </div>
                          <div className="text-sm text-foreground/60">{flight.arrival}</div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            ${flight.price}
                          </div>
                          <button className="mt-2 w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="bg-card border border-border rounded-xl p-12 text-center">
                  <p className="text-foreground/60">No flights match your filters. Try adjusting your criteria.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
