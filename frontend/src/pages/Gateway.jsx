function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }
  
  function Gateway() {
  
    async function displayRazorpay() {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
  
      if (!res) {
        alert('Razorpay failed to load!');
        return;
      }
  
      const data = await fetch('http://localhost:1769/razorpay', {
        method: 'POST',
      }).then((t) => t.json());
  
      const options = {
        key: 'rzp_test_0S8LAzmVxIdvYA',
        amount: data.amount,
        currency: data.currency,
        name: 'Acme Corp',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: data.id, // dynamic ID from server
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
    }
  
    return (
      <div className="App">
        <header className="App-header">
          {/* Replace with actual logo or remove */}
          {/* <img src="your-logo.png" className="App-logo" alt="logo" /> */}
          <button onClick={displayRazorpay}>
            Pay now
          </button>
        </header>
      </div>
    );
  }
  
  export default Gateway;
  