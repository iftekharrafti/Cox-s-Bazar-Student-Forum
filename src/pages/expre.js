import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import President from "@/components/home/president/President";
import useFetch from "@/hooks/useFetch";
import HomeAdvisor from "@/components/home/homeAdvisor/HomeAdvisor";
import HomeCountUp from "@/components/home/homeCountUp/HomeCountUp";
import CarouselBanner from "@/components/home/carouselBanner/CarouselBanner";
import { Col, Container, Row, Table } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, loading } = useFetch("/expre/csfdu");
  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum Expre</title>
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
            {/* Advisor Details */}
            <Container className="mt-4">
              <Row>
                <Col lg={8} md={10} sm={12} className="mx-auto">
                  <div className="headerTitle">
                    <h3 class="headerTitleMain">সভাপতিবৃন্দ</h3>
                  </div>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>নাম</th>
                        <th>হতে</th>
                        <th>পযর্ন্ত</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data1?.map((president) => (
                        <tr key={president?.id}>
                          <td>{president?.name}</td>
                          <td>{president?.date1}</td>
                          <td>{president?.date2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row className="my-5">
                <Col lg={8} md={10} sm={12} className="mx-auto">
                  <div className="headerTitle">
                    <h3 class="headerTitleMain">সাধারণ সম্পাদক বৃন্দ</h3>
                  </div>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>নাম</th>
                        <th>হতে</th>
                        <th>পযর্ন্ত</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data2?.map((president) => (
                        <tr key={president?.id}>
                          <td>{president?.name}</td>
                          <td>{president?.date1}</td>
                          <td>{president?.date2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </main>
    </>
  );
}
