import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Banner = () => {
    return (
        <div className='container mx-auto my-4 md:min-h-[700px] bg-cover'>
            
             <div>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                effect="fade"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={
                    { delay: 2000 }
                }
            >
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/4pXRcrj/banner.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Find Your Dream Job Today!</h1>
                                <p className="mb-5">Discover your dream career today! Explore thousands of job opportunities tailored to your skills and aspirations. Start your journey towards success now!</p>
                                <a href='#allJobs' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/5MBp7gJ/banner2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Discover Exciting Career Opportunities</h1>
                                <p className="mb-5">Explore thrilling career prospects! Uncover diverse opportunities tailored to your ambitions. Start your journey towards a fulfilling profession today.</p>
                                <a href='#allJobs' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:min-h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/nRxLj93/banner3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Start Your Job Search Journey Here</h1>
                                <p className="mb-5">Embark on your job search journey here! Find opportunities tailored to your skills and aspirations. Begin your path to career success today.</p>
                                <a href='#allJobs' className="btn btn-success text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
            </div> 
        </div >
    );
};

export default Banner;