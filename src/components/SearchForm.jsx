import React from "react";
import { Button, Form } from "react-bootstrap";
import store from "../store/Context";

export default function SearchForm() {
  const { searchHandler } = store();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="e.g. Doctor Strange" />
      </Form.Group>
      <Button style={{backgroundColor: "#ec1d24", border: "none"}}
        onClick={searchHandler}
        type="submit"
      >
        Search
      </Button>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
    </Form>
  );
}
