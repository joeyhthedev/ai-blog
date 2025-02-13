import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const POST_PER_PAGE = 2;

  const paginatedQuery = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    include: {
      cat: true,
      user: true,
    },
  };

  try {
    const [posts, count, allPosts] = await prisma.$transaction([
      prisma.post.findMany(paginatedQuery), // Paginated posts
      prisma.post.count(), // Total number of posts
      prisma.post.findMany({ include: { cat: true, user: true } }), // All posts
    ]);

    if (!posts || posts.length === 0) {
      return new NextResponse(JSON.stringify({ message: "No posts found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ posts, count, allPosts }), {
      status: 200,
    });
  } catch (err) {
    console.error("Error fetching posts:", err.message || err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

//CREATE A POST
export const POST = async (req) => {
  // Ensure only POST requests are allowed
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  // Securely get API key from headers
  const apiKey = process.env.ADMIN_API_KEY;
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json({ message: "Forbidden: Invalid API Key" }, { status: 403 });
  }
  try {
    const reqBody = await req.json();
    const post = await prisma.post.create({
      data: { ...reqBody, userEmail: "joeyhthedev@gmail.com" },
    });

    return NextResponse.json(post, { status: 201 }); // 201 for "Created"
  } catch (err) {
    console.error("Error creating post:", err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};