import { createContext, useState, useCallback, useContext } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [counter, setCounter] = useState(0);

  const showNotification = useCallback(({ type = "info", message, duration = 3000 }) => {
    
    const id = counter;
    setCounter(prevCounter => prevCounter + 1);
    
    const notification = { id, type, message };

    setNotifications((prev) => [...prev, notification]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  }, [counter]);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const notificationContainerStyle = {
    position: "fixed",
    top: "1.25rem",
    right: "1.25rem",
    zIndex: 50,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  };

  const getNotificationStyle = (type) => {
    const baseStyle = {
      padding: "0.5rem 1rem",
      color: "white",
      borderRadius: "0.375rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: "250px"
    };

    
    if (type === "success") {
      baseStyle.backgroundColor = "#10b981"; 
    } else if (type === "error") {
      baseStyle.backgroundColor = "#ef4444"; 
    } else {
      baseStyle.backgroundColor = "#3b82f6"; 
    }

    return baseStyle;
  };

  const closeButtonStyle = {
    marginLeft: "1rem",
    color: "white",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    lineHeight: 1
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div style={notificationContainerStyle}>
        {notifications.map((n) => (
          <div key={n.id} style={getNotificationStyle(n.type)}>
            <span>{n.message}</span>
            <button 
              style={closeButtonStyle} 
              onClick={() => removeNotification(n.id)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};