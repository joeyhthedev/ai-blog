import { NextResponse } from "next/server";
import prisma from "../../../../../utils/connect";

export const GET = async (req, {params}) => {

  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 }},
      include: { user: true }
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    // Improved error logging
    console.error("Error fetching posts:", err.message || err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
