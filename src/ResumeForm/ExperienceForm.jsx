export default function ExperienceForm({ data, onChange }) {
  const addEntry = () => {
    onChange([
      ...data,
      {
        company: "",
        position: "",
        jobLocation: "",
        jobDescription: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeEntry = (indexToRemove) => {
    const newData = data.filter((_, index) => index !== indexToRemove);
    onChange(newData);
  };

  return (
    <div>
      {data.length === 0 && (
        <div>
          <p className="italic text-sm text-gray-500">No experience added yet.</p>
          <button
            onClick={addEntry}
            className="p-2 mt-2 text-sm text-white bg-pink-500 rounded"
          >
            + Add Experience
          </button>
        </div>
      )}

      {data.map((entry, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <input
            type="text"
            placeholder="Company Name"
            value={entry.company}
            onChange={(e) => {
              const newData = [...data];
              newData[index].company = e.target.value;
              onChange(newData);
            }}
            className="block w-full p-2 mb-1 border rounded"
          />

          <input
            type="text"
            placeholder="Position (e.g., Assistant Editor)"
            value={entry.position}
            onChange={(e) => {
              const newData = [...data];
              newData[index].position = e.target.value;
              onChange(newData);
            }}
            className="block w-full p-2 mb-1 border rounded"
          />

          <input
            type="text"
            placeholder="Job Location (e.g., Hartford, CT)"
            value={entry.jobLocation}
            onChange={(e) => {
              const newData = [...data];
              newData[index].jobLocation = e.target.value;
              onChange(newData);
            }}
            className="block w-full p-2 mb-1 border rounded"
          />

          <textarea
            placeholder="Job Description or Responsibilities"
            value={entry.jobDescription}
            onChange={(e) => {
              const newData = [...data];
              newData[index].jobDescription = e.target.value;
              onChange(newData);
            }}
            className="block w-full p-2 mb-1 border rounded"
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Start Year"
              value={entry.startDate}
              onChange={(e) => {
                const newData = [...data];
                newData[index].startDate = e.target.value;
                onChange(newData);
              }}
              className="w-1/2 p-2 mb-1 border rounded"
            />

            <input
              type="text"
              placeholder="End Year"
              value={entry.endDate}
              onChange={(e) => {
                const newData = [...data];
                newData[index].endDate = e.target.value;
                onChange(newData);
              }}
              className="w-1/2 p-2 mb-1 border rounded"
            />
          </div>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={addEntry}
              className="p-2 mt-2 text-sm text-white bg-pink-500 rounded"
            >
              + Add More
            </button>
            <button
              onClick={() => removeEntry(index)}
              className="text-sm px-2 py-1 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
