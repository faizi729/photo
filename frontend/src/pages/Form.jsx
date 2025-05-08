import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { products } from '../data/productData';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function WeddingInvitationForm() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    initials: '',
    coupleName: '',
    venue: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePrevious = () => {
    window.location.href = "/services";
  };

  const handleSaveDraft = () => {
    console.log('Saved draft:', formData);
    window.alert('Draft saved successfully!');
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    const data = await fetch('http://localhost:1769/razorpay', {
      method: 'POST'
    }).then((t) => t.json());

    const options = {
      key: 'rzp_test_0S8LAzmVxIdvYA',
      amount: data.amount,
      currency: data.currency,
      name: 'Acme Corp',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: data.id,
      callback_url: 'http://localhost:1769/verify',
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="mt-24 mb-20 px-4 sm:px-6 lg:px-8">
      {/* Progress bar */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {['Select video', 'Fill details', 'Complete payment', 'Get video'].map((step, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= 1 ? 'bg-red-400 text-white' : 'bg-gray-300'}`}>
              {index < 2 ? '✓' : ''}
            </div>
            <span className="text-xs text-center mt-1">{step}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row lg:max-w-7xl lg:mx-auto bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Left: Video */}
        <div className="lg:w-1/2 w-full p-4 flex justify-center items-center bg-gray-50">
          {product ? (
            <video
              src={product.video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl w-[300px] h-auto shadow"
            />
          ) : (
            <p>Loading video...</p>
          )}
        </div>

        {/* Right: Form */}
        <div className="lg:w-1/2 w-full p-6">
          <div className="space-y-4">
            {/* Input Fields */}
            {[{ label: 'Initials', name: 'initials' }, { label: 'Couple Name', name: 'coupleName' }, { label: 'Venue', name: 'venue' }].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            ))}

            {/* Date and Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10"
                />
                <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <div className="relative">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10"
                />
                <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-between mt-6 gap-2">
              <button
                onClick={handleSaveDraft}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Save Draft
              </button>
              <button
                onClick={handlePrevious}
                className="flex-1 py-2 px-4 border border-red-300 rounded-md text-sm font-medium text-red-700 bg-white hover:bg-red-50"
              >
                Previous
              </button>
              <button
                onClick={displayRazorpay}
                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
