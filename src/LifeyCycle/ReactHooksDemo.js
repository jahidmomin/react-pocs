import React, { useEffect, useState } from "react";

export function Login() {
  useEffect(() => {
    alert(" MOUNT LOGIN");

    return () => {
      alert(" UNMOUNT LOGIN");
    };
  });

  return <div>Login</div>;
}

export function Error() {
  useEffect(() => {
    alert(" MOUNT Error");

    return () => {
      alert(" UNMOUNT Error");
    };
  });

  return <div>Login</div>;
}

export default function ReactHooksDemo() {
  const [msg, setmsg] = useState();
  function handleLogin(e) {
    setmsg(<Login />);
  }
  function handleError(e) {
    setmsg(<Error />);
  }
  return (
    <div>
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleError}>ERROR</button>
      {msg}
    </div>
  );
}
