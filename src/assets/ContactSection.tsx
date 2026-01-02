import { MapPin, Phone, Mail } from "lucide-react"
import { useForm } from "../hook/useForm";

const ContactSection = () => {
  const { status, submit } = useForm();

  const stats = [
    {
      icon: MapPin,
      value: 'Head Office',
      label: `House 5, Adjacent Hero Science Academy, Behind Gando, Gesse Phase Three, Birnin Kebbi, Kebbi State.`
    },
    {
      icon: MapPin,
      value: 'Branch Offices',
      label: `• Office 6, Along Army Barrack Road, Opposite Army Day Primary School, Adjacent FMC, Birnin Kebbi.
      • JJ 9B, Okonni Close, Sunnyvale Estate.
      • House No 1, Behind White Chemist, Shetima Lokoja, Kogi State.`
    },
    {
      icon: Phone,
      value: 'Phone Numbers',
      label: `+234 814 839 6579
      +234 703 347 8402
      +234 703 375 3487`
    },
    {
      icon: Mail,
      value: 'Email Addresses',
      label: `junideenterprises22@gmail.com
      junide22limited@gmail.com`
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-bg-soft">
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-25">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8 text-left">
            <div>
              <p className='text-brand-accent text-sm font-bold uppercase tracking-widest mb-2'>Contact Us</p>
              <h2 className='text-3xl md:text-4xl font-black text-brand-text mb-4'>
                Junide Cutting Edge Enterprises Limited (JCEEL)
              </h2>
              <p className="text-lg text-brand-text-muted leading-relaxed">
                Reach out to our head office or visit any of our branch locations for personalized assistance.
              </p>
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="bg-brand-accent p-2 rounded-lg border border-gray-100 group-hover:border-brand-accent transition-colors shadow-sm">
                    <stat.icon className="w-6 h-6 text-white"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-brand-text uppercase tracking-tight mb-1">{stat.value}</p>
                    <p className="text-sm text-brand-text-muted whitespace-pre-line leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={submit} className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-50">
            <div className="space-y-5">
              <input type="hidden" name="submittedAt" value={new Date().toISOString()}/>
              <input type="hidden" name="formType" value="contact" />

              <h3 className="text-xl font-bold text-brand-text mb-2">Send a Message</h3>

              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase text-brand-text-muted mb-1">Full Name*</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-brand-text-muted mb-1">Email Address*</label>
                <input
                  id="email" 
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase text-brand-text-muted mb-1">Phone Number*</label>
                <input
                  id="phone" 
                  type="tel" 
                  name="phone"
                  placeholder="+234..."
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase text-brand-text-muted mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-accent text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition-all shadow-lg shadow-brand-accent/20 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="bg-green-50 text-green-600 text-center p-3 rounded-lg text-sm font-bold border border-green-100">
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 text-red-600 text-center p-3 rounded-lg text-sm font-bold border border-red-100">
                  Something went wrong. Please try again.
                </div>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default ContactSection