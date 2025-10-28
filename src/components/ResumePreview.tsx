import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { ResumeData } from "./ResumeForm";

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview = ({ data }: ResumePreviewProps) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="sticky top-6">
      <div className="mb-4 flex justify-end print:hidden">
        <Button onClick={handlePrint} className="gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
      <Card className="p-8 print:shadow-none print:border-0 bg-white" id="resume-preview">
        <div className="space-y-6">
          {/* Personal Info */}
          <div className="border-b-2 border-primary pb-4">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {data.personalInfo.fullName || "Your Name"}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
              {data.personalInfo.phone && <span>•</span>}
              {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
              {data.personalInfo.location && <span>•</span>}
              {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
            </div>
            {data.personalInfo.summary && (
              <p className="mt-4 text-foreground leading-relaxed">
                {data.personalInfo.summary}
              </p>
            )}
          </div>

          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                Work Experience
              </h2>
              <div className="space-y-4">
                {data.workExperience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.position || "Position"}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-foreground font-medium mb-2">
                      {exp.company || "Company Name"}
                    </p>
                    {exp.description && (
                      <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.school || "School Name"}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {edu.graduationDate}
                      </span>
                    </div>
                    <p className="text-foreground">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills.filter((s) => s.trim()).length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills
                  .filter((skill) => skill.trim())
                  .map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
