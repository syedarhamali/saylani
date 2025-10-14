import { useEffect, useState } from "react"

class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  }

 const signupUser=[{
  
    id:0,
    email:"affan@gmail.com",
    password:1234
  },
  {
    id:1,
    email:"ali@gmail.com",
    password:12345
  }
]
function Loginuser(){
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
 
function loginbtn(e){

e.preventDefault()
localStorage.setItem("users",JSON.stringify(signupUser))
let getData=JSON.parse(localStorage.getItem("users"))
let getUserSecurity=getData.find( (user) => user.email===email && user.password==password)
if(getUserSecurity){
  alert("✅ You have logged in successfully!");

}
else{
      alert("❌ Invalid email or password. Please create an account.");

}
}

return (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <form
      onSubmit={loginbtn}
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-black">Login</h2>

      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(event) => setEmail(event.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500"
      />

      <input
        type="password"
        placeholder="Enter your Password"
        onChange={(event) => setPassword(event.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500"
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
      >
        Login
      </button>
    </form>
  </div>
);

}
export default Loginuser
