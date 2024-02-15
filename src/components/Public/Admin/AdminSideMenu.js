import React from 'react'

export default function AdminSideMenu() {
  return (
    <>
      {/* Sidebar */}
      <nav className="navbar-vertical navbar">
        <div className="vh-100" data-simplebar>
          {/* Brand logo */}
          <a className="navbar-brand" href="/">
            <img src="../../assets/images/brand/logo/logo-inverse.svg" alt="Geeks" />
          </a>
          {/* Navbar nav */}
          <ul className="navbar-nav flex-column" id="sideNavbar">
            <li className="nav-item">
              <a className="nav-link" href="/admin/dashboard" >
                <i className="nav-icon fe fe-home me-2" />
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navCourses" aria-expanded="false" aria-controls="navCourses">
                <i className="nav-icon fe fe-book me-2" />
                Categorie
              </a>
              <div id="navCourses" className="collapse" data-bs-parent="#sideNavbar">
                <ul className="nav flex-column">
                  
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/formation/categorie">Liste Categorie</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/sous-categorie/index">SousCategorie</a>
                  </li>
                  
                </ul>
              </div>
            </li>
            {/* Nav item */}
            <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navProfile" aria-expanded="false" aria-controls="navProfile">
                <i className="nav-icon fe fe-user me-2" />
                User
              </a>
              <div id="navProfile" className="collapse" data-bs-parent="#sideNavbar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/user/index">Liste</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/admin/user/add">Ajouter</a>
                  </li> */}
                </ul>
              </div>
            </li>
            {/* Nav item */}
            <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navCMS" aria-expanded="false" aria-controls="navCMS">
                <i className="nav-icon fe fe-book-open me-2" />
                Formation
              </a>
              <div id="navCMS" className="collapse" data-bs-parent="#sideNavbar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="/admin/formation/index">Liste des formations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/admin/formation/slider">Slider</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/admin/chapitre-0/index">Liste Pour modifier</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">New Post</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Category</a>
                  </li> */}
                </ul>
              </div>
            </li>
            {/* Nav item */}
            <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navProject" aria-expanded="false" aria-controls="navProject">
                <i className="nav-icon fe fe-file me-2" />
                Les anciens sujets
              </a>
              <div id="navProject" className="collapse" data-bs-parent="#sideNavbar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/ancien_sujet/type">Type</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/admin/ancien_sujet/niveau">Niveau</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navprojectSingle" aria-expanded="false" aria-controls="navprojectSingle">Single</a>
                    <div id="navprojectSingle" className="collapse" data-bs-parent="#navProject">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Overview</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Task</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Budget</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Team</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Files</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Summary</a>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">Matiere</a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Nav item */}
            {/* <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navAuthentication" aria-expanded="false" aria-controls="navAuthentication">
                <i className="nav-icon fe fe-lock me-2" />
                Authentication
              </a>
              <div id="navAuthentication" className="collapse" data-bs-parent="#sideNavbar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sign Up</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Forget Password</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Notifications</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">404 Error</a>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* Nav item */}
            {/* <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navecommerce" aria-expanded="false" aria-controls="navecommerce">
                <i className="nav-icon fe fe-shopping-bag me-2" />
                Ecommerce
              </a>
              <div id="navecommerce" className="collapse" data-bs-parent="#sideNavbar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navproduct" aria-expanded="false" aria-controls="navproduct">Product</a>
                    <div id="navproduct" className="collapse" data-bs-parent="#navProduct">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="#">Grid</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Grid Sidebar</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="../../pages/dashboard/ecommerce/product-single.html">Product Single</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Product Single v2</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Add Product</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Shopping Cart</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Checkout</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Order</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Order Single</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Order History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Order Summary</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Customers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Customer Single</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Add Customer</a>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* Nav item */}
            {/* <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navlayouts" aria-expanded="false" aria-controls="navlayouts">
                <i className="nav-icon fe fe-layout me-2" />
                Layouts
              </a>
              <div id="navlayouts" className="collapse" data-bs-parent="#sideNavbar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Top</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Compact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Vertical</a>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* Nav item */}
            {/* <li className="nav-item">
              <div className="nav-divider" />
            </li> */}
            
          </ul>
          {/* Card */}
          {/* <div className="card bg-dark-primary shadow-none text-center mx-4 my-8">
            <div className="card-body py-6">
              <img src="../../assets/images/background/giftbox.png" alt />
              <div className="mt-4">
                <h5 className="text-white">Unlimited Access</h5>
                <p className="text-white-50 fs-6">Upgrade your plan from a Free trial, to select ‘Business Plan’. Start Now</p>
                <a href="#" className="btn btn-white btn-sm mt-2">Upgrade Now</a>
              </div>
            </div>
          </div> */}
        </div>
      </nav>

    </>
  )
}
