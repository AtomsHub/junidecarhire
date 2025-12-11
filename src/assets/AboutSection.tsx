import image from '../image/driving.jpg'
import { Users, Car, Award, CheckCircle } from 'lucide-react';

const AboutSection = () => {
    const stats = [
        {icon: Users, value: '10,000+', label: 'Happy Customers'},
        {icon: Car, value: '150+', label: 'Vehicles'},
        {icon: Award, value: '10+', label: 'Years of Trusted Service'},
    ]

    const features = [
        'Competitive daily and weekly rates',
        'Free cancellation up to 24 hours',
        'Flexible pickup and drop-off locations',
        'Well-maintained, late-model vehicles',
        'No hidden fees or surprises',
        'Roadside assistance included',
    ]
    return (
        <section id='about' className="relative overflow-hidden bg-brand-bg-soft">
            <div className="container max-w-auto px-4 py-20 md:py-25">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side */}
                    <div className="relative flex justify-center">
                        <div className="relative rounded-2xl shadow-md">
                            <img src={image} alt="Hero Image" className="relative rounded-2xl shadow-2xl transtion-all duration-500 hover:shadow-glow hover:scale-105"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-text to-transparent" ></div>

                            <div className='absolute -bottom-10 right-10 px-10 py-6 bg-white/80 backdrop-blur-md shadow-lg flex items-center gap-5 rounded-lg'>
                                {stats.map((stats, index) => (
                                    <div key={index} className='flex flex-col items-center'>
                                        <stats.icon className='w-7 h-7 text-brand-accent'/>
                                        <p className='text-brand-text text-2xl font-semibold'>{stats.value}</p>
                                        <p className='text-brand-text-muted text-xs'>{stats.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Side */}
                    <div className="space-y-8 text-left">
                        <div className="space-y-4">
                            <p className='text-brand-accent text-sm font-semibold'>About Us</p>
                            <h1 className='text-4xl font-bold'>Your Trusted <span className='text-brand-accent'>Car Rental</span> Partner</h1>
                            <p className='text-brand-text-muted'>Junide Cutting Edge Enterprises is an indigenous organization fully registered with the Corporate Affairs Commission.
                            Since 2013, we have been providing professional car hire and leasing services to NGOs, government agencies, corporate organizations, and individual customers across Kebbi State.

                            We offer a reliable alternative to owning and maintaining vehicles, with a wide range of options designed for comfort, safety, and peace of mind.<br/> <br />

                            Whether you are traveling to Birnin Kebbi for business, attending an event, visiting family across the state, or supporting NGO field operations, we have the right vehicle ready for you.
                            Our team is passionate about excellent service, and our long standing reputation has made us a trusted name in transportation services.</p>

                            <div className='grid md:grid-cols-2 gap-2'>
                                {features.map((feature, index) => (
                                    <div key={index} className='flex items-start gap-2'>
                                        <CheckCircle className='text-brand-accent w-5 h-5'/>
                                        <p>{feature}</p>
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