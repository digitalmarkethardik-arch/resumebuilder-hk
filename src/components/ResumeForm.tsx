import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
}

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const addWorkExperience = () => {
    onChange({
      ...data,
      workExperience: [
        ...data.workExperience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const updateWorkExperience = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      workExperience: data.workExperience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeWorkExperience = (id: string) => {
    onChange({
      ...data,
      workExperience: data.workExperience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: Date.now().toString(),
          school: "",
          degree: "",
          field: "",
          graduationDate: "",
        },
      ],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    onChange({
      ...data,
      skills: [...data.skills, ""],
    });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    onChange({ ...data, skills: newSkills });
  };

  const removeSkill = (index: number) => {
    onChange({
      ...data,
      skills: data.skills.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={data.personalInfo.fullName}
              onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
              placeholder="New York, NY"
            />
          </div>
          <div>
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              value={data.personalInfo.summary}
              onChange={(e) => updatePersonalInfo("summary", e.target.value)}
              placeholder="Brief overview of your professional background and goals..."
              rows={4}
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
          <Button onClick={addWorkExperience} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        <div className="space-y-6">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="border border-border rounded-lg p-4 relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => removeWorkExperience(exp.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) =>
                        updateWorkExperience(exp.id, "company", e.target.value)
                      }
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <Label>Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) =>
                        updateWorkExperience(exp.id, "position", e.target.value)
                      }
                      placeholder="Job Title"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      value={exp.startDate}
                      onChange={(e) =>
                        updateWorkExperience(exp.id, "startDate", e.target.value)
                      }
                      placeholder="Jan 2020"
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      value={exp.endDate}
                      onChange={(e) =>
                        updateWorkExperience(exp.id, "endDate", e.target.value)
                      }
                      placeholder="Present"
                    />
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateWorkExperience(exp.id, "description", e.target.value)
                    }
                    placeholder="Key responsibilities and achievements..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
          <Button onClick={addEducation} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        <div className="space-y-6">
          {data.education.map((edu) => (
            <div key={edu.id} className="border border-border rounded-lg p-4 relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => removeEducation(edu.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>School</Label>
                    <Input
                      value={edu.school}
                      onChange={(e) =>
                        updateEducation(edu.id, "school", e.target.value)
                      }
                      placeholder="University Name"
                    />
                  </div>
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(edu.id, "degree", e.target.value)
                      }
                      placeholder="Bachelor's, Master's, etc."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Field of Study</Label>
                    <Input
                      value={edu.field}
                      onChange={(e) =>
                        updateEducation(edu.id, "field", e.target.value)
                      }
                      placeholder="Computer Science"
                    />
                  </div>
                  <div>
                    <Label>Graduation Date</Label>
                    <Input
                      value={edu.graduationDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "graduationDate", e.target.value)
                      }
                      placeholder="May 2024"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          <Button onClick={addSkill} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        <div className="space-y-3">
          {data.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                placeholder="e.g., JavaScript, Project Management"
                className="flex-1"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
