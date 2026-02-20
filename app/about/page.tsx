import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  const team = [
    { name: 'Alex Thompson', role: 'CEO & Founder' },
    { name: 'Sarah Chen', role: 'CTO' },
    { name: 'Michael Rodriguez', role: 'CFO' },
    { name: 'Emma Johnson', role: 'Head of Customer Success' },
  ]

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-background py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              About BookAir
            </h1>
            <p className="text-xl text-foreground/70 text-balance">
              Making flight booking simple, affordable, and accessible for everyone
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  At BookAir, we believe that travel should be accessible to everyone. Our mission is to
                  make flight booking transparent, affordable, and hassle-free by providing the best prices
                  and most comprehensive comparison tools.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Founded in 2020, we&apos;ve helped over 5 million travelers find their perfect flights and
                  save billions of dollars collectively.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-8 border border-border">
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">5M+</div>
                    <p className="text-foreground/70">Happy Travelers</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">$2.5B</div>
                    <p className="text-foreground/70">Saved by Our Users</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">800+</div>
                    <p className="text-foreground/70">Airlines Compared</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
                <p className="text-foreground/70">
                  We believe in complete honesty about prices, taxes, and fees with no hidden charges
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                <p className="text-foreground/70">
                  Constantly improving our technology to provide the best booking experience
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-4xl mb-4">❤</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer First</h3>
                <p className="text-foreground/70">
                  Your satisfaction is our top priority in everything we do
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-5xl">👤</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-foreground/60">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to find your next adventure?</h2>
            <p className="text-foreground/70 mb-8">
              Start exploring the world with BookAir today
            </p>
            <a
              href="/"
              className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all"
            >
              Search Flights
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
