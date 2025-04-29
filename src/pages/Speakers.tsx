
import { useEffect } from 'react';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';

interface SpeakerCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  topics: string[];
}

const SpeakerCard = ({ image, name, role, bio, topics }: SpeakerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-infine-teal font-medium mb-3">{role}</p>
          <p className="text-gray-600 mb-4">{bio}</p>
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Speaking Topics</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.map((topic, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>
          <Button asChild className="bg-gradient-primary hover:bg-infine-green">
            <Link to="/contact">Book Speaker</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard = ({ image, title, date, location, description }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-infine-teal/90 text-white py-1 px-3 rounded-full flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{date}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-3">{location}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button asChild className="w-full bg-gradient-primary hover:bg-infine-green">
          <Link to="/contact">
            Register Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Speakers = () => {
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
          <div className="text-center">
            <SectionTitle 
              accent="SPEAKERS"
              title="Expert speakers for your next event"
              align="center"
            />
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Our speakers bring years of expertise in business coaching, leadership, personal development, and more. Book a speaker for your next event and inspire your audience with actionable insights and powerful stories.
            </p>
            <Button asChild className="bg-gradient-primary hover:bg-infine-green">
              <a href="#speakers" className="flex items-center">
                See Our Speakers <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Speakers List */}
      <section id="speakers" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="MEET OUR SPEAKERS"
            title="Inspiring voices for your events"
            subtitle="Our speakers are experienced professionals who deliver engaging and impactful presentations on a variety of topics."
            align="center"
          />

          <div className="mt-12 space-y-10">
            <SpeakerCard 
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              name="Jonathan Fisher"
              role="Business Strategist & Leadership Expert"
              bio="With over 20 years of experience in business consulting and leadership development, Jonathan inspires audiences with his practical insights and transformative strategies."
              topics={["Leadership Excellence", "Business Growth", "Strategic Planning", "Team Management"]}
            />

            <SpeakerCard 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              name="Sarah Johnson"
              role="Executive Coach & Organizational Psychologist"
              bio="Sarah combines her background in psychology with extensive corporate experience to deliver powerful talks on workplace dynamics, leadership, and personal effectiveness."
              topics={["Executive Presence", "Emotional Intelligence", "Women in Leadership", "Work-Life Integration"]}
            />

            <SpeakerCard 
              image="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              name="Michael Torres"
              role="Career Development Specialist"
              bio="Michael's dynamic speaking style and practical career advancement strategies have helped thousands of professionals navigate career transitions and achieve their professional goals."
              topics={["Career Advancement", "Personal Branding", "Networking Skills", "Future of Work"]}
            />

            <SpeakerCard 
              image="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              name="Emma Chen"
              role="Work-Life Balance Coach & Wellness Expert"
              bio="Emma's engaging presentations focus on achieving balance, managing stress, and maintaining wellness in our fast-paced modern world."
              topics={["Stress Management", "Work-Life Balance", "Mindfulness at Work", "Wellness for Productivity"]}
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-infine-teal text-infine-teal hover:bg-infine-teal hover:text-white">
              <Link to="/contact">
                Inquire About Speaker Availability
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="TESTIMONIALS"
            title="What event organizers say"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-6">
                "Jonathan's presentation was the highlight of our annual conference. His insights on leadership were both practical and inspiring, leading to significant changes in our management approach."
              </p>
              <div>
                <p className="font-semibold">Robert Miller</p>
                <p className="text-sm text-gray-500">Event Director, Tech Innovation Summit</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-6">
                "Sarah's workshop on emotional intelligence was transformative for our leadership team. Her engaging style and deep expertise made complex concepts accessible and actionable."
              </p>
              <div>
                <p className="font-semibold">Jennifer Wong</p>
                <p className="text-sm text-gray-500">HR Director, Global Solutions Inc.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4 text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 italic mb-6">
                "Michael's keynote on career development was exactly what our young professionals needed. His practical advice and inspiring stories resonated with everyone in attendance."
              </p>
              <div>
                <p className="font-semibold">David Chen</p>
                <p className="text-sm text-gray-500">President, Young Professionals Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="EVENTS"
            title="Where to see our speakers"
            subtitle="Join these upcoming events featuring our expert speakers."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard 
              image="https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              title="Leadership Summit 2025"
              date="June 15-17, 2025"
              location="Grand Conference Center, New York"
              description="A three-day immersive experience focused on developing next-generation leadership skills for today's challenging business environment."
            />
            
            <EventCard 
              image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              title="Work-Life Balance Workshop"
              date="July 22, 2025"
              location="Virtual Event"
              description="Join Emma Chen for a transformative workshop on achieving harmony between your professional responsibilities and personal life."
            />
            
            <EventCard 
              image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              title="Business Growth Conference"
              date="September 8-9, 2025"
              location="Tech Hub, San Francisco"
              description="Learn strategies for scaling your business and navigating market challenges with insights from top business coaches and leaders."
            />
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="TOPICS"
            title="Popular speaking topics"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-infine-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership Excellence</h3>
              <p className="text-gray-600">
                Developing essential leadership skills, emotional intelligence, and the ability to inspire and guide teams through challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-infine-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Growth Strategies</h3>
              <p className="text-gray-600">
                Actionable frameworks for scaling businesses, identifying opportunities, and navigating market challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-infine-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Advancement</h3>
              <p className="text-gray-600">
                Strategic approaches to career planning, personal branding, and navigating professional transitions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-infine-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">
                Practical techniques for managing stress, setting boundaries, and creating harmony between professional and personal life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-infine-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Building</h3>
              <p className="text-gray-600">
                Strategies for developing high-performing teams, improving communication, and fostering a positive culture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-infine-teal/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-infine-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Peak Performance</h3>
              <p className="text-gray-600">
                Techniques for achieving optimal performance, goal setting, and maintaining focus and motivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to book a speaker for your event?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to check speaker availability, discuss your event needs, and get a customized proposal.
          </p>
          <Button asChild size="lg" className="bg-white text-infine-teal hover:bg-gray-100">
            <Link to="/contact" className="flex items-center">
              Book a Speaker <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
