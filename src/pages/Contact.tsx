
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="CONTACT US"
            title="Get in touch with our team"
            subtitle="We'd love to hear from you. Contact us with any questions about our coaching and consultancy services."
            align="center"
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <div className="h-12 w-12 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-infine-teal" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <div className="h-12 w-12 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-infine-teal" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@infine.com</p>
              <p className="text-gray-600">info@infine.com</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <div className="h-12 w-12 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-infine-teal" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Coaching Street</p>
              <p className="text-gray-600">San Francisco, CA 94123</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg text-center hover:border-infine-teal hover:shadow-md transition-all">
              <div className="h-12 w-12 mx-auto mb-4 bg-infine-teal/10 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-infine-teal" />
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-right">
              <SectionTitle 
                accent="GET IN TOUCH"
                title="Ready to start your journey?"
              />
              <p className="text-gray-600 mb-6">
                Whether you're looking for personal coaching, business consultancy, or have questions about our programs, our team is here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-infine-teal text-white rounded-full flex items-center justify-center font-medium text-sm mr-3 mt-1">1</div>
                    <p className="text-gray-600">We'll review your message and connect you with the right team member</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-infine-teal text-white rounded-full flex items-center justify-center font-medium text-sm mr-3 mt-1">2</div>
                    <p className="text-gray-600">Schedule a free consultation to discuss your needs and goals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-infine-teal text-white rounded-full flex items-center justify-center font-medium text-sm mr-3 mt-1">3</div>
                    <p className="text-gray-600">Receive a customized proposal tailored to your specific situation</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-left">
              <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948266!3d37.75781499229772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1619749562774!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            accent="FAQ"
            title="Frequently asked questions"
            subtitle="Find answers to common questions about our services."
            align="center"
          />

          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our office directly.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">
                Yes, we offer both in-person and virtual consultations via video conferencing to accommodate clients from any location.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What information should I prepare for the initial consultation?</h3>
              <p className="text-gray-600">
                To make the most of your initial consultation, consider your primary goals, current challenges, and what you hope to achieve through coaching or consultancy. Any relevant background information about your situation is also helpful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Subscribe to our newsletter</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Stay updated with our latest insights, events, and resources for personal and professional growth.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-infine-teal"
              />
              <Button className="bg-infine-darkblue hover:bg-black text-white px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
