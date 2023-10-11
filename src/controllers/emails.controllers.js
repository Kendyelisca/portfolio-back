const catchError = require("../utils/catchError");
const sendEmail = require("../utils/sendEmail");

const send = catchError(async (req, res) => {
  await sendEmail({
    to: "kendyelisca5@gmail.com",
    subject: "Email from node",
    html: `<h1>Hola desde node con html</h1>
    <p>lorem ipsum dolor oluer</p>
    `,
  });
  return res.json({ message: "email sent" });
});
const contact = catchError(async (req, res) => {
  const { name, email, message } = req.body;
  const emailContent = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }
        h1 {
          color: #333;
        }
        .message {
          font-size: 16px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <h1>${name}</h1>
      <h2>With the email: <strong>${email}</strong></h2>
      <h2>Has seen your portfolio</h2>
      <p class="message">${message}</p>
    </body>
  </html>
`;
  await sendEmail({
    to: "kendyelisca5@gmail.com",
    subject: "Message from your portfolio",
    html: emailContent,
  });
  return res.json({ message: "Email sent" });
});

module.exports = {
  send,
  contact,
};
