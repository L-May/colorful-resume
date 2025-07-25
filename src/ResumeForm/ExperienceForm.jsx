export default function ExperienceForm({ data, onChange }) {
    return (
        <div>
            {data.length === 0 && <p>No education added yet.</p> && <button
                    onClick={() => onChange([...data, { company: "", position: "", jobLocation: "", jobDescription: "", startDate: "", endDate: "" }])}
                    className="p-2 mt-2 text-sm text-white bg-pink-500 rounded"
                    >
                    + Add Education
                </button>}
            {data.map((entry, index) => (
                <div key={index} className="mb-4">
                <input 
                    type="text"
                    placeholder="Company Name"
                    value={entry.company || ""}
                    onChange={(e) => {
                        const newData = [...data]
                        newData[index].company = e.target.value
                        onChange(newData)
                    }}
                    className="block w-full p-2 mb-1 border rounded"
                />

                <input 
                    type="text"
                    placeholder="Assistant Editor"
                    value={entry.position || ""}
                    onChange={(e) => {
                        const newData = [...data]
                        newData[index].position = e.target.value
                        onChange(newData)
                    }}
                    className="block w-full p-2 mb-1 border rounded"
                />

                <input 
                    type="text" 
                    placeholder="Hartford CT"
                    value={entry.jobLocation || ""}
                    onChange={(e) => {
                        const newData = [...data]
                        newData[index].jobLocation = e.target.value
                        onChange(newData)
                    }}
                    className="block w-full p-2 mb-1 border rounded"
                />

                <input 
                    type="text-area"
                    placeholder="Editing blog posts for posting..."
                    value={entry.jobDescription || ""}
                    onChange={(e) => {
                        const newData = [...data]
                        newData[index].jobDescription = e.target.value
                        onChange(newData)
                    }}
                    className="block w-full p-2 mb-1 border rounded"
                />

                <input 
                    type="text" 
                    placeholder="year"
                    value={entry.startDate || ""}
                    onChange={(e) => {
                        const newData = [...data]
                        newData[index].startDate = e.target.value
                        onChange(newData)
                    }}
                    className="block w-full p-2 mb-1 border rounded"
                />

                <input 
                    type="text" 
                    placeholder="year"
                    value={entry.endDate || ""}
                    onChange={(e) => {
                        const newData = [...data]
                        newData[index].endDate = e.target.value
                        onChange(newData)
                    }}
                    className="block w-full p-2 mb-1 border rounded"
                />
            </div>
        )
        )}
        </div>
  );
}