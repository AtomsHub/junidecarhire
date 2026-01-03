import ClientCards from "./Clients";
import { testimonials } from "../data/Testimonial";
import { Quote } from "lucide-react";

const Testimonials = () => {
    return (
        <section id='testimonials' className="px-6 py-20 md:py-28 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-3">Trust & Reliability</p>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-text mb-6">What Our Partners Say</h2>
                    <p className="text-lg text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
                        We are proud to provide critical mobility support to international NGOs, 
                        government agencies, and corporate leaders across Nigeria.
                    </p>
                </div>

                <div className="mb-24">
                    <p className="text-gray-400 text-center text-[10px] font-bold uppercase tracking-[0.4em] mb-12">
                        Trusted By Global Organizations
                    </p>
                    <ClientCards />
                </div>

                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] bg-slate-200 flex-grow"></div>
                    <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">Partner Testimonies</p>
                    <div className="h-[1px] bg-slate-200 flex-grow"></div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => {
                        const Icon = testimonial.icon;
                        return (
                            <div 
                                key={index} 
                                className="relative p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col gap-6 group"
                            >
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-100 group-hover:text-brand-accent/10 transition-colors" />
                                
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-50 rounded-2xl text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-brand-text leading-tight">{testimonial.name}</p>
                                        <p className="text-[10px] text-brand-accent font-bold uppercase tracking-wider">Official Partner</p>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                                    "{testimonial.message}"
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;