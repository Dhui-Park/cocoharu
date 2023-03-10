import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { Prisma } from "@prisma/client";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (email) {
    const email = await mail.send({
      from: "cocoharudev@gmail.com",
      to: "cocoharudev@gmail.com",
      subject: "Your cocoharu Verification Email",
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}<strong>`,
    });
    console.log(token);
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
