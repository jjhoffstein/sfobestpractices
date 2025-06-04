"use client";

import React, { useState } from 'react';
import { trackFormInteraction } from '@/utils/analytics';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStarted, setFormStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset status on new submission attempt

    // Track form submission attempt
    trackFormInteraction('contact_form', 'attempt');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
        trackFormInteraction('contact_form', 'complete'); // Track successful submission
      } else {
        setSubmissionStatus('error');
        const errorData = await response.json();
        console.error('Form submission failed:', response.status, errorData);
        trackFormInteraction('contact_form', 'error', { status: response.status, message: errorData.message || 'Unknown error' }); // Track error
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error sending form data:', error);
      trackFormInteraction('contact_form', 'error', { message: (error as Error).message || 'Network error' }); // Track error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormStart = () => {
    if (!formStarted) {
      trackFormInteraction('contact_form', 'start');
      setFormStarted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-6 sm:space-y-8 lg:space-y-12">
      <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent text-center">
        Contact Us
      </h1>

      {/* Explanation text */}
      <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 max-w-3xl mx-auto text-center leading-relaxed">
        Interested in single-family offices? This site is a personal project.<br />
        Use this form to connect or share thoughts with a fellow enthusiast.
      </p>

      {/* Added a comment to trigger re-deployment */}

      <div className="bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFormStart}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFormStart}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFormStart}
              rows={6}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {submissionStatus === 'success' && (
            <p className="text-green-500 text-sm mt-4 text-center">Thank you for your message! We will get back to you shortly.</p>
          )}

          {submissionStatus === 'error' && (
            <p className="text-red-500 text-sm mt-4 text-center">There was an error sending your message. Please try again.</p>
          )}

        </form>
      </div>
    </div>
  );
};

export default ContactPage; 