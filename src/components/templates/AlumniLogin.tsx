"use client";
import Image from "next/image";
import React, { useState } from "react";

const ALUMNI_PORTAL_URL = "https://alumni.yesindiafoundation.com";

const AlumniLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [noticeType, setNoticeType] = useState<"none" | "empty" | "construction">("none");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() && !password.trim()) {
      setNoticeType("empty");
      return;
    }
    setNoticeType("construction");
  };

  return (
    <div className="alumni_portal_container">
      {/* Top Accent Border */}
      <div className="top_accent_border"></div>

      {/* Background Image */}
      <div className="alumni_bg_wrapper">
        <Image
          src="/alumni/alumni_login_bg.png"
          alt="Alumni celebration background"
          width={1400}
          height={750}
          priority
          className="alumni_bg_image"
        />
        <div className="alumni_bg_overlay"></div>
      </div>

      {/* Content */}
      <div className="alumni_content_wrapper">
        {/* Left Side - Title */}
        <div className="alumni_title_section">
          <h1 className="alumni_title">
            Alumni
            <br />
            Portal
          </h1>
        </div>

        {/* Right Side - Login Card */}
        <div className="alumni_login_card">
          <h2 className="login_heading">Welcome Back</h2>

          <form className="login_form" onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="input_group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (noticeType !== "none") setNoticeType("none");
                }}
                className="login_input"
              />
            </div>

            {/* Password Input */}
            <div className="input_group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (noticeType !== "none") setNoticeType("none");
                }}
                className="login_input"
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="login_button">
              Login
            </button>

            {noticeType === "empty" && (
              <div className="login_notice login_notice--warn" role="status">
                Please enter your username and password.
              </div>
            )}

            {noticeType === "construction" && (
              <div className="login_notice" role="status">
                Your account will be activated soon. Please register your account at{" "}
                <a
                  href={ALUMNI_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="login_notice_link"
                >
                  alumni.yesindiafoundation.com
                </a>
                .
              </div>
            )}

            {/* Register as Alumni Link */}
            <div className="forgot_password_wrapper">
              <span className="register_prompt">Not registered yet? </span>
              <a
                href={ALUMNI_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="forgot_password_link"
              >
                Register as Alumni
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlumniLogin;
