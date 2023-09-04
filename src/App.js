import React, {useState} from "react"

function App() {
   const [btcPrice, setBtcPrice] = useState(25000);
   const [dogePrice, setDogePrice] = useState(0.75);
   const [ripplePrice, setRipplePrice] = useState(1.5);
   const [btcQuantity, setBtcQuantity] = useState("");
   const [dogeQuantity, setDogeQuantity] = useState("");
   const [rippleQuantity, setRippleQuantity] = useState("");
   const [btcTotal, setBtcTotal] = useState(0);
   const [dogeTotal, setDogeTotal] = useState(0);
   const [rippleTotal, setRippleTotal] = useState(0);

   const calculateTotal = () => {
     setBtcTotal(btcPrice * btcQuantity);
     setDogeTotal(dogePrice * dogeQuantity);
     setRippleTotal(ripplePrice * rippleQuantity);
   };

  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
          <h2>BTC</h2>
          <p>${btcPrice}</p>
          <input
            type="number"
            placeholder="QTY"
            value={btcQuantity}
            onChange={(e) => setBtcQuantity(e.target.value)}
          />
          <button onClick={calculateTotal}>Add</button>
        </div>

        <div>
          <h2>DOGE</h2>
          <p>${dogePrice}</p>
          <input
            type="number"
            placeholder="QTY"
            value={dogeQuantity}
            onChange={(e) => setDogeQuantity(e.target.value)}
          />
          <button onClick={calculateTotal}>Add</button>
        </div>
        <div>
          <h2>Ripple</h2>
          <p>${ripplePrice}</p>
          <input
            type="number"
            placeholder="QTY"
            value={rippleQuantity}
            onChange={(e) => setRippleQuantity(e.target.value)}
          />
          <button onClick={calculateTotal}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
