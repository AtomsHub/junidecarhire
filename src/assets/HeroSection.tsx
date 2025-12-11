import bg from '../image/hero-image.jpg'
import { ArrowRight, Clock, Shield, MapPin } from 'lucide-react';

const HeroSection = () => {
    return (
        <div id='home' className='relative min-h-screen flex justify-center items-center overflow-hidden'>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${bg})` }}>

                <div className="absolute inset-0 bg-brand-primary/40"></div>
                {/* HomePage Content */}

                <div className='relative z-10 flex flex-col items-start justify-center px-20  pt-32 pb-20'>
                    <div className='max-w-3xl'>
                        <h1 className="text-white/80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Your Journey, {" "}
                            <span className='text-brand-accent'>Our Wheels</span>
                        </h1>
                        <p className='text-white/80 text-lg md:text-xl max-w-xl  pb-8'>Experience reliable and premium car hire services across Kebbi State. From economy to luxury, we provide vehicles that match every trip, purpose, and budget.</p>
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <button className='text-sm sm:w-auto bg-brand-accent text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-200'><a href="#fleet" className='flex items-center gap-2'>
                                Browse Our Fleet
                                <ArrowRight className='w-5 h-5'/>
                            </a>
                            </button>
                            <button className='text-sm sm:w-auto bg-transparent font-semibold text-brand-accent border border-brand-accent hover:border-none hover:text-white/80 hover:bg-brand-accent px-6 py-2 rounded-lg'><a href="#contact">Contact Us</a></button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-xl text-white/80 bg-brand-accent/80 transparent flex items-center justify-center'>
                                <Shield className='w-6 h-6'/>
                            </div>
                            <div className='text-white/80'>
                                <p className='font-semibold'>Fully Insured</p>
                                <p className='text-sm'>Complete Coverage</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-xl text-white/80 bg-brand-accent/80 transparent flex items-center justify-center'>
                                <Clock className='w-6 h-6'/>
                            </div>
                            <div className='text-white/80'>
                                <p className='font-semibold'>24/7 Support</p>
                                <p className='text-sm'>Always Here To Help</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-xl text-white/80 bg-brand-accent/80 transparent flex items-center justify-center'>
                                <MapPin className='w-6 h-6'/>
                            </div>
                            <div className='text-white/80'>
                                <p className='font-semibold'>Statewide</p>
                                <p className='text-sm'>Multiple Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;