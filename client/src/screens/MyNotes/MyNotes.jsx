import React from "react";
import MainScreen from "../../components/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { notes } from "../../data/notes";
import './MyNotes.css'

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <MainScreen title="Welcome Back Rakesh KP...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }} key={note._id}>
              <Accordion.Header
                as={Card.Text}
                variant="link"
                eventKey="0"
                className="m-0"
               
              >
                <Card.Header  className="card-accordion-body">
                  <span
                    className="card-title"
                  >
                    {note.title}
                  </span>
                  <div>
                    <Link to={`/note/${note._id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge
                      pill
                      bg="success"
                      style={{ color: "white", padding: 8 }}
                    >
                      Category - {note.category}
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created On - <cite title="Source Title">date</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
