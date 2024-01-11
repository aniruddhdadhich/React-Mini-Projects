import { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  //length
  const [length, setLength] = useState(8);

  // includes numbers
  const [hasNum, setHasNum] = useState(false);

  //includes characters
  const [hasChar, setHasChar] = useState(false);
  const handleChars = () => {
    setHasChar(!hasChar);
  };

  // password
  const [password, setPassword] = useState("");

  // show popup
  const [showPopup, setShowPopup] = useState(false);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (hasNum) str += "0123465789";
    if (hasChar) str += "~!@#$%^&*_/?";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, hasChar, hasNum]);

  // ref
  const passRef = useRef(null);

  const copyToClipboard = () => {
    let val = passRef.current.value;
    console.log(val);
    window.navigator.clipboard.writeText(val); // window obj available only on the client side
    setShowPopup(true);
  };

  useEffect(() => {
    passGen();
  }, [length, hasChar, hasNum]);

  setTimeout(()=>{
    setShowPopup(false)
  },2000)

  return (
    <>
      <div className="main-body">
        <h1 className="title">Password Generator</h1>
        <div className="container">
          <div className="textfield">
            <input
              type="text"
              placeholder="Password Generator"
              className="input"
              value={password}
              readOnly
              ref={passRef}
            />
            <button onClick={copyToClipboard}>COPY</button>
          </div>
          <div className="controls">
            <div>
              <input
                type="range"
                id="range"
                name="range"
                min={8}
                max={16}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="range">Length({length})</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="numbers"
                name="numbers"
                checked={hasNum}
                onChange={() => setHasNum((prev) => !prev)} // One kind of implementation
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="char"
                name="char"
                checked={hasChar}
                onChange={handleChars} // Different implementation than nums - Just another way
              />
              <label htmlFor="char">Characters</label>
            </div>
          </div>
        </div>

        {/* alert */}
        {showPopup && <div className="msg">Copied to Clipboard</div>}
      </div>
    </>
  );
}

export default App;
