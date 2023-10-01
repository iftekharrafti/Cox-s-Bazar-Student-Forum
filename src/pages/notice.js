import Head from "next/head";
import { Inter } from "next/font/google";
import useFetch from "@/hooks/useFetch";
import { Container, Row } from "react-bootstrap";
import NoticeCard from "@/components/noticeCard/NoticeCard";

const inter = Inter({ subsets: ["latin"] });

export default function Advisor() {
  const { data, loading } = useFetch("/notice/csfdu");
  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum Notice</title>
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
          {/* Notice Title */}
            <div className="headerTitle mt-5">
              <h3 class="headerTitleMain">নোটিশ</h3>
            </div>
            {/* Notice Details */}
            <Container className="mt-4">
              <Row className="mb-4">
                {data?.data.map((item) => (
                  <NoticeCard key={item.serial} item={item} />
                ))}
              </Row>
            </Container>
          </>
        )}
      </main>
    </>
  );
}
