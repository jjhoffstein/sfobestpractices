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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null); // State for email specific error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    // Clear specific errors when user starts typing in the field
    if (name === 'email') setEmailError(null);
    // Could add similar for other fields if needed
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset general status
    setErrorMessage(null); // Clear general error message
    setEmailError(null); // Clear specific email error

    // Basic client-side validation (checking for empty fields, although HTML required helps)
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus('error');
      setErrorMessage('Please fill in all required fields.');
      // We won't return here immediately, allow email format check below
      setIsSubmitting(false); // Re-enable button quickly if basic check fails
      // return; // Removed immediate return
    }
    
    // Basic email format validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(formData.email)) {
       setSubmissionStatus('error'); // Set general error status
       setEmailError('Please enter a valid email address.'); // Set specific email error
       trackFormInteraction('contact_form', 'error', { message: 'Client-side validation failed: invalid email format' });
       setIsSubmitting(false); // Re-enable button
       return; // Stop submission if email is invalid
    }

    // If we reach here, basic validation passed, clear any previous general error related to missing fields
    if (submissionStatus !== 'error') setErrorMessage(null); // Clear general error if it was just missing fields

    // Track form submission attempt
    trackFormInteraction('contact_form', 'attempt');

    // *** IMPORTANT ***
    // Replace with your actual Formspree endpoint URL obtained from Formspree dashboard.
    // Using the URL from the previous screenshot: https://formspree.io/f/mzzgzeae
    const formspreeEndpoint = 'https://formspree.io/f/mzzgzeae'; // Direct Formspree endpoint

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Use application/json as preferred by Formspree for fetch
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData), // Send data as JSON
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
        trackFormInteraction('contact_form', 'complete'); // Track successful submission
      } else {
        setSubmissionStatus('error');
        // Attempt to parse Formspree error response for more details if available
        try {
          const errorData = await response.json();
          console.error('Formspree submission failed:', response.status, errorData);
           // Use error details from Formspree if available
           // Attempt to map Formspree errors, handling cases where errors might not be in the expected format
           const msg = Array.isArray(errorData?.errors)
             ? errorData.errors.map((err: { message?: string }) => err.message || 'Unknown error detail').join(', ')
             : errorData?.message || 'Unknown error';
           setErrorMessage(`Form submission failed: ${msg}`);
           trackFormInteraction('contact_form', 'error', { status: response.status, message: msg });
        } catch (error) { // Changed jsonError to error and used it to log
           // Handle case where Formspree doesn't return JSON error
           console.error('Formspree submission failed with non-JSON response or JSON parse error:', response.status, error);
           setErrorMessage('Form submission failed: Received an unexpected response from the server.');
           trackFormInteraction('contact_form', 'error', { status: response.status, message: 'Non-JSON error response from Formspree' });
        }
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error sending form data to Formspree:', error);
      const msg = (error as Error).message || 'Network error';
      setErrorMessage(`Form submission failed: ${msg}`);
      trackFormInteraction('contact_form', 'error', { message: msg }); // Track network error
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

          {/* Honeypot field (for spam prevention) - Hidden from users but bots might fill it */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="new-password" />

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:<span className="text-red-500">*</span></label>
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
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:<span className="text-red-500">*</span></label>
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
            {emailError && <p className="text-red-500 text-xs italic mt-1">{emailError}</p>} {/* Display email specific error */}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:<span className="text-red-500">*</span></label>
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

          {submissionStatus === 'error' && errorMessage && (
            <p className="text-red-500 text-sm mt-4 text-center" aria-live="polite">{errorMessage}</p>
          )}

        </form>
        {/* Required fields indicator */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Fields marked with <span className="text-red-500">*</span> are required.
        </p>
      </div>
    </div>
  );
};

export default ContactPage; 