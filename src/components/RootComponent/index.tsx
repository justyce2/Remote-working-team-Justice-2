import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loading from "../Loading";

type Props = {
  children: React.ReactNode;
};

const RootComponent = ({ children }: Props) => {
  /** Shared State stuff */
  const showLoadingPage = useSelector(
    (state: RootState) => state.main.showLoadingPage
  );

  if (showLoadingPage) {
    return <Loading />;
  }

  return <div>{children}</div>;
};

export default RootComponent;
