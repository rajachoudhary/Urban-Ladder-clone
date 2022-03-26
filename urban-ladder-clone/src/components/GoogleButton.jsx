// import React, { useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export const GoogleButton = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   useEffect(() => {
//     console.log(location.pathname);
//     if (location.pathname.startsWith("/code=")) {
//       localStorage.setItem("accesstoken", location.pathname.split("=")[1]);
//       navigate("/");
//     }
//   }, []);
//   return (
//     <div>
//       {/* <button */}
//         onClick={() =>
//           (window.location.href = "http://localhost:8000/auth/google")
//         }
//       >
//         Google
//       </button>
//     </div>
//   );
// };
