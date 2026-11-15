"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface Location {
  title: string;
  address: string;
  city: string;
  mapQuery: string;
}

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const locations: Location[] = [
    {
      title: "Registered Office",
      address: "RKP.V/720-A 12, Hanna Tower, Opp. BUS Stand Ramanatukara,",
      city: "Kozhikode -673633, Kerala",
      mapQuery: "Hanna Tower, Ramanattukara, Kozhikode, Kerala 673633",
    },
    {
      title: "Administrative Office",
      address: "5024, Plot no7, Block-B, 4th Floor Netaji Subash Marg,",
      city: "Daryaganj Central Delhi, 110002",
      mapQuery: "Netaji Subhash Marg, Daryaganj, New Delhi, 110002",
    },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(200, "Message cannot exceed 200 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (result.success) {
        setPopup({
          show: true,
          type: "success",
          message: "Your message has been sent successfully!",
        });
        resetForm();
      } else {
        setPopup({
          show: true,
          type: "error",
          message: result.message || "Something went wrong.",
        });
      }
    } catch (err) {
      console.error("Submit Error:", err);
      setPopup({
        show: true,
        type: "error",
        message: "Failed to send message. Try again later.",
      });
    }

    setSubmitting(false);
  };

  // PREMIUM POPUP COMPONENT
  const Popup = () => {
    if (!popup.show) return null;

    return (
      <div className="popup_overlay">
        <div className={`popup_card ${popup.type}`}>
          <h3>{popup.type === "success" ? "✔ Success" : "✖ Error"}</h3>
          <p>{popup.message}</p>
          <button onClick={() => setPopup({ ...popup, show: false })}>
            OK
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* POPUP */}
      <Popup />

      <section className="contact_page wrapper_section">
        <div className="contact_shell">
          {/* Left Info Panel */}
          <div className="contact_info_panel">
            <span className="contact_eyebrow">Get in Touch</span>
            <h2>Contact Us</h2>
            <p className="contact_subtitle">
              Have a question about our educational initiatives, admissions, or
              partnerships? Reach out to our team and we&apos;ll respond shortly.
            </p>

            <div className="contact_channels">
              <a
                href="mailto:info@yesindiafoundation.com"
                className="channel_item"
              >
                <div>
                  <span className="channel_label">Email Us</span>
                  <span className="channel_value">
                    info@yesindiafoundation.com
                  </span>
                </div>
              </a>

              <a href="tel:+919895662111" className="channel_item">
                <div>
                  <span className="channel_label">Call Us</span>
                  <span className="channel_value">+91 989 566 2111</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="contact_card">
            <h3>Send us a Message</h3>

            <Formik<ContactFormValues>
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, values, errors, touched }) => (
                <Form className="contact_form">
                  {/* NAME FIELD */}
                  <div className="input_container">
                    <label htmlFor="contact-name">Full Name</label>
                    <Field
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      maxLength={20}
                      className={
                        errors.name && touched.name ? "input_error" : ""
                      }
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error_text"
                    />
                  </div>

                  {/* EMAIL FIELD */}
                  <div className="input_container">
                    <label htmlFor="contact-email">Email Address</label>
                    <Field
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className={
                        errors.email && touched.email ? "input_error" : ""
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error_text"
                    />
                  </div>

                  {/* MESSAGE FIELD */}
                  <div className="input_container message_field_wrapper">
                    <label htmlFor="contact-message">Message</label>
                    <div className="textarea_box">
                      <Field
                        id="contact-message"
                        as="textarea"
                        name="message"
                        placeholder="Write your message here..."
                        rows={5}
                        maxLength={200}
                        className={
                          errors.message && touched.message ? "input_error" : ""
                        }
                      />
                      <div
                        className={`char_count ${
                          values.message.length >= 200 ? "limit_reached" : ""
                        }`}
                      >
                        {values.message.length}/200
                      </div>
                    </div>

                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error_text"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      {/* LOCATIONS SECTION */}
      <section className="wrapper_section locations_section">
        <div className="locations_heading">
          <span className="locations_eyebrow">Visit Us</span>
          <h3>Our Offices</h3>
        </div>
        <div className="map_locations_container">
          {locations.map((location, index) => (
            <div key={index} className="map_bg_wrapper">
              <div className="map_background">
                <iframe
                  title={`${location.title} location map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    location.mapQuery
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="location_details">
                <div className="location_header">
                  <h6>{location.title}</h6>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions_link"
                  >
                    Open in Maps ↗
                  </a>
                </div>
                <div className="location_address">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;


