import React, { forwardRef } from "react";
import { themes } from "./themes";

const ResumePreview = forwardRef(({ personalDetails, education, experience, theme }, ref) => {
  const currentTheme = themes[theme];

  return (
    <div
      ref={ref}
      className={`min-h-screen rounded-xl shadow-xl p-6 font-serif ${currentTheme.bg} ${currentTheme.text}`}
    >
      {/* Personal Details */}
      <div className="mb-6">
        <h1 className={`text-3xl font-bold mb-1 ${currentTheme.heading}`}>
          {personalDetails.name || "Your Name"}
        </h1>
        <p className="text-sm">
          {personalDetails.based || "based in"} &nbsp;|&nbsp;
          {personalDetails.email || "email@example.com"} &nbsp;|&nbsp;
          {personalDetails.phone || "(555) 555-5555"}
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className={`text-xl font-semibold border-b pb-1 mb-2 ${currentTheme.heading}`}>
          Education
        </h2>
        {education.length === 0 && <p className="text-sm italic">No education listed.</p>}
        {education.map((entry, index) => (
          <div key={index} className={`mb-3 ${currentTheme.accent}`}>
            <p className="font-semibold">{entry.school || "School Name"}</p>
            <p className="text-sm italic">
              {entry.degree || "Degree"} — {entry.years || "Year"}
            </p>
            <p>{entry.description || "Description"}</p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div>
        <h2 className={`text-xl font-semibold border-b pb-1 mb-2 ${currentTheme.heading}`}>
          Experience
        </h2>
        {experience.length === 0 && <p className="text-sm italic">No experience listed.</p>}
        {experience.map((entry, index) => (
          <div key={index} className="mb-3">
            <p className="font-semibold">
              {entry.position || "Job Title"} at {entry.company || "Company"}
            </p>
            <p className="text-sm italic">{entry.jobLocation || "Location"}</p>
            <p className="text-sm italic">
              {entry.startDate || "Start"} - {entry.endDate || "End"}
            </p>
            <p className="text-sm">{entry.jobDescription || "Job description..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ResumePreview;
