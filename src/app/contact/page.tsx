import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contact Me | Akira Portfolio',
  description: 'Get in touch with me for work inquiries, collaborations, or just to say hello.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'akira_0809@icloud.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:akira_0809@icloud.com',
    },
    {
      name: 'X',
      value: '@Akira08092',
      icon: (
        <img
          src="/images/x-logo.png"
          alt="X Logo"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      url: 'https://x.com/Akira08092',
    },
    {
      name: 'LinkedIn',
      value: 'Ikeuchi Akira',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/akira-ikeuchi-6a9b12361/',
    },
    {
      name: 'GitHub',
      value: 'Akira0809',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/Akira0809',
    },
  ];

  return (
    <>
      <Section title="Contact Me">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always interested in hearing about new projects, opportunities, or just connecting with fellow developers and designers.
            Feel free to reach out through any of the channels below.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => (
              <Link
                key={method.name}
                href={method.url}
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="mr-4 text-blue-600 dark:text-blue-400">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{method.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Prefer to send a direct message? Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      <Section title="Availability" className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-6 py-3 mb-6 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium">
            Currently Available for Projects
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Looking for a developer for your next project?</h3>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm currently available for freelance work and open to discussing new opportunities.
            Whether you need a complete website, a specific feature, or consultation on your project,
            I'd be happy to help bring your vision to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="mailto:hello@akira-portfolio.com" 
              className="px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Email Me
            </Link>
            <Link 
              href="/works" 
              className="px-6 py-3 bg-transparent border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:bg-opacity-10 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
