import React from "react";
import NotFound from "./NotFound";

type Props = {
  errorCode: string;
  variant: "404" | "500";
  preventBack?: boolean;
};

const defaultProps: Props = {
  errorCode: "",
  variant: "404",
  preventBack: false,
};

const ErrorPage = (props: Props) => {
  const { errorCode, variant } = { ...defaultProps, ...props };

  switch (variant) {
    case "404":
      return <NotFound />;
  }
};

export default ErrorPage;
