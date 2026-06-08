const ErrorMessage = ({ message }) => {
  return (
    <div
      className="
        mt-4
        p-4
        rounded-xl
        border
        border-red-300
        bg-red-50
        text-red-700
        shadow-sm
      "
    >
      <p className="font-medium">
        ⚠️ {message}
      </p>
    </div>
  );
};

export default ErrorMessage;