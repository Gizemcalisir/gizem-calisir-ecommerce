import React from "react";
import EditorImageBox from "./common/EditorImageBox";

export default function ProductCart() {
  return (
    <div className="flex flex-col items-center text-center mt-8">
      <h2 className="text-xl font-bold">EDITOR'S PICK</h2>
      <p className="text-gray-600 text-center max-w-48 sm:max-w-lg">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <EditorImageBox source="public/men.jpg" text="MEN" />
        <EditorImageBox source="public/women.jpg" text="WOMEN" />
        <EditorImageBox
          source="public/accessories.jpg"
          text="ACCESSORIES"
          height="240px"
        />
        <EditorImageBox source="public/kids.jpg" text="KIDS" height="240px" />
      </div>
    </div>
  );
}
