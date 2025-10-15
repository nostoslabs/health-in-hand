"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PatientFormData, initialFormData } from "@/types/patient-form";
import { generatePDF } from "@/lib/pdf-generator";

export function NewPatientWebForm() {
  const [formData, setFormData] = useState<PatientFormData>(initialFormData);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDietaryChange = (
    day: "day1" | "day2",
    meal: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      dietary: {
        ...prev.dietary,
        [day]: {
          ...prev.dietary[day],
          [meal]: value,
        },
      },
    }));
  };

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      await generatePDF(formData);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEmailForm = async () => {
    // TODO: Implement email functionality
    alert("Email functionality coming soon!");
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="patientName"
                className="block text-sm font-medium mb-2"
              >
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                id="patientName"
                type="text"
                value={formData.patientName}
                onChange={(e) => handleInputChange("patientName", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chief Concerns */}
      <Card>
        <CardHeader>
          <CardTitle>1. Chief Concerns</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            value={formData.chiefConcerns}
            onChange={(e) => handleInputChange("chiefConcerns", e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-32"
            placeholder="Please describe your main health concerns..."
          />
        </CardContent>
      </Card>

      {/* Medications and Supplements */}
      <Card>
        <CardHeader>
          <CardTitle>2. Medications and/or Nutritional Supplements</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            value={formData.medicationsSupplements}
            onChange={(e) =>
              handleInputChange("medicationsSupplements", e.target.value)
            }
            className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-32"
            placeholder="List all current medications and supplements..."
          />
        </CardContent>
      </Card>

      {/* Dietary Intake */}
      <Card>
        <CardHeader>
          <CardTitle>3. Dietary Intake for 2 Days Before Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day 1 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Day 1</h3>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Breakfast
                </label>
                <textarea
                  value={formData.dietary.day1.breakfast}
                  onChange={(e) =>
                    handleDietaryChange("day1", "breakfast", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Snacks
                </label>
                <textarea
                  value={formData.dietary.day1.morningSnacks}
                  onChange={(e) =>
                    handleDietaryChange("day1", "morningSnacks", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lunch</label>
                <textarea
                  value={formData.dietary.day1.lunch}
                  onChange={(e) =>
                    handleDietaryChange("day1", "lunch", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Snacks
                </label>
                <textarea
                  value={formData.dietary.day1.afternoonSnacks}
                  onChange={(e) =>
                    handleDietaryChange(
                      "day1",
                      "afternoonSnacks",
                      e.target.value
                    )
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Dinner</label>
                <textarea
                  value={formData.dietary.day1.dinner}
                  onChange={(e) =>
                    handleDietaryChange("day1", "dinner", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Snacks
                </label>
                <textarea
                  value={formData.dietary.day1.eveningSnacks}
                  onChange={(e) =>
                    handleDietaryChange("day1", "eveningSnacks", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
            </div>

            {/* Day 2 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Day 2</h3>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Breakfast
                </label>
                <textarea
                  value={formData.dietary.day2.breakfast}
                  onChange={(e) =>
                    handleDietaryChange("day2", "breakfast", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Snacks
                </label>
                <textarea
                  value={formData.dietary.day2.morningSnacks}
                  onChange={(e) =>
                    handleDietaryChange("day2", "morningSnacks", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lunch</label>
                <textarea
                  value={formData.dietary.day2.lunch}
                  onChange={(e) =>
                    handleDietaryChange("day2", "lunch", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Snacks
                </label>
                <textarea
                  value={formData.dietary.day2.afternoonSnacks}
                  onChange={(e) =>
                    handleDietaryChange(
                      "day2",
                      "afternoonSnacks",
                      e.target.value
                    )
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Dinner</label>
                <textarea
                  value={formData.dietary.day2.dinner}
                  onChange={(e) =>
                    handleDietaryChange("day2", "dinner", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Snacks
                </label>
                <textarea
                  value={formData.dietary.day2.eveningSnacks}
                  onChange={(e) =>
                    handleDietaryChange("day2", "eveningSnacks", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleGeneratePDF}
              disabled={!formData.patientName || isGenerating}
              size="lg"
              className="flex-1"
            >
              {isGenerating ? "Generating PDF..." : "Download PDF"}
            </Button>
            <Button
              onClick={handleEmailForm}
              disabled={!formData.patientName}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Email Form
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            * Required fields must be filled before generating PDF
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
