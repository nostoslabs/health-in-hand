"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PHONE, BUSINESS_HOURS, ADDRESS, CITY_STATE_ZIP } from "@/lib/constants";
import { NewPatientWebForm } from "@/components/forms/NewPatientWebForm";
import { useState } from "react";

export default function NewPatientFormPage() {
  const [showWebForm, setShowWebForm] = useState(false);

  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
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
                healthcare needs. To help us serve you better, please complete
                our New Patient Introduction Form before your first
                appointment.
              </p>
              <p className="text-muted-foreground">
                You can either fill out the form online and generate a PDF, or
                download the blank PDF to complete by hand.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Choose Your Option</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold">Fill Out Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete the form online and generate a PDF to print or email.
                  </p>
                  <Button
                    onClick={() => setShowWebForm(true)}
                    size="lg"
                    className="w-full"
                  >
                    Fill Out Online
                  </Button>
                </div>
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold">Download PDF</h3>
                  <p className="text-sm text-muted-foreground">
                    Download the blank PDF form to print and complete by hand.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <a
                      href="/pdfs/new_patient_intro_form_hih.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                If you have questions, please call us at {PHONE}
              </p>
            </CardContent>
          </Card>

          {showWebForm && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-serif text-2xl font-bold text-primary">
                  Complete Form Online
                </h2>
                <Button
                  onClick={() => setShowWebForm(false)}
                  variant="outline"
                  size="sm"
                >
                  Hide Form
                </Button>
              </div>
              <NewPatientWebForm />
            </div>
          )}

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
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                  <p className="text-sm text-muted-foreground">{CITY_STATE_ZIP}</p>
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
