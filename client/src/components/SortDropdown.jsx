const SortDropdown = ({ sortBy, onSortChange }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">
        Sort By:
      </label>

      <select
        value={sortBy}
        onChange={(event) =>
          onSortChange(event.target.value)
        }
        className="border rounded px-3 py-2"
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