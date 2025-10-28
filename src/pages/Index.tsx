import { useState } from "react";
import { ResumeForm, type ResumeData } from "@/components/ResumeForm";
import { ResumePreview } from "@/components/ResumePreview";
import { FileText } from "lucide-react";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    workExperience: [],
    education: [],
    skills: [],
  });

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-white border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Resume Builder</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="print:hidden">
            <ResumeForm data={resumeData} onChange={setResumeData} />
          </div>
          <div>
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
