import React, { useEffect, useRef, useState } from 'react'
import { accountService } from '../../../_services';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

export default function SideMenu({user}) {
    const [post, setPost] = useState([]);
    const {
        // data: categorie,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["use"],
        queryFn: () =>
        accountService.getUser(user)
          .then((res) => {
            setPost(res.data.donnee);
          }),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
    
  return (
    <>
      {/* Side navbar */}
      <nav className="navbar navbar-expand-md shadow-sm mb-4 mb-lg-0 sidenav">
            {/* Menu */}
            <a className="d-xl-none d-lg-none d-md-none text-inherit fw-bold" href="#">Menu</a>
            {/* Button */}
            <button className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#sidenav" aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fe fe-menu" />
            </button>
            {/* Collapse navbar */}
            <div className="collapse navbar-collapse" id="sidenav">
            <div className="navbar-nav flex-column">
                <span className="navbar-header">Formation</span>
                <ul className="list-unstyled ms-n2 mb-4">
                
                {/* Nav item */}
                {post.type_compte==='instructeur' && <li className="nav-item">
                    <a className="nav-link" href="/dashboard/formation">
                    <i className="fe fe-credit-card nav-icon" />
                    Formation
                    </a>
                </li>}
                
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="invoice.html">
                    <i className="fe fe-clipboard nav-icon" />
                    Invoice
                    </a>
                </li>
                
                </ul>
                {/* Navbar header */}
                <span className="navbar-header">Account Settings</span>
                <ul className="list-unstyled ms-n2 mb-0">
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard/user/profil">
                    <i className="fe fe-settings nav-icon" />
                    Edit Profile
                    </a>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="security.html">
                    <i className="fe fe-user nav-icon" />
                    Security
                    </a>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="social-profile.html">
                    <i className="fe fe-refresh-cw nav-icon" />
                    Social Profiles
                    </a>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="notifications.html">
                    <i className="fe fe-bell nav-icon" />
                    Notifications
                    </a>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="profile-privacy.html">
                    <i className="fe fe-lock nav-icon" />
                    Profile Privacy
                    </a>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="delete-profile.html">
                    <i className="fe fe-trash nav-icon" />
                    Delete Profile
                    </a>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="linked-accounts.html">
                    <i className="fe fe-user nav-icon" />
                    Linked Accounts
                    </a>
                </li>
                {/* Nav item */}
                <li className="nav-item">
                    <a className="nav-link" href="../index.html">
                    <i className="fe fe-power nav-icon" />
                    Sign Out
                    </a>
                </li>
                </ul>
            </div>
            </div>
      </nav>

    </>
  )
}
