"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

interface HeroSearchProps {
  placeholder?: string
  className?: string
}

export function HeroSearch({ placeholder = "https://yourwebsite.com", className }: HeroSearchProps) {
  return (
    <div className={`w-full max-w-4xl ${className || ''}`}>
      <InputGroup className="shadow-2xl h-auto">
        <InputGroupInput
          placeholder={placeholder}
          className="py-[5px] h-12 md:h-16 lg:h-20 text-3xl md:text-4xl lg:text-5xl placeholder:text-3xl md:placeholder:text-4xl lg:placeholder:text-5xl"
        />
        <InputGroupAddon>
          <SearchIcon className="h-10 w-10" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd className="text-2xl px-4 py-3">⌘</Kbd>
          <Kbd className="text-2xl px-4 py-3">K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
