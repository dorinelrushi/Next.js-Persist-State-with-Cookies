import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "../../lib/parseCookies";

const Home = ({ initialRememberValue = true }) => {
  const [rememberMe, setRememberMe] = useState(() =>
    JSON.parse(initialRememberValue)
  );

  useEffect(() => {
    Cookie.set("rememberMe", JSON.stringify(rememberMe));
  }, [rememberMe]);

  return (
    <div>
      remember me
      <input
        type="checkbox"
        value={rememberMe}
        checked={rememberMe}
        onChange={e => setRememberMe(e.target.checked)}
      />
    </div>
  );
};

Home.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialRememberValue: cookies.rememberMe
  };
};

export default Home;