import Head from "next/head";
import { Inter } from "next/font/google";
import useFetch from "@/hooks/useFetch";
import { Container, Row } from "react-bootstrap";
import CardDesign from "@/components/cardDesign/CardDesign";

const inter = Inter({ subsets: ["latin"] });

export default function Advisor() {

  
  const { data, loading } = useFetch("/member/csfdu/Advisor");
  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum Advisor</title>
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
              <h3 class="headerTitleMain">উপদেষ্টামন্ডলী</h3>
            </div>
            {/* Advisor Details */}
            <Container className="mt-4">
              <Row>
                {data?.data.map((item) => (
                  <CardDesign key={item.serial} item={item} />
                ))}
              </Row>
            </Container>
          </>
        )}
      </main>
    </>
  );
}
