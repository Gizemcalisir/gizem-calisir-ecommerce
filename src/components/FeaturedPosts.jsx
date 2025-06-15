import React from "react";
import PostBox from "./common/PostBox";

export default function FeaturedPosts() {
  return (
    <div className="flex flex-col text-center mt-14 sm:items-center">
      <div className="my-12">
        <h6 className="text-[14px] text-[#23A6F0] font-bold">
          Practice Advice
        </h6>
        <h3 className="text-[40px] text-[#252B42] font-bold">Featured Posts</h3>
        <p className="text-[14px] text-[#737373] font-semibold">
          Problems trying to resolve the <br /> conflict between the two major
        </p>
      </div>
      <div className="flex flex-col gap-6 px-6 sm:flex-row sm:w-3/4">
        <PostBox source="post-1.jpg" />
        <PostBox source="post-2.jpg" />
        <PostBox source="post-3.jpg" />
      </div>
    </div>
  );
}
