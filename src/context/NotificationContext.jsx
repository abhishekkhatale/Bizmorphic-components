// src/context/NotificationContext.jsx
import { createContext, useState, useCallback, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback(({ type = "info", message, duration = 3000 }) => {
    const id = uuidv4();
    const notification = { id, type, message };

    setNotifications((prev) => [...prev, notification]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`px-4 py-2 text-white rounded shadow-md flex justify-between items-center min-w-[250px]
              ${n.type === "success" ? "bg-green-500" : n.type === "error" ? "bg-red-500" : "bg-blue-500"}
            `}
          >
            <span>{n.message}</span>
            <button className="ml-4 text-white" onClick={() => removeNotification(n.id)}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
