import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SearchForm from "./SearchForm";
import TextInput from "./TextInput";

const TabBar:React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const jokeSearchImportChange = (event:any) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <p>Hello</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <TextInput value={searchTerm} inputChange={jokeSearchImportChange} />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Hello3</p>
      </Tab>
    </Tabs>
  );
}

export default TabBar;