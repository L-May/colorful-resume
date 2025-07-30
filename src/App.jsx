import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { themes } from "./themes";
import ResumePreview from "./ResumePreview";
import PersonalDetailsForm from "./ResumeForm/PersonalDetailsForm";
import EducationForm from "./ResumeForm/EducationForm";
import ExperienceForm from "./ResumeForm/ExperienceForm";
import ThemeSelector from "./ResumeForm/ThemeSelector";

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [theme, setTheme] = useState("floralPink");

  const resumeRef = useRef();

  const currentTheme = themes[theme];

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My Resume",
  });

  return (
    <div className={`flex h-screen bg-white text-gray-900`}>
      {/* Left Column - Forms */}
      <div className={`w-1/2 p-4 space-y-4 overflow-y-auto border-r bg-white print:hidden`}>
        <ThemeSelector theme={theme} onChange={setTheme} />
        <PersonalDetailsForm data={personalDetails} onChange={setPersonalDetails} />
        <EducationForm data={education} onChange={setEducation} />
        <ExperienceForm data={experience} onChange={setExperience} />

        <button
          onClick={handlePrint}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Print / Save PDF
        </button>
      </div>

      {/* Right Column - Preview */}
      <div className="w-1/2 p-4 overflow-y-auto">
        <ResumePreview
          ref={resumeRef}
          personalDetails={personalDetails}
          education={education}
          experience={experience}
          theme={theme}
        />
      </div>
    </div>
  );
}
