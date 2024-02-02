import React from 'react'

export default function Error() {
  return (
    <>
  {/* Page Content */}
  <main>
    <section className="container d-flex flex-column vh-100">
      <div className="row">
        <div className="offset-xl-1 col-xl-10 col-md-12 col-12">
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <a href="../index.html"><img src="../assets/images/brand/logo/logo.svg" alt="logo" className="logo-inverse" /></a>
            <div className>
              <div className="dropdown">
                <button className="btn btn-light btn-icon rounded-circle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                  <i className="bi theme-icon-active" />
                  <span className="visually-hidden bs-theme-text">Toggle theme</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
                  <li>
                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                      <i className="bi theme-icon bi-sun-fill" />
                      <span className="ms-2">Light</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                      <i className="bi theme-icon bi-moon-stars-fill" />
                      <span className="ms-2">Dark</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                      <i className="bi theme-icon bi-circle-half" />
                      <span className="ms-2">Auto</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-center g-0 h-lg-100 py-10">
        {/* Docs */}
        <div className="offset-xl-1 col-xl-4 col-lg-6 col-md-12 col-12 text-center text-lg-start">
          <h1 className="display-1 mb-3">404</h1>
          <p className="mb-5 lead px-4 px-md-0">
            Oops! Sorry, we couldn’t find the page you were looking for. If you think this is a problem with us, please
            <a href="#" className="btn-link">Contact us</a>
          </p>
          <a href="../index.html" className="btn btn-primary me-2">Back to Safety</a>
        </div>
        {/* img */}
        <div className="offset-xl-1 col-xl-6 col-lg-6 col-md-12 col-12 mt-8 mt-lg-0">
          <img src="../assets/images/error/404-error-img.svg" alt="error" className="w-100" />
        </div>
      </div>
      <div className="row">
        <div className="offset-xl-1 col-xl-10 col-lg-12 col-md-12 col-12">
          <div className="row align-items-center my-6">
            <div className="col-md-6 col-8">
              <p className="mb-0">© Geeks. 2021 Codescandy.</p>
            </div>
            <div className="col-md-6 col-4 d-flex justify-content-end">
              <a href="#" className="text-primary-hover me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" className="text-primary-hover me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="#" className="text-primary-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}
