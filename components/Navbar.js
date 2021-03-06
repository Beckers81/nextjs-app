import styled from "styled-components";
import Link from "next/link";
import Navbar from "../components/NavBar"

const Nav = styled.nav`
  max-width: 56em;
  margin: 0 auto;
  padding: 0.4em;
`

const Ul = styled.ul`
  display: flex;
  padding: 0;
`

const Li = styled.li`
  display: block;
  padding: 0.4em;
`

const A = styled.a`
  &:hover {
    color: blue;
  }
`

const NavBar = () => (
  <Nav>
    <Ul>
      <Li>
        <Link href="/" passHref>
          <A>Home</A>
        </Link>
      </Li>
      <Li>
        <Link href="/blog" passHref>
          <A>Blog</A>
        </Link>
      </Li>
    </Ul>
  </Nav>
)

export default Navbar;
