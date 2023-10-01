import Link from "next/link";
import Style from "../styles/NotFound.module.css";
import { Button, Container } from "react-bootstrap";

export default function Custom404() {
  return (
    <div className="text-center d-flex flex-column mb-5">
      <Container>
        <div>
          <div className="headerTitle mt-5 mb-5">
            <h3 class={`${Style.title} headerTitleMain`} style={{fontSize: '60px'}}>Oops!</h3>
          </div>
        </div>
        <h4 className={Style.subTitle}>404 - PAGE NOT FOUND</h4>
        <p className="mb-0">The page you are looking for might have been removed</p>
        <p>had its name change or is temporarily unavailable</p>
        <Button className={Style.button}>
          <Link href="/">GO TO HOMEPAGE</Link>
        </Button>
      </Container>
    </div>
  );
}
