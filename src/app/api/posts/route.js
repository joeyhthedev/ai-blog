import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

/*
export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url, `https://${req.headers.get("host")}`);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const POST_PER_PAGE = 2;

    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        include: {
          cat: true,
          user: true,
        },
      }),
      prisma.post.count(),
    ]);

    if (!posts.length) {
      return new NextResponse(JSON.stringify({ message: "No posts found", posts: [], count: 0 }), {
        status: 200,
      });
    }

    return new NextResponse(JSON.stringify({ posts, count }), {
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
*/

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url, `https://${req.headers.get("host")}`);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const POST_PER_PAGE = 2;

    console.log("🔍 PAGE:", page);

    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        include: { cat: true, user: true },
      }),
      prisma.post.count(),
    ]);

    console.log("✅ Retrieved posts:", posts.length);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });

  } catch (err) {
    console.error("❌ Prisma error:", err); // log full object
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// CREATE A POST
export const POST = async (req) => {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const reqBody = await req.json();
    const post = await prisma.post.create({
      data: { ...reqBody, userEmail: "joeyhthedev@gmail.com" },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    console.error("Error creating post:", err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};