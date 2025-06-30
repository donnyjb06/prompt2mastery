"use client"

import { useState } from "react";

export default function Home() {
  const [concept, setConcept] = useState<string>("")
  return(
    <>
      <h1 className="font-bold text-2xl">Enter a concept</h1>
      <input type="text" className="bg-white text-black" onChange={(event) => setConcept(event.target.value)} value={concept}/>
      <button type="button" className="ml-5">Submit</button>
    </>
  );
}
