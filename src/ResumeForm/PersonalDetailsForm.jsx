export default function personalDetails({data, onChange}) {
    return (
        <div>
            <input 
                type="text"
                placeholder="First and last name"
                value={data.name || ""} 
                onChange={(e) => onChange({...data, name: e.target.value})}
                className="block w-full p-2 mb-2 border rounded"
            />

            <input
                type="text"
                placeholder="Where are you located?"
                value={data.based || ""}
                onChange={(e) => onChange({...data, based: e.target.value})}
                className="block w-full p-2 mb-2 border rounded"
            />

            <input 
                type="tel"
                placeholder="phone number"
                value={data.phone || ""}
                onChange={(e) => onChange({...data, phone: e.target.value})}
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