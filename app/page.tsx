'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-8 bg-[#243135] h-[90vh] flex items-center">
        <div className="max-w-[60%] px-[79px]">
          <Link href="/"><Image src="/logo.png" width={150} height={60} alt="Logo" /></Link>
          <h1 className="text-[79px] font-extrabold text-white mb-[16px] leading-[84px] mt-6">Everything you are. In one, simple link in bio.</h1>
          <p className="text-[24px] text-white mb-[32px]">Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button className="rounded-full bg-[#02C37E]" type="submit">Claim your Singly</Button>
          </div>
        </div>
        <div>
          <Image src="/avatar.gif" width={900} height={400} alt="" />
        </div>
      </div>
      <div className="h-[100vh]">

      </div>
    </div>
    
  )
}