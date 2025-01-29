import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    include: {
      cat: true,
      user: true,
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
    if (!posts || posts.length === 0) {
      return new NextResponse(JSON.stringify({ message: "No posts found" }), {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    // Improved error logging
    console.error("Error fetching posts:", err.message || err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
