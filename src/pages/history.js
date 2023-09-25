import Head from "next/head";
import { Inter } from "next/font/google";
import useFetch from "@/hooks/useFetch";
import { Col, Container, Row } from "react-bootstrap";
import CardDesign from "@/components/cardDesign/CardDesign";

const inter = Inter({ subsets: ["latin"] });

export default function Advisor() {
  const { data, loading } = useFetch("/history/csfdu");
  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum History</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./csfdu.jpeg" />
      </Head>
      <main>
        {loading ? (
          <div className="loadingContainer">
            <img src="./loading.gif" alt="" className="loadingGif" />
          </div>
        ) : (
          <>
            <div className="headerTitle">
              <h3 class="headerTitleMain">সংগঠনটির ইতিহাস</h3>
            </div>
            {/* Alumni Details */}
            <Container className="mb-5">
              <Row>
                <Col md={10} sm={12} className="mx-auto">
                  <p style={{ lineHeight: 1.7, fontFamily: "Poppins" }}>
                    {data?.data[0]?.dureg}
                  </p>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </main>
    </>
  );
}
