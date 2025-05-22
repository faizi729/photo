import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { products } from '../data/productData';
import img from "../assets/logo4.png";

export default function WeddingInvitationForm() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    initials: '',
    coupleName: '',
    venue: '',
    date: '',
    time: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrevious = () => {
    window.location.href = '/services';
  };

  const handleSaveDraft = () => {
    console.log('Saved draft:', formData);
    window.alert('Draft saved successfully!');
  };

  const displayRazorpay = async () => {
    setLoading(true);

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      setLoading(false);
      alert('Razorpay SDK failed to load.');
      return;
    }

    const amount = product.price;

    const orderRes = await fetch('https://photo-n1fe.onrender.com/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount }),
    });

    const data = await orderRes.json();
    if (!data?.id) {
      setLoading(false);
      throw new Error(`❌ Failed to create order: ${JSON.stringify(data)}`);
    }

    const options = {
      key: 'rzp_test_WcGyN97AYAiHPE',
      amount: data.amount,
      currency: data.currency,
      name: 'Eye Imagination',
      description: 'Best E-invitation provider',
      image: img,
      order_id: data.id,
      handler: async function (response) {
        const verifyRes = await fetch('https://photo-n1fe.onrender.com/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const result = await verifyRes.json();

        if (result.status === 'paid') {
          const saveRes = await fetch('https://photo-n1fe.onrender.com/save-invitation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              price: product.price,
              templateId: product.id,
              timestamp: new Date().toISOString(),
            }),
          });

          const saveResult = await saveRes.json();

          if (saveResult.success) {
            
            window.location.href = '/payment-success';
          } else {
            console.log("⚠️ Payment successful, but failed to save data.");
          }
        } else {
          alert("❌ Payment verification failed.");
        }
      },
      notes: {
        address: 'Raipur'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    setLoading(false);
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  const Loader = () => (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
    <img
      src={img}
      alt="Loading"
      className="w-24 h-24 animate-pulse"
    />
  </div>
);

  return (
    <>
      {loading && <Loader />}

      <div className="mt-24 mb-20 px-4 sm:px-6 lg:px-8">
        {/* Progress bar */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {['Select video', 'Fill details', 'Complete payment', 'Get video'].map((step, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= 1 ? 'bg-red-400 text-white' : 'bg-gray-300'
                }`}
              >
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

              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="text"
                  value={`${product?.price || ''}`}
                  readOnly
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                />
              </div>

              <div className="flex flex-wrap justify-between mt-6 gap-2">
                <button
                  onClick={handleSaveDraft}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Save Draft
                </button>
                <button
                  onClick={handlePrevious}
                  className="flex-1 py-2 px-4 border border-pink-300 rounded-md text-sm font-medium text-pink-700 bg-white hover:bg-red-50"
                >
                  Previous
                </button>
                <button
                  onClick={displayRazorpay}
                  className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-700 transition duration-500 cursor-pointer"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
