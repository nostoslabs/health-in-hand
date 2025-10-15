import { jsPDF } from "jspdf";
import { PatientFormData } from "@/types/patient-form";

export async function generatePDF(formData: PatientFormData) {
  const doc = new jsPDF();

  // Set up fonts and styles
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  // Header
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Health In Hand", pageWidth / 2, 20, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("2363 Lawrence Cove Rd", pageWidth / 2, 27, { align: "center" });
  doc.text("Eva, AL 35621", pageWidth / 2, 32, { align: "center" });
  doc.text("(256) 482-2801", pageWidth / 2, 37, { align: "center" });

  // Title
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("New Patient Introduction Form", pageWidth / 2, 50, {
    align: "center",
  });

  // Patient info
  let y = 65;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Patient Name: ${formData.patientName}`, margin, y);
  doc.text(`Date: ${formData.date}`, pageWidth - margin - 60, y);

  // Chief Concerns
  y += 15;
  doc.setFont("helvetica", "bold");
  doc.text("1. Chief Concerns:", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  const concernsLines = doc.splitTextToSize(
    formData.chiefConcerns || "(Not provided)",
    contentWidth
  );
  doc.text(concernsLines, margin, y);
  y += concernsLines.length * 5 + 5;

  // Medications and Supplements
  if (y > pageHeight - 60) {
    doc.addPage();
    y = 20;
  }
  doc.setFont("helvetica", "bold");
  doc.text("2. Medications and/or Nutritional Supplements currently on:", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  const medsLines = doc.splitTextToSize(
    formData.medicationsSupplements || "(Not provided)",
    contentWidth
  );
  doc.text(medsLines, margin, y);
  y += medsLines.length * 5 + 5;

  // Dietary Intake
  if (y > pageHeight - 100) {
    doc.addPage();
    y = 20;
  }
  doc.setFont("helvetica", "bold");
  doc.text("3. Dietary Intake for 2 days before appointment:", margin, y);
  y += 10;

  // Create two columns for Day 1 and Day 2
  const colWidth = (contentWidth - 10) / 2;
  const col1X = margin;
  const col2X = margin + colWidth + 10;

  // Day 1
  let dayY = y;
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("Day 1", col1X, dayY);
  dayY += 7;

  doc.setFont("helvetica", "bold");
  doc.text("Breakfast:", col1X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day1Breakfast = doc.splitTextToSize(
    formData.dietary.day1.breakfast || "-",
    colWidth
  );
  doc.text(day1Breakfast, col1X, dayY);
  dayY += Math.max(day1Breakfast.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Snacks:", col1X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day1MorningSnacks = doc.splitTextToSize(
    formData.dietary.day1.morningSnacks || "-",
    colWidth
  );
  doc.text(day1MorningSnacks, col1X, dayY);
  dayY += Math.max(day1MorningSnacks.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Lunch:", col1X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day1Lunch = doc.splitTextToSize(
    formData.dietary.day1.lunch || "-",
    colWidth
  );
  doc.text(day1Lunch, col1X, dayY);
  dayY += Math.max(day1Lunch.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Snacks:", col1X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day1AfternoonSnacks = doc.splitTextToSize(
    formData.dietary.day1.afternoonSnacks || "-",
    colWidth
  );
  doc.text(day1AfternoonSnacks, col1X, dayY);
  dayY += Math.max(day1AfternoonSnacks.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Dinner:", col1X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day1Dinner = doc.splitTextToSize(
    formData.dietary.day1.dinner || "-",
    colWidth
  );
  doc.text(day1Dinner, col1X, dayY);
  dayY += Math.max(day1Dinner.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Snacks:", col1X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day1EveningSnacks = doc.splitTextToSize(
    formData.dietary.day1.eveningSnacks || "-",
    colWidth
  );
  doc.text(day1EveningSnacks, col1X, dayY);

  // Day 2 (parallel column)
  dayY = y;
  doc.setFont("helvetica", "bold");
  doc.text("Day 2", col2X, dayY);
  dayY += 7;

  doc.setFont("helvetica", "bold");
  doc.text("Breakfast:", col2X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day2Breakfast = doc.splitTextToSize(
    formData.dietary.day2.breakfast || "-",
    colWidth
  );
  doc.text(day2Breakfast, col2X, dayY);
  dayY += Math.max(day2Breakfast.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Snacks:", col2X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day2MorningSnacks = doc.splitTextToSize(
    formData.dietary.day2.morningSnacks || "-",
    colWidth
  );
  doc.text(day2MorningSnacks, col2X, dayY);
  dayY += Math.max(day2MorningSnacks.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Lunch:", col2X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day2Lunch = doc.splitTextToSize(
    formData.dietary.day2.lunch || "-",
    colWidth
  );
  doc.text(day2Lunch, col2X, dayY);
  dayY += Math.max(day2Lunch.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Snacks:", col2X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day2AfternoonSnacks = doc.splitTextToSize(
    formData.dietary.day2.afternoonSnacks || "-",
    colWidth
  );
  doc.text(day2AfternoonSnacks, col2X, dayY);
  dayY += Math.max(day2AfternoonSnacks.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Dinner:", col2X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day2Dinner = doc.splitTextToSize(
    formData.dietary.day2.dinner || "-",
    colWidth
  );
  doc.text(day2Dinner, col2X, dayY);
  dayY += Math.max(day2Dinner.length * 4, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Snacks:", col2X, dayY);
  dayY += 5;
  doc.setFont("helvetica", "normal");
  const day2EveningSnacks = doc.splitTextToSize(
    formData.dietary.day2.eveningSnacks || "-",
    colWidth
  );
  doc.text(day2EveningSnacks, col2X, dayY);

  // Save the PDF
  const fileName = `new_patient_form_${formData.patientName.replace(/\s+/g, "_")}_${formData.date}.pdf`;
  doc.save(fileName);
}
