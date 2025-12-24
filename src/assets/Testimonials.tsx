import ClientCards from "./Clients";
import { testimonials } from "../data/Testimonial";
import { Quote } from "lucide-react";

const Testimonials = () => {
    return (
        <section id='testimonials' className="px-4 py-20 md:py-28 bg-brand-primary-soft/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-3">Trust & Reliability</p>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-6">What Our Partners Say</h2>
                    <p className="text-lg text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
                        We are proud to provide critical mobility support to international NGOs, 
                        government agencies, and corporate leaders across Nigeria.
                    </p>
                </div>

                {/* Brand Logos/Clients Section */}
                <div className="mb-24">
                    <p className="text-gray-400 text-center text-xs font-bold uppercase tracking-[0.3em] mb-10">Trusted By Global Organizations</p>
                    <ClientCards />
                </div>

                {/* Testimonials Grid */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-[1px] bg-gray-200 flex-grow"></div>
                        <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">Partner Testimonies</p>
                        <div className="h-[1px] bg-gray-200 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => {
                            const Icon = testimonial.icon;
                            return (
                                <div 
                                    key={index} 
                                    className="relative p-8 md:p-10 border border-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm flex flex-col gap-6 group">
                                    <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-primary/5 group-hover:text-brand-accent/10 transition-colors" />
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-brand-primary/5 rounded-2xl text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-brand-text leading-tight">{testimonial.name}</p>
                                            <p className="text-sm text-brand-accent font-medium uppercase tracking-wider">Official Partner</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed italic relative z-10">
                                        "{testimonial.message}"
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;