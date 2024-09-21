import { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  function addBtn() {
    setCount(count + 1);
  }
  // ===================================
  function resetBtn() {
    setCount(0);
  }
  // ==================================
  function lessBtn() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="w-96 mx-auto shadow-lg border border-gray-600 p-3 mt-4 rounded-lg">
        {/* ==================================== */}
        <h1>Digital Tasbeeh</h1>
        <p className="text-5xl font-bold p-2 text-red-700 text-center">
          {count}
        </p>
        <br />
        {/* ==================================== */}
        <div className="flex justify-between items-center">
          <button
            onClick={addBtn}
            className="pb-2 px-3  flex items-center justify-center text-5xl bg-green-700 text-white rounded-lg"
            type="submit"
          >
            +
          </button>
          {/* ========================== */}
          <button
            onClick={resetBtn}
            className="pb-2 px-3  flex items-center justify-center text-5xl bg-green-700 text-white rounded-lg"
            type="submit"
          >
            ↺
          </button>
          {/* ========================== */}

          <button
            onClick={lessBtn}
            className="pb-2 px-3  flex items-center justify-center text-5xl bg-green-700 text-white rounded-lg"
            type="submit"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
