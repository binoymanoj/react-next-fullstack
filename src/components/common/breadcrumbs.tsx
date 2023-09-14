import { RightArrow } from "@/icons/right-arrow";
import toPascalCase from "@/lib/toPascalCase";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({ crumbs }: any) => {
  const path = usePathname();

  const pathname = toPascalCase(path);

  return (
    <section className="bg-zinc-800 text-white flex justify-between items-center flex-wrap-reverse p-16 rounded-2xl">
      <div className="">
          {/* {crumbs.map((crumb:any, index:any) => ( */}
          <div className="flex items-center">
            {/* {index !== 0 && ( */}
            <Link href="/">
              <p className="hover:text-gray-200">Home</p>
            </Link>
            <RightArrow />
            {/* )} */}
            <Link href={path}>
              <p className="hover:text-gray-200">{pathname}</p>
            </Link>
          </div>
          {/* ))} */}   
      </div>
      <div className="my-2">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          {pathname}
        </h2>
      </div>
    </section>
  );
};

export default Breadcrumbs
