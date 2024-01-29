"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

// export function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }];
// }

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/1
// - /product/2
// - /product/3
export default function Page({ searchParams }: { searchParams?: string }) {
  console.log("searchParams: ");
  console.log(searchParams);
  const pagePath = usePathname();
  console.log("pagePath: ");
  console.log(pagePath);
  const { replace } = useRouter();

  //replace("/zh");  //triger page refresh when useRouter in next/navigation
  // ...
  return (
    <div className="flex mx-auto">
      <h1 className="grow mx-auto">测试</h1>
    </div>
  );
}
