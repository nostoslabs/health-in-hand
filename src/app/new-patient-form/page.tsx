import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PHONE, BUSINESS_HOURS, LOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Patient Intro Form",
  description:
    "Download our new patient introduction form to complete before your first appointment at Health in Hand.",
};

export default function NewPatientFormPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            New Patient Intro Form
          </h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Welcome New Patients!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Thank you for choosing Health in Hand for your natural
                healthcare needs. To help us serve you better, please download
                and complete our New Patient Introduction Form before your first
                appointment.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Download Form</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Click the button below to download the PDF form. Print and
                  complete all sections, then bring it to your first
                  appointment.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="/new_patient_intro_form_hih.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF Form
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  If you have questions, please call us at {PHONE}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">First Appointment</h3>
                  <p className="text-sm text-muted-foreground">
                    During your initial consultation, we will:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                    <li>Review your completed intake form</li>
                    <li>Discuss your health concerns and goals</li>
                    <li>
                      Perform appropriate diagnostic testing (NRT, EDS,
                      Iridology, etc.)
                    </li>
                    <li>Create a personalized natural health protocol</li>
                    <li>Answer any questions you may have</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">What to Bring</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Completed New Patient Intro Form</li>
                    <li>List of current medications and supplements</li>
                    <li>
                      Recent lab work or medical records (if available)
                    </li>
                    <li>Health insurance information (if applicable)</li>
                    <li>Questions or concerns you&apos;d like to address</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scheduling Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm">Business Hours</p>
                  <p className="text-sm text-muted-foreground">
                    {BUSINESS_HOURS.weekdays}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {BUSINESS_HOURS.weekend}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground">{PHONE}</p>
                </div>

                <div>
                  <p className="font-semibold text-sm">Location</p>
                  <p className="text-sm text-muted-foreground">{LOCATION}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (between Huntsville and Cullman)
                  </p>
                </div>

                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href={`tel:${PHONE.replace(/\D/g, "")}`}>
                      Call to Schedule
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
