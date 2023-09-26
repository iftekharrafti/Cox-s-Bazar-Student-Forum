import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Style from "./headerMenu.module.css";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";

const HeaderMenu = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');

  const { data, loading } = useFetch("/home/csfdu");

  useEffect(() =>{
    const {pathname} = router;
    setActiveItem(pathname);
  },[router])


  return (
    <Navbar collapseOnSelect expand="lg"  className={Style.navbar}>
    <Container>
      <Navbar.Brand className={Style.menuBrand}>{data?.admin?.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className={`${Style.nav} me-auto`}>
          <Nav>
            <Link href="/" className={activeItem === '/' ? Style.active : ''}>হোম</Link>
          </Nav>
          <Nav>
            <Link href="/advisor"  className={activeItem === '/advisor' ? Style.active : ''}>উপদেষ্টামন্ডলী</Link>
          </Nav>
          <Nav>
            <Link href="/alumni"  className={activeItem === '/alumni' ? Style.active : ''}>এলামনাই</Link>
          </Nav>
          <Nav>
            <Link href="/executive"  className={activeItem === '/executive' ? Style.active : ''}>কার্যনির্বাহী কমিটি</Link>
          </Nav>
          <Nav>
            <Link href="/magazine"  className={activeItem === '/magazine' ? Style.active : ''}>ম্যাগাজিন</Link>
          </Nav>
          <Nav className={`${Style.dropdown} d-flex`}>
            <Link href="/executive" className={Style.dropbtn}>
              অন্যান্য তথ্য
            </Link>
            <div class={Style.dropdownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </Nav>
          <Nav>
            <Link href="/notice" className={activeItem === '/notice' ? Style.active : ''}>নোটিশ</Link>
          </Nav>
          <Nav>
            <Link href="/history" className={activeItem === '/history' ? Style.active : ''}>সংগঠনটির ইতিহাস</Link>
          </Nav>
          <Nav>
            <Link href="/bank" className={activeItem === '/bank' ? Style.active : ''}>ব্যাংক একাউন্ট</Link>
          </Nav>
          <Nav>
            <Link href="/registration" className={activeItem === '/registration' ? Style.active : ''}>রেজিস্ট্রেশন</Link>
          </Nav>
          <Nav>
            <Link href="/application" className={activeItem === '/application' ? Style.active : ''}>সদস্য আবেদন</Link>
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