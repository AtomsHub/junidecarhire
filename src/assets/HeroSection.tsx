import bg from '../image/hero-image.jpg'
import { ArrowRight, Clock, Shield, MapPin } from 'lucide-react';

const HeroSection = () => {
    return (
        <div id='home' className='relative min-h-[100vh] flex justify-center items-center overflow-hidden'>
            {/* Background Layer */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
                <div className="absolute inset-0 bg-brand-primary/25"></div>
            </div>

            {/* HomePage Content */}
            <div className='relative z-10 flex flex-col items-start justify-center w-full max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-20'>
                <div className='max-w-4xl'>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-[2px] bg-brand-accent"></div>
                        <h2 className="text-white/90 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                            Junide Cutting Edge Enterprises Limited
                        </h2>
                    </div>
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                        JCEEL <br />
                        <span className='text-brand-accent italic'>Car Hire</span>
                    </h1>

                    <p className='text-white/80 text-lg md:text-xl max-w-xl pb-8 leading-relaxed font-medium'>
                        Premium mobility solutions for <span className="text-brand-accent font-bold">NGOs, Corporate Bodies, and Individuals.</span> Reliability delivered across Northern Nigeria.
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-5'>
                        <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'>
                            <a 
                                href="#fleet" 
                                className='w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-accent text-white font-bold px-6 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300 shadow-lg'
                            >
                                Browse Our Fleet
                                <ArrowRight className='w-5 h-5'/>
                            </a>
                            <a 
                                href="#contact" 
                                className='w-full sm:w-auto flex items-center justify-center text-sm bg-transparent font-semibold text-brand-accent border border-brand-accent hover:bg-brand-accent hover:text-white px-6 py-3 rounded-full transition-all duration-300'
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 shrink-0'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-xl text-white/80 bg-brand-accent/80 flex items-center justify-center shadow-lg'>
                                <Shield className='w-6 h-6'/>
                            </div>
                            <div className='text-white/90'>
                                <p className='font-semibold'>Fully Insured</p>
                                <p className='text-xs opacity-80'>Complete Coverage</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-xl text-white/80 bg-brand-accent/80 flex items-center justify-center shadow-lg'>
                                <Clock className='w-6 h-6'/>
                            </div>
                            <div className='text-white/90'>
                                <p className='font-semibold'>24/7 Support</p>
                                <p className='text-xs opacity-80'>Always Here To Help</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-xl text-white/80 bg-brand-accent/80 flex items-center justify-center shadow-lg'>
                                <MapPin className='w-6 h-6'/>
                            </div>
                            <div className='text-white/90'>
                                <p className='font-semibold'>Statewide</p>
                                <p className='text-xs opacity-80'>Multiple Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/60 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;