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
  await sendEmail({
    to: "kendyelisca5@gmail.com",
    subject: "Message from your portfolio",
    html: `<h1>${name}</h1>
    <h2>with the email:
    <span><strong>${email}</strong></span></h2>
    <h2>Has seen your portfolio</h2>
    <p>${message}<p>`,
  });
  return res.json({ message: "email sent" });
});

module.exports = {
  send,
  contact,
};
