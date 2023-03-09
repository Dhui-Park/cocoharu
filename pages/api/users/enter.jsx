import client from "@/libs/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body.email);
  res.status(200).end();
}
