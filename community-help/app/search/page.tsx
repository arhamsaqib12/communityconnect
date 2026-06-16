import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function Page() {
  return (
    <Suspense fallback={<p className="p-6">Loading...</p>}>
      <SearchClient />
    </Suspense>
  );
}