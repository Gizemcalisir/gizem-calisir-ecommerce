import { LayoutGrid, ListChecks } from "lucide-react";
import React, { useState } from "react";

export default function FilterSection() {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center w-full my-8 sm:flex-row sm:justify-between">
      <h6 className="font-bold text-sm text-center text-[#737373]">
        Showing all 12 results
      </h6>

      <div className="flex items-center justify-center gap-3">
        <h6 className="font-bold text-sm text-[#737373]">Views:</h6>
        <LayoutGrid color="#737373" size="14" />
        <ListChecks color="#737373" size="14" />
      </div>

      <div className="flex items-center justify-center gap-4">
        <select
          value={selected}
          onChange={handleChange}
          className="border border-[#DDDDDD] p-2 rounded text-[#737373] font-normal text-sm"
        >
          <option value="Popularity">Popularity</option>
        </select>

        <button className="bg-[#23A6F0] rounded-md py-2 px-5">
          <h6 className="font-bold text-sm text-white">Filter</h6>
        </button>
      </div>
    </div>
  );
}
