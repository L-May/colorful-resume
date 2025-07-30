export default function EducationForm({ data, onChange }) {
    const addEntry = () => {
        onChange([
            ...data,
            {
                degree: "",
                school: "",
                years: "",
                description: "",
            },
        ]);
    };

    const removeEntry = (indexToRemove) => {
        const newData = data.filter((_, index) => index != indexToRemove);
        onChange(newData);
    };

  return (
    <div>
    {data.length === 0 && (
        <div>
            <p className="italic text-sm text-gray-500">No education added yet.</p>
            <button
                onClick={addEntry}
                className="p-2 mt-2 text-sm text-white bg-pink-500 rounded"
            >
                + Add Education
            </button>
        </div>
    )}

    {data.map((entry, index) => (
        <div key={index} className="mb-4">
            <input
                type="text"
                placeholder="degree"
                value={entry.degree || ""}
                onChange={(e) => {
                    const newData = [...data]
                    newData[index].degree = e.target.value
                    onChange(newData)
            }}
            className="block w-full p-2 mb-1 border rounded"
        />

            <input
            type="text"
            placeholder="School"
            value={entry.school || ""}
            onChange={(e) => {
                const newData = [...data]
                newData[index].school = e.target.value
                onChange(newData)
            }}
            className="block w-full p-2 mb-1 border rounded"
            />

            <input
            type="text"
            placeholder="Years completed"
            value={entry.years || ""}
            onChange={(e) => {
                const newData = [...data]
                newData[index].years = e.target.value
                onChange(newData)
            }}
            className="block w-full p-2 mb-1 border rounded"
            />

            <textarea
                placeholder="Description or achievements"
                value={entry.description || ""}
                onChange={(e) => {
                    const newData = [...data]
                    newData[index].description = e.target.value
                    onChange(newData)
                }}
                className="block w-full p-2 mb-1 border rounded"
            />
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