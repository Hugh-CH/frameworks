import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm:React.FC<{title:string, onSubmit:()=>void}> = ({title, onSubmit}) => {

  return (
    <Form>
      <Form.Group>
        <Form.Label>{title}</Form.Label>
        <Form.Control type="keyword" placeholder="What topic the joke?" />
        <Form.Text className="text-muted">
          Results may disappoint.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Check type="checkbox" label="Extra hilarity" />
      </Form.Group>

      <Button variant="danger" type="submit">
        Search
      </Button>
    </Form>
  )
}

export default SearchForm;