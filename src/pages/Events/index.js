import fs from "fs";
import Link from "next/link";
import path from "path";
import React from "react";

const index = ({ data }) => {
  return (
    <div className="main-cities">
      <h1>Events Page</h1>

      {data.map((da) => (
        <Link className="eachCity" key={da.id} href={`Events/${da.id}`}>
          <img src={da.image} alt="" />

          <div className="about">
            <h2>{da.title}</h2>
            <p>{da.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const dataFilePath = path.join(process.cwd(), "data", "data.json");
  const evCategories = await JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

  return {
    props: {
      data: evCategories,
    },
  };
}
