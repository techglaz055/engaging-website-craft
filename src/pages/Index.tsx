
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Play, Briefcase, Book, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CounterCard from '@/components/CounterCard';
import VideoCard from '@/components/VideoCard';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1cbaab_0%,_transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-flex items-center bg-black/20 text-infine-teal px-4 py-2 rounded-full text-sm font-medium">
                <span className="mr-2">//</span> WELCOME TO INFINE.
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Expert your life &
                <span className="block mt-2 gradient-text">business coaching</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                Receive tailored coaching that empowers you to navigate challenges and achieve your personal and professional goals. With expert guidance.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-gradient-primary hover:bg-infine-green text-white transition-all duration-300">
                  <Link to="/contact" className="flex items-center">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white hover:text-white">
                  <Link to="/programs" className="flex items-center">
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className={`mt-10 lg:mt-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -top-4 -left-4 bg-infine-teal text-white p-4 rounded-lg z-10">
                  <div className="text-lg font-bold">30+ years of</div>
                  <div className="text-lg font-bold">experience</div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Business Coach" 
                  className="rounded-lg w-full shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-gray-500">satisfied clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 justify-center text-center mb-12">
            <div className="flex flex-col items-center animate-bounce-slow">
              <div className="h-16 w-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-medium">Tailored Coaching Solutions for growth.</h3>
            </div>
            <div className="flex flex-col items-center animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
              <div className="h-16 w-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-medium">Proven Coaching Techniques Backed.</h3>
            </div>
            <div className="flex flex-col items-center animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
              <div className="h-16 w-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-medium">Holistic Life and Business Coaching.</h3>
            </div>
            <div className="flex flex-col items-center animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
              <div className="h-16 w-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-medium">Flexible Client Centered Coaching Program.</h3>
            </div>
            <div className="flex flex-col items-center animate-bounce-slow" style={{ animationDelay: '0.8s' }}>
              <div className="h-16 w-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-medium">Expert Guidance with Ongoing Support.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative lg:max-w-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Coaching Discussion" 
                  className="rounded-lg shadow-xl animate-fade-right"
                />
                <div className="absolute -bottom-6 -left-6 bg-infine-teal text-white p-4 rounded-lg animate-fade-in">
                  <div className="font-bold text-xl">Creative Result</div>
                  <div>Award Winning</div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <SectionTitle 
                accent="ABOUT US"
                title="Expert guidance and personalized coaching."
              />

              <p className="text-gray-600 mb-6">
                Receive tailored coaching that empowers you to navigate challenges and achieve your personal and professional goals. With expert guidance.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-2 mt-1" />
                  <span>Goal Setting And Accountability</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-2 mt-1" />
                  <span>Mindset And Confidence Building</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-2 mt-1" />
                  <span>Personalized Development Plans</span>
                </li>
              </ul>

              <Button asChild className="bg-gradient-primary hover:bg-infine-green transition-all duration-300">
                <Link to="/about" className="flex items-center">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1cbaab_0%,_transparent_60%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            accent="SERVICES"
            title="Comprehensive coaching for life and business"
            subtitle="Our coaching services provide personalized strategies for both personal growth and business success. We focus on your unique challenges, offering expert guidance to help you."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
              title="Personal Coaching"
              description="One-on-one sessions to achieve personal goals and enhance self-awareness."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Business Coaching"
              description="Strategic guidance for entrepreneurs, executives, and businesses to achieve growth and efficiency."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
              title="Career Development"
              description="Guidance on career transitions, job search strategies, and skill enhancement."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Team Coaching"
              description="Enhancing teamwork, collaboration, and communication within organizations."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
              title="Relationship Coaching"
              description="Building better personal and professional relationships through improved communication."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Spiritual Coaching"
              description="Finding purpose, meaning, and balance in life through spiritual guidance."
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-infine-teal hover:bg-infine-green text-white transition-all duration-300">
              <Link to="/consultancy" className="flex items-center">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="PROGRAMS"
            title="Our coaching programs"
            subtitle="Explore our carefully designed programs to help you reach your full potential."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-infine-darkblue flex items-center justify-center">
                <Book className="h-16 w-16 text-infine-teal" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Executive Coaching</h3>
                <p className="text-gray-600 mb-4">Tailored support for leaders to enhance their effectiveness, strategic thinking, and leadership skills.</p>
                <Button asChild className="bg-gradient-primary hover:bg-infine-green w-full">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-infine-darkblue flex items-center justify-center">
                <Briefcase className="h-16 w-16 text-infine-teal" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
                <p className="text-gray-600 mb-4">Strategic guidance for business owners and entrepreneurs to scale their businesses effectively.</p>
                <Button asChild className="bg-gradient-primary hover:bg-infine-green w-full">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-infine-darkblue flex items-center justify-center">
                <Phone className="h-16 w-16 text-infine-teal" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Life Transformation</h3>
                <p className="text-gray-600 mb-4">Comprehensive personal development program to help you achieve harmony in all areas of life.</p>
                <Button asChild className="bg-gradient-primary hover:bg-infine-green w-full">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="RESOURCES"
            title="Watch our coaching videos for practical tools"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoCard 
              thumbnail="https://i.ytimg.com/vi/FD9qVvvY_YU/hqdefault.jpg"
              title="Goal Setting Strategies for Success"
              duration="10:15"
              videoId="FD9qVvvY_YU"
            />
            <VideoCard 
              thumbnail="https://i.ytimg.com/vi/5yBU1ELFXfI/hqdefault.jpg"
              title="Building Confidence in Business"
              duration="8:32"
              videoId="5yBU1ELFXfI"
            />
            <VideoCard 
              thumbnail="https://i.ytimg.com/vi/skP7ISL1JBU/hqdefault.jpg"
              title="Leadership Skills for the Modern World"
              duration="15:47"
              videoId="skP7ISL1JBU"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-infine-teal text-infine-teal hover:bg-infine-teal hover:text-white">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Play className="mr-2 h-4 w-4" /> Visit Our Channel
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-dark relative">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1cbaab_0%,_transparent_60%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            accent="TESTIMONIAL"
            title="Real success stories from our coaching clients"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              name="Natalie Brooks"
              position="Marketing Director"
              company="Elevation Media"
              quote="The coaching sessions transformed my approach to leadership. I'm now more confident, strategic, and effective in managing my team."
              rating={5}
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              name="David Chen"
              position="CEO"
              company="Innovative Tech"
              quote="Working with INFINE has been a game-changer for our business. Their strategic insights helped us double our revenue in just one year."
              rating={5}
            />
          </div>

          <div className="mt-16 flex justify-center">
            <div className="inline-flex shadow-sm rounded-md">
              <button className="h-10 w-10 rounded-full bg-infine-teal text-white flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <CounterCard value={91} suffix="%" title="Satisfied Customers" />
            <CounterCard value={18} suffix="K" title="Projects Completed" />
            <CounterCard value={5000} suffix="+" title="Coaching Sessions" />
            <CounterCard value={30} suffix="+" title="Years Experience" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to unlock your full potential?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards personal and professional growth with our expert coaching services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-infine-teal hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white hover:text-white">
              <Link to="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
