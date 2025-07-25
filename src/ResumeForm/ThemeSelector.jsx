export default function ThemeSelector({ theme, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Choose Theme:</label>
      <select
        value={theme}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="floralPink">Floral Pink</option>
        <option value="sageGreen">Sage Green</option>
        <option value="daisyYellow">Daisy Yellow</option>
      </select>
    </div>
  );
}
