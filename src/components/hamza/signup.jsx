import "./signup.css";
import { useEffect, useState } from "react";

function Signup() {
  class userReg {
    id;
    fullName;
    email;
    password;
    constructor(id, fullName, email, password) {
      (this.id = id),
        (this.fullName = fullName),
        (this.email = email),
        (this.password = password);
    }
  }
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allusers, setAllUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  function submit(e) {
    e.preventDefault();
    const userExists = allusers.find((user) => user.email === email);
    if (userExists) {
      alert("user already exists");
      console.log(userExists);
      return;
    }
    let id = allusers.length + 1;
    const newUser = new userReg(id, fullName, email, password);
    let tempAllUsers = [...allusers];
    tempAllUsers.push(newUser);
    setAllUsers(tempAllUsers);
    setFullName("");
    setEmail("");
    setPassword("");
  }
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(allusers));
  }, [allusers]);
  return (
    <>
      <div className="signup-form flex flex-col items-center justify-center">
        <h2>SIGNUP FORM</h2>
        <form action="" className="flex flex-col items-start" onSubmit={submit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="text-end">
            forgot password
          </a>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        <p>
          Already registered! <a href="#">Login Here</a>
        </p>
      </div>
    </>
  );
}

export default Signup;
