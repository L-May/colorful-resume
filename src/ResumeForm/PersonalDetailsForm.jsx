export default function personalDetails({data, onChange}) {
    return (
        <div>
            <input 
                type="text"
                placeholder="First and last name"
                value={data.name || ""} 
                onChange={(e) => onChange({...data, name: e.target.value})}
                className="block w-full p-2 mb-2 border-rounded"
            />

            <input
                type="text"
                placeholder="Where are you located?"
                value={data.location || ""}
                onChange={(e) => onChange({...data, location: e.target.value})}
                className="block w-full p-2 mb-2 border rounded"
            />

            <input 
                type="tel"
                placeholder="phone number"
                value={data.number || ""}
                onChange={(e) => onChange({...data, number: e.target.value})}
                className="block w-full p-2 mb-2 border rounded" 
            />

            <input 
                type="email"
                 placeholder="email address"
                 value={data.email || ""}
                 onChange={(e) => onChange({...data, email: e.target.value})}
                 className="block w-full p-2 mb-2 border rounded"
            />
        </div>
    );
}