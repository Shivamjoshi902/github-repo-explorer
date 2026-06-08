const SortDropdown = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-3 mt-6 mb-4">
      <label className="font-semibold">
        Sort Repositories:
      </label>

      <select
        value={sortBy}
        onChange={(event) =>
          onSortChange(event.target.value)
        }
        className="border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="updatedAt">
          Last Updated
        </option>

        <option value="name">
          Name
        </option>

        <option value="stars">
          Stars
        </option>
      </select>
    </div>
  );
};

export default SortDropdown;