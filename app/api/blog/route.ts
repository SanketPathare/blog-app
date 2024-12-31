import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import fs from "fs";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// API Endpoint to get all blogs
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}
// API Endpoint For Uploading Blogs
export async function POST(request: Request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image") as File;
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  // blog data

  const blogData: {
    title: string;
    description: string;
    category: string;
    author: string;
    image: string;
  } = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as string,
    author: formData.get("author") as string,
    image: imgUrl,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added" });
}

// Creating API Endpoint to delete Blog

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
  }

  const blog = await BlogModel.findById(id);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  try {
    fs.unlink(`./public${blog.image}`, (err) => {
      if (err) {
        console.error(`Error deleting image: ${err}`);
      }
    });
  } catch (error) {
    console.error(`Error deleting image: ${error}`);
  }

  await BlogModel.findByIdAndDelete(id);

  return NextResponse.json({ msg: "Blog Deleted" });
}
