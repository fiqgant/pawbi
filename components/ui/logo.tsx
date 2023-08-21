import Link from "next/link";
import Image from "next/image";
import Wbi from "@/public/images/wbi.png";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        className="md:max-w-none mx-auto rounded"
        src={Wbi}
        width={100}
        alt="WBI"
      />
    </Link>
  );
}
