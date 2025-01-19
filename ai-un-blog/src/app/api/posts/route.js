import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || 1;

  const POST_PER_PAGE = 2;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });

    if (!posts || posts.length === 0) {
      return new NextResponse(JSON.stringify({ message: "No posts found" }), {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    // Improved error logging
    console.error("Error fetching posts:", err.message || err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
