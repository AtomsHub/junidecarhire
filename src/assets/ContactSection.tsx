import { MapPin, Phone, Mail } from "lucide-react"
import { useForm } from "../hook/useForm";

const ContactSection = () => {
  const {status, submit} = useForm();
  const stats = [
    {
        icon: MapPin,
        value: 'Our Locations',
        label: `Head Office: House 5, Adjacent Hero Science Academy, Behind Gando, Gesse Phase Three, Birnin Kebbi, Kebbi State.
        Branch Office: Red Roof Building, By Omo Oyalo School, Yamma Yamma Road, By Gwanara Village, Ilorin, Kwara State.`
    },
    {
        icon: Phone,
        value: 'Phone Number',
        label: '08032497890, 08121685731'
    },
    {
        icon: Mail,
        value: 'Email Address',
        label: 'junideenterprises22@gmail.com'
    }
];

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-bg-soft">
      <div className="container mx-w-auto px-12 py-20 md:py-25">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side */}
          <div className="space-y-8 text-left">
            <p className='text-brand-accent text-sm font-bold uppercase tracking-widest'>Contact Us</p>
            <h1 className='text-4xl font-bold'>Get In Touch With Us</h1>
            <p className="text-lg text-brand-text-muted">Have questions about our services or need help with a reservation?<br/>
            We're here to help! Reach out to us using the form or contact details below.</p>
            <div>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="bg-brand-accent-soft p-2 rounded-lg">
                      <stat.icon className="w-6 h-6 text-brand-accent"/>
                    </div>
                    <div className="">
                      <p className="text-sm font-semibold text-brand-text">{stat.value}</p>
                      <p className="text-sm text-brand-text-muted whitespace-pre-line">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form onSubmit={submit} className="max-w-md p-6 bg-white rounded-xl shadow-lg">
            <div className="space-y-5">
                <input type="hidden" name="submittedAt" value={new Date().toISOString()}/>
                <input type="hidden" name="formType" value="contact" />

                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm">Full Name*</label>
                    <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        className="w-full mt-1 p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm">Email Address*</label>
                    <input
                        id="email" 
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full mt-1 p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm">Phone Number</label>
                    <input
                        id="phone" 
                        type="tel" 
                        name="phone"
                        placeholder="Enter your phone number"
                        className="w-full mt-1 p-2 border rounded-md"
                        required
                    />
                </div>

                {/* Message  */}
                <div>
                    <label htmlFor="message" className="block text-sm">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you"
                        className="w-full mt-1 p-2 border rounded-md"
                    ></textarea>
                </div>

                {/* ... (Submit button and status messages) */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand-accent text-white p-2 rounded-md font-semibold hover:scale-105 transition disabled:opacity-50"
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {status === "success" && (
                    <p className="text-green-600 text-center mt-2 font-medium">
                        Message sent successfully!
                    </p>
                )}

                {/* Error Message */}
                {status === "error" && (
                    <p className="text-red-600 text-center mt-2 font-medium">
                        Something went wrong. Please try again.
                    </p>
                )}
            </div>
          </form>

        </div>
      </div>

    </section>
  )
}

export default ContactSection
