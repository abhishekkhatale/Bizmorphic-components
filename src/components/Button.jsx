import React from "react";
import { MdTransitEnterexit } from "react-icons/md";

export const Button = ({
  type = "button",
  size = "medium", 
  variant = "tertiary", 
  icon = <MdTransitEnterexit />,
  text = "Submit",
  loading = false,
  disabled = false,
  onClick = () => {},
  ...props
}) => {
  const variantClasses = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
    tertiary: "bg-black text-white hover:bg-[#212121]",
  };

  const sizeClasses = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-5 py-3",
  };

  const commonStyles = `rounded-md flex items-center gap-2 transition`;

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  return (
    <button
      type={type}
      className={`${commonStyles} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledStyle}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
          ></path>
        </svg>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {text}
        </>
      )}
    </button>
  );
};
