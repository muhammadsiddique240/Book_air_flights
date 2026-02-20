'use client'

import { useState, useRef } from 'react'
import { cities } from '@/lib/cities'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Home() {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
  })
  const [fromSuggestions, setFromSuggestions] = useState<any[]>([])
  const [toSuggestions, setToSuggestions] = useState<any[]>([])
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  const fromInputRef = useRef<HTMLInputElement>(null)
  const toInputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to results page with search params
    const params = new URLSearchParams({
      from: searchData.from,
      to: searchData.to,
      departDate: searchData.departDate,
      returnDate: searchData.returnDate,
      passengers: searchData.passengers,
    })
    window.location.href = `/results?${params.toString()}`
  }

  const popularDestinations = [
    { city: 'New York', code: 'NYC', image: '🗽' },
    { city: 'London', code: 'LHR', image: '🎡' },
    { city: 'Paris', code: 'CDG', image: '🗼' },
    { city: 'Tokyo', code: 'NRT', image: '🗾' },
    { city: 'Dubai', code: 'DXB', image: '🏙' },
    { city: 'Sydney', code: 'SYD', image: '🦘' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frequent Traveler',
      text: 'BookAir helped me save over $500 on my international flights. Amazing deals!',
    },
    {
      name: 'Michael Chen',
      role: 'Business Traveler',
      text: 'The interface is so intuitive. Found my perfect flight in minutes!',
    },
    {
      name: 'Emma Williams',
      role: 'Vacation Planner',
      text: 'Best price comparison tool I\'ve used. Highly recommend BookAir!',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-100/60 via-white/80 to-indigo-100/60 py-24 px-4 overflow-hidden section-fade">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 text-7xl opacity-10 animate-pulse">✈</div>
            <div className="absolute bottom-10 left-10 text-7xl opacity-10 animate-pulse">🌍</div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-white/0 to-indigo-200/20" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 mb-4 text-balance drop-shadow-lg">
                Find the Best Flights at the Best Prices
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 text-balance font-medium">
                Compare flights from hundreds of airlines and book your perfect trip
              </p>
            </div>

            {/* Search Card */}
            <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto fade-in">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {/* From */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">From</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Departure city"
                        value={searchData.from}
                        ref={fromInputRef}
                        autoComplete="off"
                        onFocus={() => {
                          setShowFromDropdown(true)
                          setFromSuggestions(
                            cities.filter(city =>
                              city.city.toLowerCase().includes(searchData.from.toLowerCase()) ||
                              city.code.toLowerCase().includes(searchData.from.toLowerCase())
                            )
                          )
                        }}
                        onBlur={() => setTimeout(() => setShowFromDropdown(false), 100)}
                        onChange={e => {
                          setSearchData({ ...searchData, from: e.target.value })
                          setShowFromDropdown(true)
                          setFromSuggestions(
                            cities.filter(city =>
                              city.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
                              city.code.toLowerCase().includes(e.target.value.toLowerCase())
                            )
                          )
                        }}
                        className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      {showFromDropdown && fromSuggestions.length > 0 && (
                        <ul className="absolute z-20 left-0 right-0 bg-white border border-gray-200 rounded shadow max-h-48 overflow-y-auto">
                          {fromSuggestions.map((city, idx) => (
                            <li
                              key={city.code}
                              className="px-4 py-2 hover:bg-primary/10 cursor-pointer"
                              onMouseDown={() => {
                                setSearchData({ ...searchData, from: city.city })
                                setShowFromDropdown(false)
                              }}
                            >
                              {city.city} ({city.code})
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* To */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">To</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Arrival city"
                        value={searchData.to}
                        ref={toInputRef}
                        autoComplete="off"
                        onFocus={() => {
                          setShowToDropdown(true)
                          setToSuggestions(
                            cities.filter(city =>
                              city.city.toLowerCase().includes(searchData.to.toLowerCase()) ||
                              city.code.toLowerCase().includes(searchData.to.toLowerCase())
                            )
                          )
                        }}
                        onBlur={() => setTimeout(() => setShowToDropdown(false), 100)}
                        onChange={e => {
                          setSearchData({ ...searchData, to: e.target.value })
                          setShowToDropdown(true)
                          setToSuggestions(
                            cities.filter(city =>
                              city.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
                              city.code.toLowerCase().includes(e.target.value.toLowerCase())
                            )
                          )
                        }}
                        className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      {showToDropdown && toSuggestions.length > 0 && (
                        <ul className="absolute z-20 left-0 right-0 bg-white border border-gray-200 rounded shadow max-h-48 overflow-y-auto">
                          {toSuggestions.map((city, idx) => (
                            <li
                              key={city.code}
                              className="px-4 py-2 hover:bg-primary/10 cursor-pointer"
                              onMouseDown={() => {
                                setSearchData({ ...searchData, to: city.city })
                                setShowToDropdown(false)
                              }}
                            >
                              {city.city} ({city.code})
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Depart */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Depart</label>
                    <input
                      type="date"
                      value={searchData.departDate}
                      onChange={(e) => setSearchData({ ...searchData, departDate: e.target.value })}
                      className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  {/* Return */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Return</label>
                    <input
                      type="date"
                      value={searchData.returnDate}
                      onChange={(e) => setSearchData({ ...searchData, returnDate: e.target.value })}
                      className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Passengers</label>
                    <select
                      value={searchData.passengers}
                      onChange={(e) => setSearchData({ ...searchData, passengers: e.target.value })}
                      className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Passenger' : 'Passengers'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full premium-btn py-4 text-lg tracking-wide"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2.25 12a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2.25 12Z"></path><path fill="currentColor" d="M12.53 3.47a.75.75 0 0 1 0 1.06L5.81 11.25a.75.75 0 0 1-1.06-1.06l6.72-6.72a.75.75 0 0 1 1.06 0Zm0 17.06a.75.75 0 0 1-1.06 0l-6.72-6.72a.75.75 0 0 1 1.06-1.06l6.72 6.72a.75.75 0 0 1 0 1.06Z"></path></svg>
                    Search Flights
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center text-balance">
              Popular Destinations
            </h2>
            <p className="text-center text-foreground/60 mb-12">Explore our most booked destinations</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {popularDestinations.map((destination) => (
                <button
                  key={destination.code}
                  onClick={() => {
                    setSearchData({ ...searchData, to: destination.city })
                    const form = document.querySelector('form') as HTMLFormElement
                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                  }}
                  className="group p-6 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary transition-all cursor-pointer text-center"
                >
                  <div className="text-4xl mb-2">{destination.image}</div>
                  <div className="font-semibold text-foreground">{destination.city}</div>
                  <div className="text-sm text-foreground/60">{destination.code}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Why Choose BookAir?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Best Prices</h3>
                <p className="text-foreground/70">
                  Compare prices from hundreds of airlines and find the best deals instantly
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast & Easy</h3>
                <p className="text-foreground/70">
                  Book your flights in minutes with our intuitive and user-friendly interface
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="text-4xl mb-4">🛡</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Safe & Secure</h3>
                <p className="text-foreground/70">
                  Your data is protected with enterprise-grade security and encryption
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
