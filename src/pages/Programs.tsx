
import { useEffect } from 'react';
import { Play, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import VideoCard from '@/components/VideoCard';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="OUR PROGRAMS"
            title="Comprehensive coaching programs for growth"
            subtitle="Explore our carefully designed coaching programs tailored to meet your personal and professional development needs."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-primary flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Personal Development</h3>
                <p className="text-gray-600 mb-4">A comprehensive program designed to help you discover your strengths, overcome limiting beliefs, and build confidence.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">12-week structured coaching</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">Weekly one-on-one sessions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">Personalized development plan</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$499</span>
                  <Button asChild className="bg-gradient-primary hover:bg-infine-green">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 transform md:scale-110 z-10">
              <div className="bg-infine-teal text-white text-center py-2 font-medium">Most Popular</div>
              <div className="h-48 bg-gradient-dark flex items-center justify-center">
                <svg className="h-16 w-16 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Executive Leadership</h3>
                <p className="text-gray-600 mb-4">Master strategic thinking, effective leadership, and organizational management to advance your career.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">16-week intensive program</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">Bi-weekly executive coaching</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">360° leadership assessment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">Group mastermind sessions</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$1,499</span>
                  <Button asChild className="bg-gradient-primary hover:bg-infine-green">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-primary flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Business Growth</h3>
                <p className="text-gray-600 mb-4">Scale your business with strategic planning, operational excellence, and effective team management.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">6-month business transformation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">Monthly strategy sessions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-infine-teal mr-2" />
                    <span className="text-sm">Business performance audit</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$2,999</span>
                  <Button asChild className="bg-gradient-primary hover:bg-infine-green">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="METHODOLOGY"
            title="Our coaching approach"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-infine-teal hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-16 w-16 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">01. Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your current situation, strengths, challenges, and goals.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-infine-teal hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="h-16 w-16 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">02. Goal Setting</h3>
              <p className="text-gray-600">
                Creating clear, measurable, and achievable goals with specific timelines and milestones.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-infine-teal hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="h-16 w-16 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">03. Coaching Sessions</h3>
              <p className="text-gray-600">
                Regular one-on-one sessions providing guidance, strategies, and accountability.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-infine-teal hover:shadow-lg animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="h-16 w-16 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">04. Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous support between sessions through email, messaging, and resource sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="RESOURCES"
            title="Coaching videos and resources"
            subtitle="Access our collection of valuable coaching videos to support your development journey."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <VideoCard 
              thumbnail="https://i.ytimg.com/vi/xwW6y_GwbWI/hqdefault.jpg"
              title="Work-Life Balance: Finding Harmony"
              duration="12:24"
              videoId="xwW6y_GwbWI"
            />
            <VideoCard 
              thumbnail="https://i.ytimg.com/vi/ZVYqB0uTKlE/hqdefault.jpg"
              title="Overcoming Procrastination"
              duration="7:18"
              videoId="ZVYqB0uTKlE"
            />
            <VideoCard 
              thumbnail="https://i.ytimg.com/vi/W1Ag4Qu6paE/hqdefault.jpg"
              title="Building Healthy Workplace Relationships"
              duration="14:56"
              videoId="W1Ag4Qu6paE"
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="FAQ"
            title="Frequently asked questions"
            align="center"
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What is the coaching process like?</h3>
              <p className="text-gray-600">
                Our coaching process begins with an initial consultation to understand your goals and challenges. We then create a personalized plan and schedule regular sessions to provide guidance, strategies, and accountability as you work towards your objectives.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How long does each program last?</h3>
              <p className="text-gray-600">
                Program duration varies based on your specific needs and goals. Our standard programs range from 3 to 6 months, with sessions typically held weekly or bi-weekly. We also offer ongoing coaching relationships for continuous support.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How are coaching sessions conducted?</h3>
              <p className="text-gray-600">
                Sessions can be conducted in-person or virtually via video conferencing, depending on your preference and location. Each session typically lasts 45-60 minutes and follows a structured yet flexible format tailored to your needs.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What results can I expect from coaching?</h3>
              <p className="text-gray-600">
                While results vary by individual, our clients typically report greater clarity, improved confidence, enhanced leadership skills, better work-life balance, and measurable progress toward their personal and professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your coaching journey?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Schedule a free consultation to discuss your goals and how we can help you achieve them.
          </p>
          <Button asChild size="lg" className="bg-white text-infine-teal hover:bg-gray-100">
            <Link to="/contact" className="flex items-center">
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
