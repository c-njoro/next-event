import fs from "fs";
import Link from "next/link";
import path from "path";
import React from "react";

const index = ({ data, id }) => {
  return (
    <>
      <div className="in-city">
        <h1>{`Events in ${id}`}</h1>

        {data.map((da) => (
          <Link
            className="each-event"
            key={da.id}
            href={`/Events/${da.city}/${da.id}`}
            passHref
          >
            <img src={da.image} alt={da.city} />

            <div className="about">
              <h2>{da.title}</h2>
              <p>{da.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const dataFilePath = path.join(process.cwd(), "data", "data.json");
  const evCategories = await JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

  const allPaths = evCategories.map((ev) => {
    return {
      params: {
        ids: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.ids;
  const dataFilePath = path.join(process.cwd(), "data", "all.json");
  const allEvents = await JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, id } };
}
