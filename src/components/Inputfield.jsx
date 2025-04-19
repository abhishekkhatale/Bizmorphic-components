import React from "react";

export const Inputfield = ({
  type = "",
  name = "",
  label = "",
  placeholder = "",
  helperText = "",
  icon = null,
  errormsg = "",
  required = false,
  value = "",
  onChange = () => {},
  ...props
}) => {
  const inputId = `input-${name}`;
  const hasError = Boolean(errormsg);

  const containerStyle = {
    width: "100%",
    maxWidth: "28rem", 
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "1rem", 
  };

  const labelContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "0.25rem", 
    paddingRight: "0.25rem", 
    marginBottom: "0.25rem", 
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.875rem", 
    fontWeight: "500", 
    color: "#374151", 
  };

  const requiredStyle = {
    color: "#ef4444", 
    marginLeft: "0.125rem", 
  };

  const errorTextStyle = {
    fontSize: "0.875rem", 
    color: "#dc2626", 
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", 
    padding: "0.5rem 0.75rem", 
    borderWidth: "2px", 
    borderRadius: "0.375rem", 
    width: "100%",
    transition: "border-color 0.3s ease",
    borderColor: hasError ? "#ef4444" : "#9ca3af", 
  };

  const iconStyle = {
    color: "#6b7280", 
  };

  const inputStyle = {
    flex: 1,
    outline: "none",
    fontSize: "0.875rem", 
    color: "#1f2937", 
    background: "transparent", 
  };

  const helperTextStyle = {
    fontSize: "0.75rem", 
    color: "#6b7280", 
    marginTop: "0.25rem", 
  };

  return (
    <div style={containerStyle}>
      <div style={labelContainerStyle}>
        {label && (
          <label htmlFor={inputId} style={labelStyle}>
            {label}
            {required && <span style={requiredStyle}>*</span>}
          </label>
        )}
        {hasError && (
          <p style={errorTextStyle} role="alert">
            {errormsg}
          </p>
        )}
      </div>

      <div style={inputContainerStyle}>
        {icon && <span style={iconStyle}>{icon}</span>}
        <input
          id={inputId}
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={`${inputId}-helper`}
          style={inputStyle}
          {...props}
        />
      </div>

      {helperText && !hasError && (
        <p id={`${inputId}-helper`} style={helperTextStyle}>
          {helperText}
        </p>
      )}
    </div>
  );
};