"use client"
import { HeroSearch } from "@/components/hero-search"
import { UserSearchBar } from "@/components/user-search-bar"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8 p-8">
      {/* Hero search bar - visual only, no command menu */}
      <HeroSearch />

      {/* User search bar - hidden for now */}
      <div style={{ display: 'none' }}>
        <UserSearchBar />
      </div>
    </div>
  )
}
