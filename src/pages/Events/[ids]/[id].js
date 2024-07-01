import fs from "fs";
import { useRouter } from "next/router";
import path from "path";
import { useRef, useState } from "react";

const perCity = ({ currentEvent }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventID = router?.query.id;

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventID }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <>
      <div className="one-event">
        <img src={currentEvent.image} alt="" />

        <div onSubmit={onSubmit} className="about">
          <h1>{currentEvent.title}</h1>
          <p>{currentEvent.description}</p>
          <div className="register">
            <h2>Register for this event</h2>
            <form className="email-registration">
              <input
                type="email"
                placeholder="Register via email"
                id="email"
                ref={inputEmail}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default perCity;

export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), "data", "all.json");
  const myData = await JSON.parse(fs.readFileSync(dataPath, "utf8"));

  const allPaths = myData.map((ev) => {
    return {
      params: {
        ids: ev.city,
        id: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const current = context?.params.id;
  const dataFilePath = path.join(process.cwd(), "data", "all.json");
  const allEvents = await JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

  const currentEvent = allEvents.find((ev) => ev.id == current);
  return {
    props: {
      currentEvent,
    },
  };
}
