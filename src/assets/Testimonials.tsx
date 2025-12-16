import ClientCards from "./Clients";
import { testimonials } from "../data/Testimonial";

const Testimonials = () => {
    return (
        <section id='testimonials' className="container max-w-auto px-4 py-20 md:py-25 bg-brand-primary-soft">
            <div>
                <div className="text-center space-y-2 mb-10">
                    <p className="text-brand-accent text-sm font-semibold">Testimonials</p>
                    <h1 className="text-4xl font-bold">What Our Customers Say</h1>
                    <p className="text-lg text-brand-text-muted">Don't just take our word for it. Here's what our satisfied customers<br/> have to say about their experience with Junide Cutting Edge Enterprises.</p>
                </div>
                {/* Our Customers section */}
                <div className="space-y-6 mb-4">
                    <p className="text-brand-accent text-center text-sm font-semibold">Our Clients</p>
                    <ClientCards />
                </div>

                {/* Testimonials */}
                <div className="space-y-6">
                    <p className="text-brand-accent text-center text-sm font-semibold">Their Testimonies</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonials.map((testimonial, index) => {
                            const Icon = testimonial.icon
                            return(
                                <div key={index} className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white flex flex-col gap-4">
                                    <Icon className="w-8 h-8 text-brand-accent" />
                                    <p className="text-lg font-semibold text-brand-text">{testimonial.name}</p>
                                    <p className="text-base text-gray-600 leading-relaxed">{testimonial.message}</p>

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