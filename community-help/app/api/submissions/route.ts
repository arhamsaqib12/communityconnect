import connectDB from "@/lib/mongodb";
import Submission from "@/models/Submission";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const submission = await Submission.create({
    name: body.name,
    category: body.category,
    description: body.description,
    address: body.address,
    city: body.city,
    state: body.state,
    zipCode: body.zipCode,
    phone: body.phone,
    website: body.website,
    languages: body.languages,
    purpose: body.purpose, // 🆕 REQUIRED FIELD
  });

  return Response.json({
    success: true,
    message: "Submission received",
    submission,
  });
}