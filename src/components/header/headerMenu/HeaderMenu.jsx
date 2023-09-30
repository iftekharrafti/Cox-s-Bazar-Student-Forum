import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Style from "./headerMenu.module.css";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";
import { NavDropdown } from "react-bootstrap";

const HeaderMenu = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const { data, loading } = useFetch("/home/csfdu");

  useEffect(() => {
    const { pathname } = router;
    setActiveItem(pathname);
  }, [router]);

  return (
    <Navbar collapseOnSelect expand="lg" className={Style.navbar}>
      <Container>
        <Navbar.Brand className={Style.menuBrand} style={{ color: "#fff" }}>
          {data?.admin?.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`${Style.nav} me-auto`}>
            <Nav>
              <Link href="/" className={activeItem === "/" ? Style.active : ""}>
                হোম
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/advisor"
                className={activeItem === "/advisor" ? Style.active : ""}
              >
                উপদেষ্টামন্ডলী
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/alumni"
                className={activeItem === "/alumni" ? Style.active : ""}
              >
                এলামনাই
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/executive"
                className={activeItem === "/executive" ? Style.active : ""}
              >
                কার্যনির্বাহী কমিটি
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/magazine"
                className={activeItem === "/magazine" ? Style.active : ""}
              >
                ম্যাগাজিন
              </Link>
            </Nav>
            <Nav className={`${Style.dropdown} d-flex`}>
              <NavDropdown title="অন্যান্য তথ্য" id="basic-nav-dropdown"  className={Style.customDropdown} show={isDropdownOpen}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                {/* <div  style={{backgroundColor: 'red'}}> */}
                <NavDropdown.Item className={`${Style.dropdownItem} py-2 px-3`}>
                  <Link href="/senior">সিনিয়র সদস্য</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className={`${Style.dropdownItem} py-2 px-3`}>
                  <Link href="/general">সাধারণ সদস্য</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className={`${Style.dropdownItem} py-2 px-3`}>
                  <Link href="/expre">সাবেক সভাপতি ও সাধারণ সম্পাদক বৃন্দ</Link>
                </NavDropdown.Item>
                {/* </div> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Link
                href="/notice"
                className={activeItem === "/notice" ? Style.active : ""}
              >
                নোটিশ
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/history"
                className={activeItem === "/history" ? Style.active : ""}
              >
                সংগঠনটির ইতিহাস
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/bank"
                className={activeItem === "/bank" ? Style.active : ""}
              >
                ব্যাংক একাউন্ট
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/registration"
                className={activeItem === "/registration" ? Style.active : ""}
              >
                রেজিস্ট্রেশন
              </Link>
            </Nav>
            <Nav>
              <Link
                href="/application"
                className={activeItem === "/application" ? Style.active : ""}
              >
                সদস্য আবেদন
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;

//  <Navbar collapseOnSelect sticky="top" data-bs-theme="dark" className={Style.navbar}>
//       <Container>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
