import React from "react";
import "./TestLayout.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/tbol-logo-full.png";

interface TestLayoutProps {
  test: {
    title: string;
    description: React.FunctionComponent<{}>;
  };
}

const TestLayout: React.FunctionComponent<TestLayoutProps> = ({
  children,
  test,
}) => {
  const { description: Description } = test;
  return (
    <div className="testLayout">
      <div className="requirments">
        <Link to="/" className="flex-center">
          <img width={236} src={logo} alt="TBOL logo" className="logo" />
        </Link>
        <h2 className="title flex-center">{test.title}</h2>
        <div className="description">{<Description />}</div>
      </div>
      <div className="view">{children}</div>
    </div>
  );
};

export default TestLayout;
