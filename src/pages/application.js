import Head from "next/head";
import { Inter } from "next/font/google";
import useFetch from "@/hooks/useFetch";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Style from "../styles/Application.module.css";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Application() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isValid, setIsValid] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data } = useFetch("/member/csfdu/Advisor");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const onSubmit = async (data) => {
    try {
      data.admin_name = await data?.admin?.admin_name;
      data.blood = selectedOption;
      const image = data.file[0];
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("workplace", data.workplace);
      formData.append("session", data.session);
      formData.append("currentAddress", data.current_address);
      formData.append("permanentAddress", data.permanent_address);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("blood", data.blood);
      formData.append("admin_name", data.admin_name);
      formData.append("image", image);

      if (data.phone.length > 11 || data.phone.length < 11) {
        setIsValid(false);
        return;
      }

      const response = await axios({
        method: "post",
        url: "https://amaderthikana.com/api/application",
        data: formData,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });
      console.log(response);
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./csfdu.jpeg" />
      </Head>
      <main>
        <>
          <div className="headerTitle">
            <h3 class="headerTitleMain">MEMBER APPLICATION FORM</h3>
          </div>
          {/* Alumni Details */}
          <Container className="mt-4 mb-5">
            <Row>
              <Col lg={8} md={10} sm={12} className="mx-auto">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className={Style.contactInstitute}>
                    <Form.Group
                      className={`${Style.contact} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>Name</Form.Label>
                      <Form.Control
                        type="text"
                        className={Style.inputField}
                        {...register("name", { required: true })}
                        placeholder="Name"
                      />
                      {errors.name && (
                        <span className="text-danger">Name is required</span>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={`${Style.institute} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        WorkPlace/Department-Institution
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={Style.inputField}
                        {...register("workplace", { required: true })}
                        placeholder="WorkPlace/Department-Institution"
                      />
                      {errors.workplace && (
                        <span className="text-danger">
                          Workplace is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className={`${Style.contactInstitute}`}>
                    <Form.Group
                      className={`${Style.contact} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Session
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={`${Style.inputField} input`}
                        {...register("session", { required: true })}
                        placeholder="Session"
                      />
                      {errors.session && (
                        <span className="text-danger">Session is required</span>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={`${Style.institute} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Current Address/Hall Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={Style.inputField}
                        {...register("current_address", { required: true })}
                        placeholder="Current Address/Hall Name"
                      />
                      {errors.current_address && (
                        <span className="text-danger">
                          Current Address / Hall Name is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className={`${Style.contactInstitute}`}>
                    <Form.Group
                      className={`${Style.contact} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Permanent Address/Upazila
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={`${Style.inputField} input`}
                        {...register("permanent_address", { required: true })}
                        placeholder="Permanent Address/Upazila"
                      />
                      {errors.permanent_address && (
                        <span className="text-danger">
                          Permanent Address / Upazila is required
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={`${Style.institute} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Phone
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className={`${Style.inputField} ${Style.inputNumber}`}
                        {...register("phone", { required: true })}
                        placeholder="Phone"
                      />
                      {errors.phone && (
                        <span className="text-danger">Phone is required</span>
                      )}
                      {!isValid && (
                        <span className="text-danger">
                          This number is not valid
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className={`${Style.contactInstitute}`}>
                    <Form.Group
                      className={`${Style.contact} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        E-mail
                      </Form.Label>
                      <Form.Control
                        type="email"
                        className={`${Style.inputField} input`}
                        {...register("email", { required: true })}
                        placeholder="E-mail"
                      />
                      {errors.email && (
                        <span className="text-danger">Email is required</span>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={`${Style.institute} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Blood Group
                      </Form.Label>
                      <Form.Select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        aria-label="Default select example"
                      >
                        <option>Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </Form.Select>

                      {errors.currentAddress && (
                        <span className="text-danger">E-mail is required</span>
                      )}
                    </Form.Group>
                  </div>
                  <div className={`${Style.contactInstitute} mb-4`}>
                    <Form.Group
                      className={`${Style.contact} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Select Profile Image(300*300px)
                      </Form.Label>
                      <Form.Control
                        type="file"
                        className={`${Style.inputField} input`}
                        {...register("file", { required: true })}
                      />
                      {errors.file && (
                        <span className="text-danger">
                          Profile Image is required
                        </span>
                      )}
                    </Form.Group>
                  </div>

                  <div className="d-flex justify-content-center">
                    <Button type="submit" className={Style.submit}>
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      </main>
    </>
  );
}
