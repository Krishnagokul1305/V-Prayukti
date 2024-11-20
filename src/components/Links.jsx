import { linksData } from "../constants/constants";
import Link from "./Link";

function Links() {
  return (
    <div className="h-screen w-20 fixed z-10 left-5 md:left-10 flex flex-col justify-between md:top-10 top-5">
      <div className="space-y-[4vw] mb-28 hidden md:block mt-auto">
        {linksData.map(({ Icon, link }, index) => (
          <Link key={index} link={link} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

export default Links;
