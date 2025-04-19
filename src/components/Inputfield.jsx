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

  return (
    <div className="w-full max-w-md mx-auto mb-4">
     
      <div className="flex items-center justify-between px-1 mb-1">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        {hasError && (
          <p className="text-sm text-red-600" role="alert">
            {errormsg}
          </p>
        )}
      </div>

      
      <div
        className={`flex items-center gap-2 px-3 py-2 border-2 rounded-md w-full transition ${
          hasError ? "border-red-500" : "border-gray-400"
        }`}
      >
        {icon && <span className="text-gray-500">{icon}</span>}
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
          className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
          {...props}
        />
      </div>

     
      {helperText && !hasError && (
        <p id={`${inputId}-helper`} className="text-xs text-gray-500 mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
};
