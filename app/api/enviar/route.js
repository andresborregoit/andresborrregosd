import { NextResponse } from "next/server";
const Mailjet = require('node-mailjet');

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, nombre, edad } = body;

    console.log("Datos recibidos:", email, nombre, edad);
    await enviarEmail({ email, nombre, edad });

    return NextResponse.json({ message: "Email enviado correctamente" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Error al enviar el email" }, { status: 500 });
  }
};

const enviarEmail = async ({ email, nombre, edad }) => {
  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC || '616da6e5f010410475476c8ff81a0e61',
    apiSecret: process.env.MJ_APIKEY_PRIVATE || '76ecf0ab7e4747e502ecee87ab161fb7',
  });

  const request = mailjet.post("send", { 'version': 'v3.1' }).request({
    "Messages": [
      {
        "From": {
          "Email": "andresborregoit@gmail.com",
          "Name": "Andrés Borrego Soluciones Digitales"
        },
        "To": [
          {
            "Email": "andresborregoit@gmail.com",
            "Name": nombre
          },
          {
            "Email": "passenger2@mailjet.com",
            "Name": "passenger 2"
          }
        ],
        "Cc": [
          {
            "Email": "copilot@mailjet.com",
            "Name": "Copilot"
          }
        ],
        "Bcc": [
          {
            "Email": "air-traffic-control@mailjet.com",
            "Name": "Air traffic control"
          }
        ],
        "Subject": nombre,
        "TextPart": email,
        "HTMLPart": edad,
      }
    ]
  });

  await request;
};
