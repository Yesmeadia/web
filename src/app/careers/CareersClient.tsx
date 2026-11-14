"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface CareerFormValues {
  name: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  experience: string;
  message: string;
}

export default function CareersClient() {
  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    phone: Yup.string()
      .min(10, "Please enter a valid phone number")
      .required("Phone number is required"),
    role: Yup.string().required("Please select your area of interest"),
    location: Yup.string().required("Please select a preferred region"),
    experience: Yup.string().required("Please select your experience level"),
    message: Yup.string()
      .max(400, "Brief bio or link cannot exceed 400 characters"),
  });

  const handleSubmit = async (
    values: CareerFormValues,
    { resetForm, setSubmitting }: FormikHelpers<CareerFormValues>
  ) => {
    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (result.success) {
        setPopup({
          show: true,
          type: "success",
          message:
            result.message ||
            "Your profile has been submitted successfully! Our HR team will reach out.",
        });
        resetForm();
      } else {
        setPopup({
          show: true,
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error("Submit Error:", err);
      setPopup({
        show: true,
        type: "error",
        message: "Failed to submit application. Please reach us via email.",
      });
    }

    setSubmitting(false);
  };

  return (
    <>
      {/* POPUP MODAL */}
      {popup.show && (
        <div className="popup_overlay">
          <div className={`popup_card ${popup.type}`}>
            <h3>{popup.type === "success" ? "✔ Application Sent" : "✖ Notice"}</h3>
            <p>{popup.message}</p>
            <button
              type="button"
              onClick={() => setPopup({ ...popup, show: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ====== HERO BANNER ====== */}
      <section className="careers_banner_container">
        <div>
          {/* Background Wavy Lines */}
          <div className="waves">
            {[1, 2, 3, 4, 5].map((line) => (
              <svg
                key={line}
                className={`wave_line line${line}`}
                viewBox="0 0 1441 538"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M147.779 87.8706C300.314 51.7182 452.224 7.0047 610.41 30.4613C689.498 42.1888 770.151 70.9571 850.535 97.57C930.944 124.191 1011.09 148.659 1089.26 151.86C1245.6 158.264 1394.15 79.5992 1468.5 40.2236L1542.83 0.855829L1543.5 0.499615L1581.24 410.459L1505.95 415.62L1505.85 414.624L1580.15 409.532L1542.64 2.09474L1468.98 41.1072C1394.67 80.4674 1245.89 159.274 1089.24 152.858C1010.91 149.65 930.64 125.135 850.239 98.516C769.813 71.8891 689.263 43.1598 610.284 31.4485C452.338 8.02749 300.656 52.6692 148.032 88.8426C-4.56184 125.009 -157.938 152.659 -234.619 166.483L-310.861 180.228L-278.027 536.895L-204.919 531.884L-204.827 532.88L-278.933 537.959L-311.941 179.404L-311.501 179.325L-234.819 165.501C-158.137 151.677 -4.78582 124.03 147.779 87.8706Z"
                />
              </svg>
            ))}
          </div>

          {/* Left Icon - Arrows/Direction */}
          <div className="floating_icon icon_left" title="Leadership & Guidance">
            <svg
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.833 27.1667C18.5274 27.4722 18.1385 27.625 17.6663 27.625C17.1941 27.625 16.8052 27.4722 16.4996 27.1667L9.33298 19.9584C9.02743 19.6528 8.78465 19.2989 8.60465 18.8967C8.42465 18.4945 8.33409 18.0706 8.33298 17.625L8.33298 6.45836L5.20798 9.58336C4.87465 9.91669 4.47909 10.0834 4.02132 10.0834C3.56354 10.0834 3.16743 9.91669 2.83298 9.58336C2.49854 9.25003 2.33187 8.86114 2.33298 8.41669C2.33409 7.97225 2.50076 7.58336 2.83298 7.25003L8.83298 1.20836C8.99965 1.04169 9.18021 0.923914 9.37465 0.855026C9.56909 0.786137 9.77743 0.751137 9.99965 0.750026C10.2219 0.748915 10.4302 0.783914 10.6247 0.855026C10.8191 0.926137 10.9996 1.04391 11.1663 1.20836L17.1663 7.16669C17.4996 7.50003 17.6663 7.89614 17.6663 8.35503C17.6663 8.81391 17.4996 9.20947 17.1663 9.54169C16.833 9.87392 16.4374 10.0478 15.9796 10.0634C15.5219 10.0789 15.1258 9.91891 14.7913 9.58336L11.6663 6.45836L11.6663 17.6667L18.833 24.8334C19.1385 25.1389 19.2913 25.5278 19.2913 26C19.2913 26.4722 19.1385 26.8611 18.833 27.1667ZM1.16632 27.2084C0.832982 26.875 0.672983 26.4795 0.686316 26.0217C0.69965 25.5639 0.859649 25.1817 1.16632 24.875L4.12465 21.875C4.45798 21.5417 4.85409 21.375 5.31298 21.375C5.77187 21.375 6.16743 21.5417 6.49965 21.875C6.83187 22.2084 6.99187 22.6045 6.97965 23.0634C6.96743 23.5222 6.79354 23.9178 6.45798 24.25L3.49965 27.2084C3.19409 27.5139 2.80521 27.6667 2.33298 27.6667C1.86076 27.6667 1.47187 27.5139 1.16632 27.2084Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Heading Section */}
        <div className="banner_content">
          <h1>
            Careers at <br />
            <span>YES India Foundation</span>
          </h1>
        </div>

        {/* Top Right Icon - Growth Arrow */}
        <div className="floating_icon icon_top_right" title="Growth & Excellence">
          <svg
            width="32"
            height="18"
            viewBox="0 0 32 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.142717 13.8203L15.0713 13.8203L24.8927 3.99888L20.4731 3.99888V0.0703126L31.5713 0.0703125V11.1685L27.6427 11.1685V6.74888L17.7722 16.6194C17.4121 16.9795 16.9943 17.2578 16.519 17.4542C16.0436 17.6507 15.5447 17.7489 15.0222 17.7489L0.142717 17.7489V13.8203Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Bottom Right Icon - Target/Focus */}
        <div className="floating_icon icon_bottom_right" title="Purpose-Driven Mission">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8213 30.812C11.9858 30.5864 9.27477 29.5515 7.01015 27.8304C4.74553 26.1094 3.02255 23.7744 2.04593 21.1029C1.0693 18.4314 0.880076 15.5357 1.50073 12.7598C2.12138 9.98396 3.52583 7.4446 5.54721 5.44343C7.56859 3.44227 10.1219 2.06341 12.9039 1.47069C15.6859 0.877964 18.5795 1.09628 21.241 2.09971C23.9026 3.10313 26.2201 4.84949 27.9184 7.13129C29.6166 9.41309 30.8213 14.972"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5089 22.3777C12.4465 21.965 11.5037 21.2939 10.7659 20.4252C10.028 19.5565 9.51832 18.5176 9.28289 17.4025C9.04746 16.2873 9.09372 15.131 9.41748 14.0382C9.74124 12.9454 10.3323 11.9505 11.1372 11.1436C11.9421 10.3366 12.9354 9.74299 14.0274 9.41641C15.1194 9.08984 16.2755 9.04061 17.3913 9.27316C18.5071 9.50572 19.5473 10.0127 20.4179 10.7483C21.2884 11.484 21.9619 12.425 22.3774 13.4863M16.0003 16.0006L21.7146 21.7149M21.7146 21.7149L20.5717 26.2863L25.1431 30.8577L26.286 26.2863L30.8574 25.1434L26.286 20.572L21.7146 21.7149Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ====== INTRO TEXT SECTION (matching about.tsx layout) ====== */}
      <section className="wrapper_section">
        <div className="careers_contents_wrapper">
          <p>
            <span>YES India Foundation</span> is an educational and humanitarian initiative dedicated to the
            educational and social upliftment of backward and marginalized communities across India. Fostering
            quality learning and ethical leadership requires devoted educators, mentors, administrators, and
            social innovators who believe in empowering humanity through knowledge. Careers at YES India
            Foundation offer purpose, professional dignity, and holistic growth. With a flourishing network of
            53+ institutions spanning 8 Indian states, our team guides over 16,000 students to become competent,
            value-driven leaders capable of excelling in the modern world.
          </p>
        </div>
      </section>

      {/* ====== TWO COLUMN CULTURE SECTION (matching about.tsx milestone_section) ====== */}
      <section className="careers_milestone_style wrapper_section">
        <div>
          <h2>
            Empowering <br /> Educators & Leaders
          </h2>
          <p>Value-Based Professional Growth</p>
        </div>
        <div>
          <p>
            Whether you are an accomplished educator, an institutional coordinator, or an administrator
            passionate about community upliftment, YES India Foundation offers a vibrant platform. We focus
            on continuous pedagogical training, collaborative decision-making, and institutional empowerment.
            Working with us means taking part in a grassroots national movement that turns educational hope into
            tangible reality.
          </p>
        </div>
      </section>

      {/* ====== PILLARS / WHY WORK WITH US ====== */}
      <section className="careers_pillars_section wrapper_section">
        <div className="section_header">
          <h2>
            Why Work With <br /> <span>YES India Foundation?</span>
          </h2>
          <p>
            We cultivate an environment where personal dedication translates into widespread community transformation.
          </p>
        </div>

        <div className="pillars_grid">
          <div className="pillar_card">
            <div className="icon_wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9Z"></path>
                <path d="M12 7v5l3 3"></path>
              </svg>
            </div>
            <h4>Purpose-Driven Mission</h4>
            <p>
              Directly impact students who need mentorship the most. Every day contributes to bridging
              educational inequality and uplifting deserving youngsters.
            </p>
          </div>

          <div className="pillar_card">
            <div className="icon_wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h4>Pan-India Presence</h4>
            <p>
              Collaborate across 8 Indian states—from Jammu & Kashmir to Kerala, Delhi, Bihar, and West Bengal—enriching
              your cultural and professional horizons.
            </p>
          </div>

          <div className="pillar_card">
            <div className="icon_wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <polyline points="16 11 18 13 22 9"></polyline>
              </svg>
            </div>
            <h4>Leadership & Growth</h4>
            <p>
              We prioritize continuous educator development, institutional workshops, and transparent
              pathways to senior academic coordination and administrative leadership.
            </p>
          </div>

          <div className="pillar_card">
            <div className="icon_wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h4>Supportive Culture</h4>
            <p>
              Join a warm, ethical, and collaborative community where well-being, mutual respect,
              and professional support form the foundation of our work ethos.
            </p>
          </div>
        </div>
      </section>

      {/* ====== CURRENT OPENINGS STATUS (NO MOCK / HARDCODED DATA) ====== */}
      <section className="careers_status_section wrapper_section">
        <div className="status_banner_card">
          <div className="status_info">
            <h3>Looking for Dedicated Educators & Leaders</h3>
            <p>
              To maintain current and accurate recruitment notices, YES India Foundation accepts
              applications through our ongoing talent network rather than displaying static mock listings.
              We regularly intake educators, residential coordinators, administrators, and welfare
              officers for campus drives and academic session requirements across India.
            </p>
          </div>
          <div className="status_cta">
            <a href="#apply">Submit Profile</a>
          </div>
        </div>
      </section>

      {/* ====== APPLICATION / EXPRESSION OF INTEREST FORM ====== */}
      <section className="careers_form_section wrapper_section" id="apply">
        <div className="form_container">
          <div className="form_header">
            <h2>
              Career Application & <br />
              <span>Expression of Interest</span>
            </h2>
            <p>
              Submit your credentials directly to our Central Human Resources cell.
              We review applications on a rolling basis for all current and upcoming institutional requirements.
            </p>
          </div>

          <Formik<CareerFormValues>
            initialValues={{
              name: "",
              email: "",
              phone: "",
              role: "",
              location: "",
              experience: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched, values }) => (
              <Form className="careers_form">
                {/* ROW 1: NAME & EMAIL */}
                <div className="form_row">
                  <div className="input_group">
                    <label htmlFor="name">Full Name *</label>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={errors.name && touched.name ? "input_error" : ""}
                    />
                    <ErrorMessage name="name" component="div" className="error_text" />
                  </div>

                  <div className="input_group">
                    <label htmlFor="email">Email Address *</label>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={errors.email && touched.email ? "input_error" : ""}
                    />
                    <ErrorMessage name="email" component="div" className="error_text" />
                  </div>
                </div>

                {/* ROW 2: PHONE & ROLE */}
                <div className="form_row">
                  <div className="input_group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <Field
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className={errors.phone && touched.phone ? "input_error" : ""}
                    />
                    <ErrorMessage name="phone" component="div" className="error_text" />
                  </div>

                  <div className="input_group">
                    <label htmlFor="role">Area of Interest / Role *</label>
                    <Field
                      as="select"
                      id="role"
                      name="role"
                      className={errors.role && touched.role ? "input_error" : ""}
                    >
                      <option value="">Select an area of interest</option>
                      <option value="Teaching Faculty / Subject Teacher">Teaching Faculty / Subject Teacher</option>
                      <option value="Academic Coordinator">Academic Coordinator</option>
                      <option value="Center Administrator / Principal">Center Administrator / Principal</option>
                      <option value="Student Welfare & Counselor">Student Welfare & Counselor</option>
                      <option value="Institutional Operations & Logistics">Institutional Operations & Logistics</option>
                      <option value="Finance & Accounts">Finance & Accounts</option>
                      <option value="Other Humanitarian / Social Work">Other Humanitarian / Social Work</option>
                    </Field>
                    <ErrorMessage name="role" component="div" className="error_text" />
                  </div>
                </div>

                {/* ROW 3: LOCATION & EXPERIENCE */}
                <div className="form_row">
                  <div className="input_group">
                    <label htmlFor="location">Preferred Location / State *</label>
                    <Field
                      as="select"
                      id="location"
                      name="location"
                      className={errors.location && touched.location ? "input_error" : ""}
                    >
                      <option value="">Select location preference</option>
                      <option value="Any State (Flexible / Open to Relocation)">Any State (Flexible / Open to Relocation)</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerelam">Kerelam</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                    </Field>
                    <ErrorMessage name="location" component="div" className="error_text" />
                  </div>

                  <div className="input_group">
                    <label htmlFor="experience">Years of Experience *</label>
                    <Field
                      as="select"
                      id="experience"
                      name="experience"
                      className={errors.experience && touched.experience ? "input_error" : ""}
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher / Entry Level">Fresher / Entry Level</option>
                      <option value="1 - 3 Years">1 - 3 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                      <option value="10+ Years (Senior / Leadership)">10+ Years (Senior / Leadership)</option>
                    </Field>
                    <ErrorMessage name="experience" component="div" className="error_text" />
                  </div>
                </div>

                {/* ROW 4: BIO / PORTFOLIO / RESUME LINK */}
                <div className="input_group">
                  <label htmlFor="message">Brief Introduction / Resume Link / LinkedIn Profile</label>
                  <div className="message_wrapper">
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={400}
                      placeholder="Share a brief overview of your qualifications, teaching subjects, or paste a link to your Google Drive resume / LinkedIn profile."
                      className={errors.message && touched.message ? "input_error" : ""}
                    />
                    <div className={`char_count ${values.message.length >= 400 ? "limit_reached" : ""}`}>
                      {values.message.length}/400
                    </div>
                  </div>
                  <ErrorMessage name="message" component="div" className="error_text" />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="submit_btn_wrapper">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting Application..."
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      {/* ====== RECRUITMENT PROCESS ====== */}
      <section className="careers_process_section wrapper_section">
        <div className="section_header">
          <h2>
            Our Transparent <br /> <span>Recruitment Process</span>
          </h2>
          <p>A systematic and supportive journey designed to understand your pedagogical strengths and mission alignment.</p>
        </div>

        <div className="process_grid">
          <div className="process_step">
            <div className="step_number">01</div>
            <h4>Profile Screening</h4>
            <p>Our Human Resources desk reviews your background, academic qualifications, and location preferences.</p>
          </div>

          <div className="process_step">
            <div className="step_number">02</div>
            <h4>Exploratory Dialogue</h4>
            <p>A personal discussion to understand your educational philosophy, career aspirations, and cultural alignment.</p>
          </div>

          <div className="process_step">
            <div className="step_number">03</div>
            <h4>Demo & Assessment</h4>
            <p>For faculty and coordinators, a short demonstration class or case discussion with academic leadership.</p>
          </div>

          <div className="process_step">
            <div className="step_number">04</div>
            <h4>Welcome & Onboarding</h4>
            <p>Receive your formal appointment letter, campus placement briefing, and mission orientation.</p>
          </div>
        </div>
      </section>

      {/* ====== DIRECT HR INQUIRIES ====== */}
      <section className="careers_inquiry_section wrapper_section">
        <div className="inquiry_box">
          <div className="inquiry_text">
            <h4>Have Direct Questions About Working With Us?</h4>
            <p>Reach out directly to the YES India Foundation Directorate of Human Resources.</p>
          </div>
          <div className="inquiry_channels">
            <a href="mailto:info@yesindiafoundation.com" className="channel_item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>info@yesindiafoundation.com</span>
            </a>
            <a href="tel:+919895662111" className="channel_item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91 989 566 2111</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
