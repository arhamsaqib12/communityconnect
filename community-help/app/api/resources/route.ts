import { NextRequest } from "next/server";
import connectDB from "@/lib/mongodb";
import Resource from "@/models/Resource";

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");
  const zipCode = searchParams.get("zipCode");

  const query: any = {};

  if (category) query.category = category;
  if (zipCode) query.zipCode = zipCode;

  const resources = await Resource.find(query).sort({ createdAt: -1 });

  return Response.json({
    success: true,
    count: resources.length,
    resources,
  });
}