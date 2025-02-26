import "./PaymentStatus.css";

const PaymentStatus = () => {
  return (
    <div className="payment-container">
      <a href="/" className="back-to-home">&larr; BACK TO HOME</a>
      <div className="payment-box">
        <h2>CONGRATULATIONS</h2>
        <div className="success-icon">&#10004;</div>
        <h3>Payment Successful!</h3>
        <p className="order-placed">Order Placed</p>
        <div className="amount-details">
          <p>Total Amount <span>&#8377; 730.00</span></p>
          <hr />
          <p><strong>Paid Amount :</strong> <span className="paid-amount">&#8377; 730.00</span></p>
        </div>
        <button className="home-button">Go to Home</button>
      </div>
    </div>
  );
};

export default PaymentStatus;
