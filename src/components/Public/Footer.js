import React from 'react'

export default function Footer() {
  return (
    <>
    {/* Footer */}
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center g-0 border-top py-2">
        {/* Desc */}
        <div className="col-md-6 col-12 text-center text-md-start">
          <span>
            ©
            <span id="copyright">
            </span>
            Geeks. All Rights Reserved.
          </span>
        </div>
        {/* Links */}
        <div className="col-12 col-md-6">
          <nav className="nav nav-footer justify-content-center justify-content-md-end">
            <a className="nav-link active ps-0" href="#!">Privacy</a>
            <a className="nav-link" href="#!">Terms</a>
            <a className="nav-link" href="#!">Feedback</a>
            <a className="nav-link" href="#!">Support</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}
