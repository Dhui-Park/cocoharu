import { withIronSessionApiRoute } from "iron-session/next";
import withHandler from "@/libs/server/withHandler";
import client from "@/libs/server/client";

async function handler(req, res) {
  console.log(req.session.user);
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
  cookieName: "cocoharusession",
  password: "987987987987987987987987aerwfgsfdfadfsdgaerfddsfargafgasdfsadfs",
});
