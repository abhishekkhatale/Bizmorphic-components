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
  
  const variantStyles = {
    primary: {
      backgroundColor: "#dc2626", 
      color: "#ffffff", 
    },
    secondary: {
      backgroundColor: "#16a34a", 
      color: "#ffffff", 
    },
    tertiary: {
      backgroundColor: "#000000", 
      color: "#ffffff", 
    }
  };

  
  const variantHoverStyles = {
    primary: {
      backgroundColor: "#b91c1c", 
    },
    secondary: {
      backgroundColor: "#15803d", 
    },
    tertiary: {
      backgroundColor: "#212121", 
    }
  };

  
  const sizeStyles = {
    small: {
      fontSize: "0.875rem", 
      padding: "0.375rem 0.75rem", 
    },
    medium: {
      fontSize: "1rem", 
      padding: "0.5rem 1rem", 
    },
    large: {
      fontSize: "1.125rem", 
      padding: "0.75rem 1.25rem", 
    }
  };

 
  const commonStyles = {
    borderRadius: "0.375rem", 
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", 
    transition: "background-color 0.3s", 
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? "0.5" : "1",
  };

  
  const buttonStyle = {
    ...commonStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    if (!disabled) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

 
  if (isHovering) {
    buttonStyle.backgroundColor = variantHoverStyles[variant].backgroundColor;
  }

  return (
    <button
      type={type}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {loading ? (
        <svg
          style={{
            animation: "spin 1s linear infinite",
            height: "1.25rem", 
            width: "1.25rem",
            color: "currentColor", 
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            style={{ opacity: "0.25" }}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            style={{ opacity: "0.75" }}
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

