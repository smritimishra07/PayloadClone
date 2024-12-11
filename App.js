import React, { useState } from 'react';

const MyApiPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={fetchData}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Get Data
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <div style={{ marginTop: '20px' }}>
          <h2>Response:</h2>
          <pre
            style={{
              background: '#f4f4f4',
              padding: '10px',
              borderRadius: '5px',
              textAlign: 'left',
              display: 'inline-block',
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MyApiPage;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleButtonClick = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // -----------------------------------------------------------
//   useEffect(() => {
//     // Redirect to the Payload CMS landing page on site load
//     if (window.location.pathname === "/") {
//       window.location.href = "http://localhost:8000";
//     }
//   }, []);
//   // -----------------------------------------------------------

//   return (
//     <Router>
//       <Routes>
//         {/* Redirect from the root to Payload CMS */}
//         <Route
//           path="/"
//           element={
//             (() => {
//               window.location.href = "http://localhost:8000";
//               return null; // Render nothing during redirect
//             })()
//           }
//         />
        
//         {/* Redirect to Payload CMS Admin page */}
//         <Route
//           path="/admin/*"
//           element={
//             (() => {
//               window.location.href = "http://localhost:8000/admin";
//               return null; // Render nothing during redirect
//             })()
//           }
//         />
        
//         {/* API Request Example Route */}
//         <Route
//           path="/api-request"
//           element={
//             <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
//               <h1>API Request Example</h1>
//               <button
//                 onClick={handleButtonClick}
//                 style={{
//                   padding: "10px 20px",
//                   fontSize: "16px",
//                   cursor: "pointer",
//                   backgroundColor: "#007bff",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Fetch API Data
//               </button>
//               {loading && <p>Loading...</p>}
//               {error && <p style={{ color: "red" }}>Error: {error}</p>}
//               {data && (
//                 <div style={{ marginTop: "20px" }}>
//                   <h2>Response:</h2>
//                   <pre
//                     style={{
//                       background: "#f4f4f4",
//                       padding: "10px",
//                       borderRadius: "5px",
//                       textAlign: "left",
//                       display: "inline-block",
//                     }}
//                   >
//                     {JSON.stringify(data, null, 2)}
//                   </pre>
//                 </div>
//               )}
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

