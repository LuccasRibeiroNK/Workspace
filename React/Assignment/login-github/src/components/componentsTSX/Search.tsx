// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination";

//The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI. The app will consist of two major components - one search component and one results component.
// - Text input with 'Login' type=text for entering a String value
// - 'Submit' Button for initiating a request to `https://api.github.com/search/users?q={login} in:login`, where {login} is the input value
// - Results should be displayed in a table with the following columns: avatar_url, login, type
// - Results should not be more than 9
// - Use Pagination, with 9 items displayed Per_Page

//typescript
// export type User = {
//   login: string;
//   avatar_url: string;
//   type: string;
// };

// export default function Search() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(9);
//   const [search, setSearch] = useState("");
//   const [login, setLogin] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setErrorMessage("");
//       try {
//         const response = await fetch(
//           `https://api.github.com/search/users?q=${login}&in:login&per_page=${usersPerPage}&page=${currentPage}`
//         );
//         const result = await response.json();
//         setUsers(result.items);
//       } catch (error) {
//         setErrorMessage("Something went wrong");
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [currentPage, login, usersPerPage]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <h1 className="text-center">Github Users</h1>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search Users"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by login"
//               value={login}
//               onChange={(e) => setLogin(e.target.value)}
//             />
//           </div>
//           <button
//             className="btn btn-primary btn-block"
//             onClick={() => setCurrentPage(1)}
//           >
//             Search
//           </button>
//           {loading && <div>Loading...</div>}
//           {errorMessage && <div>{errorMessage}</div>}
//           {currentUsers.map((user) => (
//             <div key={user.login} className="card card-body mb-3">
//               <div className="row">
//                 <div className="col-md-3">
//                   <img
//                     className="img-fluid"
//                     src={user.avatar_url}
//                     alt={user.login}
//                   />
//                 </div>
//                 <div className="col-md-9">
//                   <h3>{user.login}</h3>
//                   <p>Type: {user.type}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <Pagination
//             usersPerPage={usersPerPage}
//             totalUsers={users.length}
//             paginate={paginate}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
