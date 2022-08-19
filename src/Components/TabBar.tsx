import React from "react";
import Button from "react-bootstrap/Button";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DogPicture from "./DogPicture";
import TextInput from "./TextInput";
import Joke from "./Joke";

const TabBar:React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [jokes, setJokes] = React.useState<string[]>([]);
  const jokeSearchInputChange = (event:any) => {
    setSearchTerm(event.target.value);
  }
  const jokesContainerStyles:object={
    display: 'flex',
    flexWrap: 'wrap'
  };
  const fetchContent = async () => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const request = new Request(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {headers: headers});
    fetch(request)
     .then((response) => {
      return response.json();
    })
     .then((json) => {
      const newJokes = json.results.map((res: { joke: any; }) => {
        let joke = res.joke;
        return joke;
      })
      setJokes(newJokes);
     })
  }
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <DogPicture/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <TextInput value={searchTerm} inputChange={jokeSearchInputChange} />
        <Button variant="outline-danger" onClick={fetchContent}>AAAAH</Button>
        <div style={jokesContainerStyles}>
          {jokes.map(joke => <Joke joke={joke}/>)}
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Hello3</p>
      </Tab>
    </Tabs>
  );
}

export default TabBar;