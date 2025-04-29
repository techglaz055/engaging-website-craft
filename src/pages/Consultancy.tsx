
import { useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const Consultancy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1cbaab_0%,_transparent_60%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-white">
              <SectionTitle 
                accent="CONSULTANCY"
                title="Strategic business consulting for growth"
              />
              <p className="text-gray-300 mb-8">
                Our consultancy services provide expert guidance to help your organization navigate challenges, identify opportunities, and achieve sustainable growth. We work closely with you to develop tailored strategies that drive meaningful results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-3 mt-1" />
                  <div>
                    <span className="font-medium">Data-Driven Insights</span>
                    <p className="text-gray-400">Make informed decisions with comprehensive analysis and strategic recommendations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-3 mt-1" />
                  <div>
                    <span className="font-medium">Customized Approach</span>
                    <p className="text-gray-400">Tailored solutions designed specifically for your organization's unique challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-infine-teal mr-3 mt-1" />
                  <div>
                    <span className="font-medium">Implementation Support</span>
                    <p className="text-gray-400">We don't just provide recommendations—we help you put them into action.</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="bg-gradient-primary hover:bg-infine-green transition-all duration-300">
                <Link to="/contact" className="flex items-center">
                  Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative mx-auto max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Business consulting" 
                  className="rounded-lg shadow-xl animate-fade-left"
                />
                <div className="absolute -top-4 -right-4 bg-infine-teal text-white p-4 rounded-lg z-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <div className="text-lg font-bold">15+ years</div>
                  <div className="text-lg font-bold">consulting excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="OUR SERVICES"
            title="Comprehensive consultancy solutions"
            subtitle="We offer a range of specialized consulting services designed to address your most pressing business challenges."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              title="Strategic Planning"
              description="Develop clear, actionable strategies to achieve your business goals and secure long-term success."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Organizational Development"
              description="Optimize your organizational structure, culture, and processes to enhance performance and employee engagement."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Financial Analysis"
              description="Comprehensive financial assessments and strategies to improve profitability, manage cash flow, and optimize investments."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
              title="Market Research"
              description="Data-driven insights into market trends, customer preferences, and competitive landscape to inform your business decisions."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>}
              title="Process Optimization"
              description="Streamline operations, eliminate inefficiencies, and implement best practices to enhance productivity and reduce costs."
            />
            <ServiceCard 
              icon={<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Risk Management"
              description="Identify potential risks, develop mitigation strategies, and establish robust frameworks to protect your business."
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="OUR APPROACH"
            title="How we deliver results"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="h-12 w-12 bg-infine-teal text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600 mb-4">
                We conduct a thorough assessment of your current situation, challenges, goals, and opportunities through interviews, data analysis, and market research.
              </p>
              <div className="hidden md:block absolute top-6 right-0 w-3/4 h-1 bg-gray-300"></div>
            </div>

            <div className="relative">
              <div className="h-12 w-12 bg-infine-teal text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600 mb-4">
                Based on our findings, we develop a customized strategy with clear actionable steps, timelines, and key performance indicators.
              </p>
              <div className="hidden md:block absolute top-6 right-0 w-3/4 h-1 bg-gray-300"></div>
            </div>

            <div className="relative">
              <div className="h-12 w-12 bg-infine-teal text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600 mb-4">
                We work alongside your team to put the strategy into action, providing guidance, resources, and support throughout the process.
              </p>
              <div className="hidden md:block absolute top-6 right-0 w-3/4 h-1 bg-gray-300"></div>
            </div>

            <div>
              <div className="h-12 w-12 bg-infine-teal text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Evaluation</h3>
              <p className="text-gray-600 mb-4">
                We continually monitor progress, measure results against key metrics, and make necessary adjustments to ensure optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="INDUSTRIES"
            title="Sectors we serve"
            subtitle="Our consultancy expertise spans across multiple industries, providing specialized insights for each sector."
            align="center"
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <svg className="h-12 w-12 text-infine-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="font-semibold">Technology</h3>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <svg className="h-12 w-12 text-infine-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold">Finance</h3>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <svg className="h-12 w-12 text-infine-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className="font-semibold">Retail</h3>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <svg className="h-12 w-12 text-infine-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="font-semibold">Healthcare</h3>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <svg className="h-12 w-12 text-infine-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <h3 className="font-semibold">Education</h3>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <svg className="h-12 w-12 text-infine-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="font-semibold">Manufacturing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="CASE STUDIES"
            title="Success stories"
            subtitle="See how our consultancy services have helped organizations achieve remarkable results."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-primary flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tech Startup Growth Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Helped a SaaS startup increase revenue by 150% within 12 months through strategic repositioning, pricing optimization, and enhanced customer acquisition strategies.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-infine-teal font-semibold">150% Growth</div>
                  <Button asChild variant="outline" className="border-infine-teal text-infine-teal hover:bg-infine-teal hover:text-white">
                    <a href="#">Read Case Study</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-primary flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Financial Services Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Guided a mid-sized financial services firm through digital transformation, resulting in 35% reduced operational costs and improved customer satisfaction scores.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-infine-teal font-semibold">35% Cost Reduction</div>
                  <Button asChild variant="outline" className="border-infine-teal text-infine-teal hover:bg-infine-teal hover:text-white">
                    <a href="#">Read Case Study</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-primary flex items-center justify-center">
                <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Healthcare Efficiency Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Implemented process improvements for a healthcare network, reducing patient wait times by 40% and increasing staff productivity by 25%.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-infine-teal font-semibold">40% Time Reduction</div>
                  <Button asChild variant="outline" className="border-infine-teal text-infine-teal hover:bg-infine-teal hover:text-white">
                    <a href="#">Read Case Study</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Schedule a consultation with our expert team to discuss your challenges and explore how our consultancy services can help you achieve your business goals.
          </p>
          <Button asChild size="lg" className="bg-white text-infine-teal hover:bg-gray-100">
            <Link to="/contact" className="flex items-center">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
