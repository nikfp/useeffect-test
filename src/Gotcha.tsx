import { useEffect, useRef } from "react";

const Gotcha = () => {
  const mounted = useRef(false)
  useEffect(() => {
    console.log("mounted");

    if(!mounted.current) {
      console.log("using the ref")
      mounted.current = true;
    }

    function cleanup() {
      console.log("Un-Mounted");
    }

    return cleanup;
  });

  return <h1>You added a gotcha</h1>;
};

export default Gotcha;
