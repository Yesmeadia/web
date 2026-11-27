"use client";

import Image from "next/image";
import { useState } from "react";
import "./TeachingReinforcement.scss";

interface ProgramImageProps {
  src: string;
  alt: string;
  className?: string;
  variant: "logo" | "photo";
}

function ProgramImage({ src, alt, className = "", variant }: ProgramImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`tr_image_placeholder tr_image_placeholder--${variant} ${className}`}>
        <span>{src}</span>
      </div>
    );
  }

  if (variant === "logo") {
    return (
      <Image
        src={src}
        alt={alt}
        width={360}
        height={220}
        priority
        className={className}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

const stepRows = [
  { duration: "Year 1", hours: "60 hrs", focus: "Foundation & pedagogy" },
  { duration: "Year 2", hours: "60 hrs", focus: "Innovation & mentorship" },
  { duration: "Year 3", hours: "60 hrs", focus: "Leadership & systems" },
];

const yliftRows = [
  {
    layer: "Layer 1",
    timeSpan: "3 years",
    position: "Strong Classroom Teacher",
    identity: "Model Practitioner",
  },
  {
    layer: "Layer 2",
    timeSpan: "3 years",
    position: "School Admin",
    identity: "School-Level Trainer",
  },
  {
    layer: "Layer 3",
    timeSpan: "2 years",
    position: "Zonal Level Trainer",
    identity: "Inter-zone Trainer",
  },
  {
    layer: "Layer 4",
    timeSpan: "—",
    position: "Senior Trainer",
    identity: "Inter-zone & Inter-state trainer",
  },
];

const yknotRows = [
  {
    tier: "Tier 1",
    hours: "30 hrs",
    layer: "Foundational",
    role: "Teaching and Co worker",
  },
  {
    tier: "Tier 2",
    hours: "30 hrs",
    layer: "Operational",
    role: "Faculty Heads",
  },
  {
    tier: "Tier 3",
    hours: "30 hrs",
    layer: "Administrational",
    role: "Academics Coordinator",
  },
  {
    tier: "Tier 4",
    hours: "—",
    layer: "Principal/Administrator",
    role: "Head of the School",
  },
];

const summits = [
  { name: "Northern Summit", month: "March" },
  { name: "Southern Summit", month: "May" },
  { name: "All India Summit", month: "October" },
];

export default function TeachingReinforcement() {
  return (
    <div className="teaching_reinforcement_section">
      <div className="tr_section_header">
        <span className="tr_eyebrow">Faculty &amp; Leadership Development</span>
        <h2>Teaching Reinforcement</h2>
      </div>

      {/* STEP */}
      <div className="tr_program_row">
        <div className="tr_program_media">
          <div className="tr_photo_box">
            <ProgramImage
              src="/teaching_reinforcement/step_program.jpg"
              alt="STEP Training Program"
              variant="photo"
            />
          </div>
        </div>

        <div className="tr_program_details">
          <div className="tr_program_top">
            <div className="logo_wrapper">
              <ProgramImage
                src="/step.png"
                alt="STEP - Smart Teaching Enrichment Program"
                variant="logo"
              />
            </div>
            <div className="tr_program_meta">
              <p className="tr_subtitle">Smart Teaching Enrichment Program</p>
              <span className="tr_audience_badge">For Mentors</span>
            </div>
          </div>

          <div className="tr_table_wrapper">
            <table>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Training Hours</th>
                  <th>Focus</th>
                </tr>
              </thead>
              <tbody>
                {stepRows.map((row) => (
                  <tr key={row.duration}>
                    <td>{row.duration}</td>
                    <td>{row.hours}</td>
                    <td>{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Y-LIFT */}
      <div className="tr_program_row tr_program_row--reverse">
        <div className="tr_program_media">
          <div className="tr_photo_box">
            <ProgramImage
              src="/teaching_reinforcement/ylift_program.jpg"
              alt="Y-LIFT Training Program"
              variant="photo"
            />
          </div>
        </div>

        <div className="tr_program_details">
          <div className="tr_program_top">
            <div className="logo_wrapper">
              <ProgramImage
                src="/ylift_logo.png"
                alt="Y-LIFT - Yesians' Leadership in Improving Faculty Teaching"
                variant="logo"
              />
            </div>
            <div className="tr_program_meta">
              <p className="tr_subtitle">
                Yesians&apos; Leadership in Improving Faculty Teaching
              </p>
              <span className="tr_audience_badge">For Trainers</span>
            </div>
          </div>

          <div className="tr_table_wrapper">
            <table>
              <thead>
                <tr>
                  <th>Layers</th>
                  <th>Time span</th>
                  <th>Position</th>
                  <th>Trainer Identity</th>
                </tr>
              </thead>
              <tbody>
                {yliftRows.map((row) => (
                  <tr key={row.layer}>
                    <td>{row.layer}</td>
                    <td>{row.timeSpan}</td>
                    <td>{row.position}</td>
                    <td>{row.identity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Y-KNOT */}
      <div className="tr_program_row">
        <div className="tr_program_media">
          <div className="tr_photo_box">
            <ProgramImage
              src="/gpp/y_kot.jpg"
              alt="Y-KNOT Training Program"
              variant="photo"
            />
          </div>
        </div>

        <div className="tr_program_details">
          <div className="tr_program_top">
            <div className="logo_wrapper">
              <ProgramImage
                src="/yknot_logo.png"
                alt="Y-KNOT - Yesians' Keystone in Nurturing Outstanding Trainers"
                variant="logo"
              />
            </div>
            <div className="tr_program_meta">
              <p className="tr_subtitle">
                Yesians&apos; Keystone in Nurturing Outstanding Trainers
              </p>
            </div>
          </div>

          <div className="tr_table_wrapper">
            <table>
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Training Hours (additional to STEP)</th>
                  <th>Layer</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {yknotRows.map((row) => (
                  <tr key={row.tier}>
                    <td>{row.tier}</td>
                    <td>{row.hours}</td>
                    <td>{row.layer}</td>
                    <td>{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Administration Empowerment - P-SUMMIT */}
      <div className="tr_admin_section">
        <div className="tr_section_header">
          <span className="tr_eyebrow">Leadership Congregation</span>
          <h2>Administration Empowerment</h2>
        </div>

        <div className="tr_admin_grid">
          <div className="tr_admin_info">
            <div className="logo_wrapper logo_wrapper--summit">
              <ProgramImage
                src="/P-summit.png"
                alt="Principals' P-SUMMIT"
                variant="logo"
              />
            </div>

            <p>
              The Principals&apos; Summit is a strategic leadership congregation
              that brings together principals from across YES institutions for
              academic planning, policy alignment and professional enrichment.
              The summit serves as a platform for reflective dialogue, training,
              and collective decision-making on curriculum, governance, student
              development and institutional excellence ensuring that every campus
              moves forward with shared vision, clarity of purpose and
              disciplined execution.
            </p>

            <div className="tr_summit_schedule">
              <h4>Thrice a Year</h4>
              <div className="tr_table_wrapper">
                <table>
                  <thead>
                    <tr>
                      {summits.map((summit) => (
                        <th key={summit.name}>{summit.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {summits.map((summit) => (
                        <td key={summit.name}>{summit.month}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tr_photo_box tr_photo_box--summit">
            <ProgramImage
              src="/gpp/p_summit.jpg"
              alt="Principals' P-SUMMIT Program"
              variant="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
