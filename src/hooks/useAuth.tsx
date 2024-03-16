/**Globals */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/** Services */
import { userService } from "../services";

/** Store */
import { RootState } from "../redux/store";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService.verifyToken().then((data) => {
      if (data.status !== "failed") {
        setLoading(false);
        setAuthenticated(true);
      } else {
        setLoading(false);
        setAuthenticated(false);
      }
    });
  }, [authenticated]);

  return authenticated;
};

export default useAuth;
