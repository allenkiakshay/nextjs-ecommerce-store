"use client";
import Banner from "@/Components/HomePage/Banner";
import Bestsellers from "@/Components/HomePage/Bestsellers";
import Categories from "@/Components/HomePage/Categories";
import Fotter from "@/Components/HomePage/Footer";
import Navbar from "@/Components/HomePage/Navbar";
import { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const isTokenExpired = Date.now() >= decodedToken.exp * 1000;

      if (isTokenExpired) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
      }
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Bestsellers />
      <Fotter />
    </div>
  );
}
