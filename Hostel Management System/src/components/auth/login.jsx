const LoginPage = () => {
  return (
    <div className="lp-root">
      {/* Left panel — decorative */}
      <div className="lp-panel">
        <div className="lp-panel-overlay" />
        <div className="lp-panel-content">
          <div className="lp-panel-logo">
            Shikha <span>Girls</span> Hostel
          </div>
          <p className="lp-panel-tagline">
            "A place where safety meets comfort, and strangers become family."
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="lp-form-side">
        <div className="lp-form-card">
          {/* Back link */}
          <a href="/" className="lp-back-link">
            ← Back to Home
          </a>

          {/* Header */}
          <div className="lp-form-header">
            <div className="lp-form-icon"></div>
            <h1 className="lp-form-title">Welcome back</h1>
            <p className="lp-form-sub">Sign in to your hostel account</p>
          </div>

          {/* Form */}
          <form className="lp-form">
            <div className="lp-field">
              <label className="lp-label" htmlFor="email">
                Email Address
              </label>
              <div className="lp-input-wrap">
                <input
                  className="lp-input"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="lp-field">
              <div className="lp-label-row">
                <label className="lp-label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="lp-input-wrap">
                <input
                  className="lp-input"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="lp-submit-btn">
              Sign In
            </button>

            {/* Divider */}
            <div className="lp-divider">
              <span>or</span>
            </div>

            {/* Register link */}
            <p className="lp-register-text">
              New resident?{" "}
              <a href="/book-room" className="lp-register-link">
                Book a room →
              </a>
            </p>
          </form>
        </div>

        {/* Footer note */}
        <p className="lp-footer-note">
          © {new Date().getFullYear()} Shikha Girls Hostel · All rights reserved
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
