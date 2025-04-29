
import { useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import CounterCard from '@/components/CounterCard';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <SectionTitle 
                accent="ABOUT US"
                title="Expert guidance and personalized coaching."
              />

              <p className="text-gray-600 mb-6">
                Receive tailored coaching that empowers you to navigate challenges and achieve your personal and professional goals. With expert guidance, we help you unlock your potential and create lasting change in your life and business.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-3 mt-1" />
                  <div>
                    <span className="font-medium">Goal Setting And Accountability</span>
                    <p className="text-sm text-gray-500">We help you set clear, actionable goals and create systems of accountability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-3 mt-1" />
                  <div>
                    <span className="font-medium">Mindset And Confidence Building</span>
                    <p className="text-sm text-gray-500">Transform limiting beliefs and develop the confidence to reach your full potential.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-3 mt-1" />
                  <div>
                    <span className="font-medium">Continuous Support And Accountability</span>
                    <p className="text-sm text-gray-500">We're with you every step of the way, providing ongoing guidance and motivation.</p>
                  </div>
                </li>
              </ul>

              <Button asChild className="bg-gradient-primary hover:bg-infine-green transition-all duration-300">
                <Link to="/contact" className="flex items-center">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Team member working" 
                  className="rounded-lg shadow-lg animate-fade-right h-48 w-full object-cover"
                  style={{ animationDelay: "0.1s" }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Office environment" 
                  className="rounded-lg shadow-lg animate-fade-right h-64 w-full object-cover"
                  style={{ animationDelay: "0.3s" }}
                />
              </div>
              <div className="space-y-6 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Business coaching" 
                  className="rounded-lg shadow-lg animate-fade-right h-64 w-full object-cover"
                  style={{ animationDelay: "0.5s" }}
                />
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Teamwork session" 
                  className="rounded-lg shadow-lg animate-fade-right h-48 w-full object-cover"
                  style={{ animationDelay: "0.7s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute -left-40 top-40 h-80 w-80 bg-infine-teal/10 rounded-full"></div>
        <div className="absolute -right-40 bottom-40 h-80 w-80 bg-infine-green/10 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            accent="WHO WE ARE"
            title="Unlock your potential with our expertise"
            align="center"
          />

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential. We offer personalized strategies, proven methods, and unwavering support to help you navigate challenges and achieve your goals.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-infine-teal mb-2">91%</div>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-infine-teal mb-2">18K+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-infine-teal mb-2">30+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-infine-teal mb-2">42</div>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-8">
              At INFINE, our mission is to empower individuals and organizations to reach their highest potential through personalized coaching, strategic guidance, and continuous support. We believe in creating lasting transformation that extends beyond immediate goals to long-term success and fulfillment.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-600">
              Our approach combines proven coaching methodologies, cutting-edge research, and practical tools tailored to your specific needs and goals. We focus on creating actionable plans that drive meaningful results while providing the support and accountability needed for lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="OUR TEAM"
            title="Certified and experienced coaching professionals"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Jonathan Fisher" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Jonathan Fisher</h3>
                <p className="text-infine-teal mb-3">CEO & Lead Business Coach</p>
                <p className="text-sm text-gray-600 mb-4">
                  20+ years experience in business consulting and leadership coaching for Fortune 500 companies.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Sarah Johnson" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-infine-teal mb-3">Executive Coach & Strategist</p>
                <p className="text-sm text-gray-600 mb-4">
                  Former C-suite executive with expertise in leadership development and organizational transformation.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Michael Torres" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Torres</h3>
                <p className="text-infine-teal mb-3">Career Development Coach</p>
                <p className="text-sm text-gray-600 mb-4">
                  Specialized in helping professionals navigate career transitions and advancement opportunities.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Emma Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Emma Chen</h3>
                <p className="text-infine-teal mb-3">Life Balance Coach</p>
                <p className="text-sm text-gray-600 mb-4">
                  Expert in helping clients achieve work-life balance and personal fulfillment.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-infine-teal">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="OUR CLIENTS"
            title="Trusted by businesses worldwide"
            align="center"
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" alt="Google" className="h-12" />
            </div>
            <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="Amazon" className="h-12" />
            </div>
            <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1920px-Microsoft_logo.svg.png" alt="Microsoft" className="h-12" />
            </div>
            <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png" alt="Apple" className="h-12" />
            </div>
            <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1920px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-12" />
            </div>
            <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Airbnb_Logo.svg/1920px-Airbnb_Logo.svg.png" alt="Airbnb" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your life and business?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Connect with our team of expert coaches and start your journey to success today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-infine-teal hover:bg-gray-100">
              <Link to="/contact" className="flex items-center">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white hover:text-white">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
