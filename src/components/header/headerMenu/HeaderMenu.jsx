import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Style from "./headerMenu.module.css";

const HeaderMenu = () => {
  return (
    <Navbar sticky="top" data-bs-theme="dark" className={Style.navbar}>
      <Container>
        <Nav className="me-auto">
          <Nav>
            <Link href="/">হোম</Link>
          </Nav>
          <Nav>
            <Link href="/advisor">উপদেষ্টামন্ডলী</Link>
          </Nav>
          <Nav>
            <Link href="/alumni">এলামনাই</Link>
          </Nav>
          <Nav>
            <Link href="/executive">কার্যনির্বাহী কমিটি</Link>
          </Nav>
          <Nav>
            <Link href="/magazine">ম্যাগাজিন</Link>
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
            <Link href="/notice">নোটিশ</Link>
          </Nav>
          <Nav>
            <Link href="/history">সংগঠনটির ইতিহাস</Link>
          </Nav>
          <Nav>
            <Link href="/bank">ব্যাংক একাউন্ট</Link>
          </Nav>
          <Nav>
            <Link href="/registration">রেজিস্ট্রেশন</Link>
          </Nav>
          <Nav>
            <Link href="/executive">সদস্য আবেদন</Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
