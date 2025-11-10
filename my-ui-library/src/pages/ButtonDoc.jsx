import React from "react";
import Button from "../components/Button";

const ButtonDoc = () => {
  const codeUsage = `
import Button from "./components/Button";

export default function Example() {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </>
  );
}
  `;

  return (
    <div className="page doc-page">
      <h1>Button</h1>
      <p>
        The <code>Button</code> component is used to trigger actions. You can
        customize its <code>variant</code> prop for different styles.
      </p>

      <h2>Usage</h2>
      <pre className="code-block">
        <code>{codeUsage}</code>
      </pre>

      <h2>Example</h2>
      <div className="example-area">
        <Button variant="primary">Button</Button>
      </div>
    </div>
  );
};

export default ButtonDoc;