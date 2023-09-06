// import { Link, useNavigate } from "react-router-dom";
// import "./SignUpStyles.css";
// import axios from "axios";
// import {toast} from 'react-hot-toast'


// import { useState } from "react";

// const SignUp = () => {

//   const navigate = useNavigate()

//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const registerUser = async (e) => {
//     e.preventDefault()
//     const {name, email, password} = data
//     try {
//       const {data} = await axios.post('/register', {
//         name, email, password
//       })
//       if(data.error){
//         toast.error(data.error)
//       }else {
//         setData({})
//         toast.success('Login Succesful. Welcome!')
//         navigate('/login')
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   return (
//     <div className="signup_container">
//       <div className="signup_form_container">
//         <div className="styles_left">
//           <h1>Welcome Back</h1>
//           <Link to="/login">
//             <button type="button" className="white_btn">
//               Sign In
//             </button>
//           </Link>
//         </div>
//         <div className="styles_right">
//           <form className="form_container" onSubmit={registerUser}>
//             <h1>Create Account</h1>
//             <input
//               className="styles_input"
//               type="text"
//               placeholder="Name"
//              value={data.name}
//              onChange={(e) => setData({...data, name: e.target.value})}
//               required
//             />

         

//             <input
//               className="styles_input"
//               type="email"
//               placeholder="Email"
//               value={data.email}
//              onChange={(e) => setData({...data, email: e.target.value})}
              
//               required
//             />

//             <input
//               className="styles_input"
//               type="password"
//               placeholder="Password"
//               value={data.password}
//              onChange={(e) => setData({...data,password: e.target.value})}
             
//               required
//             />
           
//             <button type="submit" className="styles_green_btn" >
//                 Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
