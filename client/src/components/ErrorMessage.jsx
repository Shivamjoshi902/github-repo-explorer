const ErrorMessage = ({ message }) => {
  return (
    <div className="mt-4 p-4 border border-red-500 rounded text-red-600">
      {message}
    </div>
  );
};

export default ErrorMessage;