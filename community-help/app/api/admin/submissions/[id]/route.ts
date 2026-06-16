import connectDB from "@/lib/mongodb";
import Submission from "@/models/Submission";
import Resource from "@/models/Resource";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const submission = await Submission.findById(params.id);

  if (!submission) {
    return Response.json(
      { success: false, message: "Not found" },
      { status: 404 }
    );
  }

  // Convert submission → resource
  const resource = await Resource.create({
    name: submission.name,
    category: submission.category,
    description: submission.description,
    address: submission.address,
    city: submission.city,
    state: submission.state,
    zipCode: submission.zipCode,
    phone: submission.phone,
    website: submission.website,
    languages: submission.languages,
    source: "community",
    verified: true,
  });

  submission.status = "approved";
  await submission.save();

  return Response.json({
    success: true,
    message: "Approved and added to resources",
    resource,
  });
}