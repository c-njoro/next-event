import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  let methodComing = req.method;
  const dataPath = path.join(process.cwd(), "data", "all.json");
  const allEvents = await JSON.parse(fs.readFileSync(dataPath, "utf8"));

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events data not found",
    });
  }

  if ((methodComing = "POST")) {
    const email = req.body.email;
    const eventID = req.body.eventID;

    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    }

    const currentEvent = allEvents.find((ev) => ev.id === eventID);
    const remainingEvent = allEvents.filter((ev) => ev.id !== eventID);

    if (currentEvent.emails_registered.includes(email)) {
      return res.status(201).json({
        status: 201,
        message: "Email already added",
      });
    } else {
      currentEvent.emails_registered.push(email);
      const newAllEvents = [...remainingEvent, currentEvent];
      const newJsonData = JSON.stringify(newAllEvents, null, 2);
      fs.writeFileSync(dataPath, newJsonData, "utf-8");
      return res.status(200).json({
        status: 200,
        message: `You have been registered to ${eventID} via email: ${email}`,
      });
    }
  }
}
