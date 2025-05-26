import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_33v7tzf',
      'template_x8nh63d',
      formData,
      'Y3k0EAVssIsUhESPs'
    )
      .then((result) => {
        setStatusMessage({ text: 'Message sent successfully!', isError: false });
        console.log('EmailJS result:', result.text);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatusMessage({ text: 'Something went wrong. Please try again.', isError: true });
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mt-20 lg:mt-56 mb-20 bg-white rounded-lg shadow-lg p-6">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">Feel free to contact us anytime. We will get back to you as soon as we can.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-purple-700"
          ></textarea>

          {/* Feedback Message */}
          {statusMessage.text && (
            <p className={`text-sm font-medium ${statusMessage.isError ? 'text-red-600' : 'text-green-600'}`}>
              {statusMessage.text}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-700 cursor-pointer text-white p-2 rounded-full hover:bg-purple-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="md:w-1/2 p-4 bg-gray-800 text-white rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
        <p className="flex items-center mb-2"><span className="mr-2">📞</span> +91 854321452</p>
        <p className="flex items-center mb-2"><span className="mr-2">📧</span> info@photo.com</p>
        <p className="flex items-center"><span className="mr-2">🌐</span> 1000+ photography partners and 65+ Service cities across India, USA, Canada & UAE</p>
      </div>
    </div>
  );
};

export default Contact;
