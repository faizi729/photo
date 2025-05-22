import img from "../assets/success.png"
export default function PaymentSuccess() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <img src={img} alt="" className="w-fit"/>
        
      </div>
    </div>
  );
}
