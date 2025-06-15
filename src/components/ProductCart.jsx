import React from "react";
import EditorImageBox from "./common/EditorImageBox";

export default function ProductCart() {
  return (
    <div className="flex flex-col items-center text-center mt-8">
      <h2 className="text-xl font-bold">EDITOR'S PICK</h2>
      <p className="text-gray-600 text-center max-w-48 sm:max-w-lg">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <EditorImageBox source="/men.jpg" text="MEN" height="100%" />
        <div className="flex w-1/2 flex-col lg:flex-row gap-6">
          <div className="flex-shrink-0">
            <EditorImageBox source="/women.jpg" text="WOMEN" height="500px" />
          </div>
          <div className="flex flex-col gap-6">
            <EditorImageBox
              source="/accessories.jpg"
              text="ACCESSORIES"
              height="240px"
            />
            <EditorImageBox source="/kids.jpg" text="KIDS" height="240px" />
          </div>
        </div>
      </div>
    </div>
  );
}
