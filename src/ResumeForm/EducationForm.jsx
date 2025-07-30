export default function EducationForm({ data, onChange }) {
    function handleDelete(){
        
    }
  return (
    <div>
    {data.length === 0 && <p>No education added yet.</p> && <button
                onClick={() => onChange([...data, { degree: "", school: "", years: "", description: "" }])}
                className="p-2 mt-2 text-sm text-white bg-pink-500 rounded"
                >
                + Add Education
            </button>}
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

            <button
                onClick={() => onChange([...data, { degree: "", school: "", years: "", description: "" }])}
                className="p-2 mt-2 text-sm text-white bg-pink-500 rounded"
                >
                + Add Education
            </button>
            <button
                onClick={handleDelete}

        </div>
))}
    </div>
  );

}