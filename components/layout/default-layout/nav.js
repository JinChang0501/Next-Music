import React, { useState } from 'react'
import Link from 'next/link'
import { BsPersonCircle, BsBell, BsCart } from 'react-icons/bs'
import LoginModal from './login-modal'

export default function Nav() {
  // const [isActive, setIsActive] = useState(false)

  // const handleRegisterClick = () => {
  //   setIsActive(true)
  // }

  // const handleLoginClick = () => {
  //   setIsActive(false)
  // }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Eighth navbar example"
        style={{ borderBottom: '1px solid var(--Primary-03, #DBD7FF)' }}
      >
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" href="/">
            Logoo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* 分頁連結 */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/activity"
                >
                  演出活動
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/product">
                  周邊商城
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/artist">
                  音樂人
                </Link>
              </li>
            </ul>
            {/* 右方icon */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 icon-lg-size">
              <li className="icon-margin">
                <Link href="#" className="nav-link">
                  <BsCart />
                </Link>
              </li>
              <li className="icon-margin dropdown">
                <Link
                  className="nav-link"
                  href="#"
                  id="navbarDropdown01"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsBell />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                  aria-labelledby="navbarDropdown01"
                >
                  <li>
                    <Link className="dropdown-item" href="#">
                      通知1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      通知2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="icon-margin dropdown">
                <Link
                  className="nav-link"
                  href="#"
                  id="navbarDropdown02"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsPersonCircle />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                  aria-labelledby="navbarDropdown02"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/login/login-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      會員中心
                    </Link>

                    {/* <button
                      className="btn btn-primary"
                      onClick={handleRegisterClick}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      會員中心
                    </button>
                    <LoginModal
                      isActive={isActive}
                      handleRegisterClick={handleRegisterClick}
                      handleLoginClick={handleLoginClick}
                    /> */}
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      登出
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg bg-purple3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </>
  )
}
