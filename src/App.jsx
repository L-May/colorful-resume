import { useState } from "react";
import { themes } from "./themes";

import PersonalDetailsForm from "./ResumeForm/PersonalDetailsForm";
import EducationForm from "./ResumeForm/EducationForm";
import ExperienceForm from "./ResumeForm/ExperienceForm";
import ThemeSelector from "./ResumeForm/ThemeSelector";
import ResumePreview from "./ResumePreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [theme, setTheme] = useState("floralPink");
  const [darkMode, setDarkMode] = useState(false);

  const currentTheme = themes[theme];
  console.log("Resume theme:", theme);

  return (
    <div className={darkMode ? "dark" : ""}>
  <div className={`flex h-screen bg-white dark:bg-gray-900`}>
    {/* Left Column */}
    <div className="w-1/2 p-4 space-y-4 overflow-y-auto border-r bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>


      <ThemeSelector theme={theme} onChange={setTheme} />
      <PersonalDetailsForm data={personalDetails} onChange={setPersonalDetails} />
      <EducationForm data={education} onChange={setEducation} />
      <ExperienceForm data={experience} onChange={setExperience} />
    </div>

    {/* Right Column: Preview (themed styling) */}
    <div className={`w-1/2 p-4 overflow-y-auto rounded ${currentTheme.bg} ${currentTheme.text}`}>
      <h1 className={`text-2xl font-bold mb-2 ${currentTheme.heading}`}>
        Resume Preview
      </h1>
      <ResumePreview
        personalDetails={personalDetails}
        education={education}
        experience={experience}
        theme={theme}
      />
    </div>
  </div>
</div>
  );
}

export default App;
