import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
const Logo = () => {
  return (
    <div className="flex-start ">
      <Link href="/" className="flex items-center ">
        <Image
          src="/images/logo.svg"
          width={48}
          height={48}
          priority={true}
          alt={`${APP_NAME} logo`}
          className="w-12 h-12"
        />
        <span className="hidden lg:block text-2xl font-bold pl-3">
          {APP_NAME}
        </span>
      </Link>
    </div>
  );
};

export default Logo;
