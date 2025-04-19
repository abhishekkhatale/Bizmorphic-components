
import { useNotification } from "../context/NotificationContext";

const AlertComponent = () => {
  const { showNotification } = useNotification();

  return (
    <div className="space-x-4">
      <button
        onClick={() => showNotification({ type: "success", message: "Task completed!" })}
        className="px-3 py-2 bg-green-600 text-white rounded"
      >
        Success
      </button>

      <button
        onClick={() => showNotification({ type: "error", message: "Something went wrong." })}
        className="px-3 py-2 bg-red-600 text-white rounded"
      >
        Error
      </button>

      <button
        onClick={() =>
          showNotification({
            type: "info",
            message: "Just letting you know...",
            duration: 5000,
          })
        }
        className="px-3 py-2 bg-blue-600 text-white rounded"
      >
        Info
      </button>
    </div>
  );
};

export default AlertComponent;
