import "./styles.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const anc = (
  <div>
    <span> I agree to the </span>{" "}
    <a href="javascript:void(0)"> terms and conditions</a>
  </div>
);

export default function App() {
  return (
    <div className="App">
      <div className="welcome">
        <h2>Sign Up</h2>
      </div>
      {/*forms*/}
      <div className="forms">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email Adress
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email Adress" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Confirm Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onpaste="return false"
                type="email"
                placeholder="Email Confirmation"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Full Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Full Name" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Confirm Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password confirmation"
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Occupation
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Student"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Novice developper"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Expert developper"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label={anc} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign Up</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>

      <div className="alt">
        <div className="ori">
          <i>Or sign up with</i>
        </div>
        <div className="but">
          <Button>
            <a href="javascript:void(0)">
              <img
                src="https://icon-library.com/images/google-login-icon/google-login-icon-24.jpg"
                alt="google"
              />
            </a>
          </Button>
          <Button>
            <a href="javascript:void(0)">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/08/18/25/facebook-3383596_960_720.png"
                alt="google"
              />
            </a>
          </Button>
          <Button>
            <a href="javascript:void(0)">
              <img
                src="https://image.flaticon.com/icons/png/512/174/174857.png"
                alt="google"
              />
            </a>
          </Button>
          <Button>
            <a href="javascript:void(0)">
              <img
                src="https://image.flaticon.com/icons/png/512/124/124021.png"
                alt="google"
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
