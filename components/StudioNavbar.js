import Link from "next/link";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props) {
  return (
    <>
      <div className="p-4 text-[#f7ab0a]">
        <Link href="/" className="capitalize flex items-center gap-2 font-bold">
          <div>
            <ArrowUturnLeftIcon className="h-6 w-6 " />
          </div>
          go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </>
  );
}

export default StudioNavbar;
