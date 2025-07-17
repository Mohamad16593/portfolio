import { IncomingForm, Fields, Files } from "formidable";
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { toSingleString } from "~/utils/string";

export default defineEventHandler(async (event) => {
  // Parse multipart form
  const { fields, files } = await new Promise<{ fields: Fields; files: Files }>(
    (resolve, reject) => {
      const form = new IncomingForm({ multiples: true });
      form.parse(event.node.req, (err, fields, files) =>
        err ? reject(err) : resolve({ fields, files })
      );
    }
  );

  // Normalize text fields
  const name = toSingleString(fields.name);
  const subject = toSingleString(fields.subject);
  const message = toSingleString(fields.message);
  const fromEmail = toSingleString(fields.email);

  // Prepare attachments as Buffers
  let attachments: Array<any> = [];
  const raw = files.attachment;
  const fileList = raw ? (Array.isArray(raw) ? raw : [raw]) : [];

  attachments = fileList.map((f: any) => ({
    filename: f.originalFilename || f.newFilename,
    content: readFileSync(f.filepath),
    contentType: f.mimetype,
  }));

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER!,
      pass: process.env.GMAIL_PASS!,
    },
  });

  // Send mail
  const formattedFrom = `"${name}" <${fromEmail}>`;

  await transporter.sendMail({
    from: formattedFrom,
    to: process.env.GMAIL_USER,
    subject,
    text: message,
    attachments,
  });

  return { status: "success" };
});
