import React, { useState } from "react";
import { useCharacters } from "../Hooks/useCharacters";

import Card1 from "./Card.jsx";

const MyName = " Muhammad Mazarib";
const CurrentYear = new Date().getFullYear();

function createCard(props) {
  return (
    <Card1
      title={props.title}
      listitem2={props.isPublished}
      name={props.company.name}
      listitem1={props.userEmail}
      href={props.applyUrl}
      text={props.description}
    />
  );
}

export default function CharactersList() {
  const { error, data, loading } = useCharacters();
  //initializing data
  //let var1=data.jobs

  const [searchTerm, setSearchTerm] = useState("");
  console.log(data);
  if (loading) return <div>sssss</div>;
  if (error) return <div>errrrr</div>;

  return (
    <>
      <div className="padmarg">
        <header>
          <div className="overlay">
            <h1>Trimu Labs</h1>
            <h5>Job Portal</h5>

            <input
              type="text"
              placeholder="Search..."
              className="prompt"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </header>
        <div className="CharacterList">{data.jobs.map(createCard)};</div>
      </div>
      <div className="App">
        <p id="copyright">
          Created by {MyName} &#169; {CurrentYear}
        </p>
      </div>
    </>
  );
}
