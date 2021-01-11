import Link from "next/link";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import DecrementButton from "../components/DecrementButton";
import IncrementButton from "../components/IncrementButton";
import Footer from "../components/Footer";

const Index = () => (
  <div>
    <br />
    <Link href="/about">
      <a> Welcome to Becky Style App</a>
    </Link>
  </div>
);

export default Index;
