"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Logo from "@/assets/logo.png"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function ConcernPage() {
  const router = useRouter()

  return (
    <div className="grid w-full h-full place-items-center">
      <div className="grid w-full h-full grid-row-2">
        <div className="bg-[#E80203]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="bg-[#F9D029]">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className="grid w-10/12 p-8 space-y-10 ring ring-black ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 place-items-center">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Moelci-II logo"
          className="absolute top-24"
        />
        <div className="w-full space-y-32 text-center">
          <h2 className="font-heading text-3xl font-bold bg-[#F9D029] w-96 py-4 m-auto rounded-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Concern
          </h2>
          <div className="flex justify-around w-full">
            <Link
              href="#"
              onClick={() => router.back()}
              className={`rounded-none text-xl tracking-wide font-bold bg-black hover:pb-2 text-white ${cn(
                buttonVariants({ size: "lg" })
              )}`}
            >
              &larr; Back
            </Link>
            <Link
              href="/thankyou"
              className={`rounded-none text-xl tracking-wide font-bold hover:pb-2 text-white ${cn(
                buttonVariants({ size: "lg", variant: "destructive" })
              )}`}
            >
              Print Q. number
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
