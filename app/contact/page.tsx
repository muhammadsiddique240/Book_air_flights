'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-background py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/70 text-balance">
              Have questions? We&apos;re here to help
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-foreground/70">123 Flight Street, Travel City, TC 12345, USA</p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-foreground/70">support@bookair.com</p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="text-3xl mb-3">🕐</div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-foreground/70">Mon - Fri: 9am - 10pm</p>
                  <p className="text-foreground/70">Sat - Sun: 10am - 8pm</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">Thank you! We&apos;ll get back to you soon.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">Follow Us</h2>
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-secondary/50 hover:bg-primary/10 rounded-lg flex items-center justify-center text-2xl transition-colors"
                  title="Twitter"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-secondary/50 hover:bg-primary/10 rounded-lg flex items-center justify-center text-2xl transition-colors"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-secondary/50 hover:bg-primary/10 rounded-lg flex items-center justify-center text-2xl transition-colors"
                  title="Instagram"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-secondary/50 hover:bg-primary/10 rounded-lg flex items-center justify-center text-2xl transition-colors"
                  title="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Location</h2>
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺</div>
                <p className="text-foreground/60">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
