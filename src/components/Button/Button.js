import React from "react";
import "./Button.css";
export default function Button({ label, type, ...props }) {
  return (
    <>
      <section className="container">
        <button
          className={type === "primary" ? "first-class" : "second-class"}
          value={label}
          {...props}
        >
          {label}
        </button>
      </section>
    </>
  );
}
