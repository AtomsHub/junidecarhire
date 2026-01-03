import image from '../image/driving.jpg'
import { Users, Car, Award, CheckCircle } from 'lucide-react';

const AboutSection = () => {
    const stats = [
        {icon: Users, value: '1,000+', label: 'Happy Customers'},
        {icon: Car, value: '50+', label: 'Vehicles'},
        {icon: Award, value: '10+', label: 'Years of Trust'},
    ]

    const features = [
        'Competitive daily and weekly rates',
        'Free cancellation up to 24 hours',
        'Interstate pickup and drop-off',
        'Well-maintained, late-model vehicles',
        'No hidden fees or surprises',
        '24/7 Roadside assistance',
    ]

    return (
        <section id='about' className="relative overflow-hidden bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Image & Stats */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-visible">
                            {/* Main Image */}
                            <img 
                                src={image} 
                                alt="Professional Driving" 
                                className="rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent rounded-3xl" ></div>

                            {/* Responsive Stats Box */}
                            <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-8 w-auto md:w-auto px-6 py-8 bg-white shadow-2xl flex justify-around gap-6 rounded-2xl border border-gray-100 z-20'>
                                {stats.map((stat, index) => (
                                    <div key={index} className='flex md:flex-row items-center gap-3'>
                                        <div className="p-2 bg-brand-accent/10 rounded-lg">
                                            <stat.icon className='w-6 h-6 text-brand-accent'/>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <p className='text-brand-text text-xl font-bold leading-none'>{stat.value}</p>
                                            <p className='text-brand-text-muted text-[10px] uppercase font-bold tracking-wider'>{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Side */}
                    <div className="space-y-8 mt-12 lg:mt-0">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <p className='text-brand-accent text-sm font-bold uppercase tracking-widest'>Our Story</p>
                            </div>
                            
                            <h2 className='text-4xl md:text-5xl font-black text-brand-text leading-tight'>
                                Your Trusted <span className='text-brand-accent'>Car Rental</span> Partner
                            </h2>
                            
                            <div className='text-brand-text-muted space-y-4 leading-relaxed'>
                                <p>
                                    <strong className="text-brand-text">Junide Cutting Edge Enterprises Limited</strong>, is a premier indigenous transportation organization. Since 2013, we have specialized in providing professional car hire and leasing solutions for <span className="text-brand-text font-medium text-brand-primary">NGOs, Government agencies, and Corporate organizations.</span>
                                </p>

                                <p className='text-brand-text-muted space-y-4 leading-relaxed'>
                                    While our roots are in <strong className="text-brand-text">Birnin Kebbi</strong>, our reach is expansive, covering the full breadth of Northern Nigeria. We facilitate seamless travel across the <strong className="text-brand-text">Kebbi–Sokoto corridor</strong> and maintain a robust operational presence across the <strong className="text-brand-text">North West</strong> (Kebbi, Sokoto, Kano, Kaduna, Jigawa), the <strong className="text-brand-text">North East</strong> (Bauchi, Gombe, Adamawa), and the <strong className="text-brand-text">North Central</strong> (Plateau State) geopolitical zones.
                                </p>
                                
                                <p>
                                    Whether supporting large-scale NGO field operations or providing executive transport for business travelers, our fleet is maintained to the highest safety standards to ensure your peace of mind.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 pt-4'>
                                {features.map((feature, index) => (
                                    <div key={index} className='flex items-center gap-3 group'>
                                        <div className="bg-brand-accent/10 p-1 rounded-full group-hover:bg-brand-accent transition-colors">
                                            <CheckCircle className='text-brand-accent group-hover:text-white w-4 h-4'/>
                                        </div>
                                        <p className="text-sm font-medium text-brand-text/80">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
