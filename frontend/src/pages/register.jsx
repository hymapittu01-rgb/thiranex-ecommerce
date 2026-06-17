function Register() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Enter Name"
        style={{
          padding: "10px",
          width: "250px"
        }}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        style={{
          padding: "10px",
          width: "250px"
        }}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        style={{
          padding: "10px",
          width: "250px"
        }}
      />

      <br /><br />

      <button
        style={{
          padding: "10px 20px"
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;