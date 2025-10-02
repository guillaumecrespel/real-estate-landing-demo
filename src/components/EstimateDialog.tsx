"use client"

import * as React from "react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "./ui/drawer"
import { useMediaQuery } from "./ui/use-media-query"

export function EstimateDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const iframeContent = (
    <iframe
      src="https://avm.kojimo.fr/widget/index.html?config=eyJhcGlCYXNlVXJsIjoiaHR0cHM6Ly9hcGkua29qaW1vLmZyIiwicHVibGljQXBpS2V5IjoidGVzdC1rZXktMTIzIiwicmVkaXJlY3RVcmwiOiJodHRwczovL3d3dy5rb2ppbW8uZnIvY29udGFjdCIsInF1ZXN0aW9uc0NvbmZpZyI6eyJxdWVzdGlvbnMiOlt7ImlkIjoicTEiLCJsYWJlbCI6IsOJdGF0IGRlIGxhIG1haXNvbiIsIm9wdGlvbnMiOlt7ImlkIjoibmV1Zl9wYXNfaGFiaXRlIiwibGFiZWwiOiJOZXVmIHBhcyBlbmNvcmUgaGFiaXTDqSIsIm11bHRpcGxpZXIiOjEuMSwiYWRqdXN0bWVudCI6MH0seyJpZCI6InNhbnNfdHJhdmF1eF9tb2Rlcm5lIiwibGFiZWwiOiJTYW5zIHRyYXZhdXggZXQgbW9kZXJuZSIsIm11bHRpcGxpZXIiOjEuMSwiYWRqdXN0bWVudCI6MH0seyJpZCI6ImFfcmFmcmFpY2hpciIsImxhYmVsIjoiw4AgcmFmcmHDrmNoaXIiLCJtdWx0aXBsaWVyIjowLjk1LCJhZGp1c3RtZW50IjowfSx7ImlkIjoidHJhdmF1eF9zYW5zX2dyb3Nfb2V1dnJlIiwibGFiZWwiOiJUcmF2YXV4IHNhbnMgZ3JvcyDFk3V2cmUiLCJtdWx0aXBsaWVyIjowLjksImFkanVzdG1lbnQiOjB9LHsiaWQiOiJhbmNpZW5fYV9yZW5vdmVyIiwibGFiZWwiOiJBbmNpZW4gw6AgcsOpbm92ZXIiLCJtdWx0aXBsaWVyIjowLjg1LCJhZGp1c3RtZW50IjowfV19LHsiaWQiOiJxMiIsImxhYmVsIjoiw4l0YXQgZGUgbGEgc2FsbGUgZGUgYmFpbiIsIm9wdGlvbnMiOlt7ImlkIjoic2RiX25ldWYiLCJsYWJlbCI6Ik5ldWYiLCJtdWx0aXBsaWVyIjoxLCJhZGp1c3RtZW50IjowfSx7ImlkIjoic2RiX3JlY2VudCIsImxhYmVsIjoiUsOpY2VudCAobW9pbnMgZGUgNSBhbnMpIiwibXVsdGlwbGllciI6MSwiYWRqdXN0bWVudCI6MH0seyJpZCI6InNkYl9ib25fZXRhdCIsImxhYmVsIjoiQm9uIMOpdGF0IiwibXVsdGlwbGllciI6MSwiYWRqdXN0bWVudCI6LTEwMDAwfSx7ImlkIjoic2RiX2FfcmVmYWlyZSIsImxhYmVsIjoiw4AgcmVmYWlyZSIsIm11bHRpcGxpZXIiOjEsImFkanVzdG1lbnQiOi0xMDAwMH1dfSx7ImlkIjoicTMiLCJsYWJlbCI6IsOJdGF0IGRlIGxhIGN1aXNpbmUiLCJvcHRpb25zIjpbeyJpZCI6ImN1aXNpbmVfbmV1ZiIsImxhYmVsIjoiTmV1ZiIsIm11bHRpcGxpZXIiOjEsImFkanVzdG1lbnQiOjB9LHsiaWQiOiJjdWlzaW5lX3JlY2VudCIsImxhYmVsIjoiUsOpY2VudCAobW9pbnMgZGUgNSBhbnMpIiwibXVsdGlwbGllciI6MSwiYWRqdXN0bWVudCI6MH0seyJpZCI6ImN1aXNpbmVfYm9uX2V0YXQiLCJsYWJlbCI6IkJvbiDDqXRhdCIsIm11bHRpcGxpZXIiOjEsImFkanVzdG1lbnQiOi0xMDAwMH0seyJpZCI6ImN1aXNpbmVfYV9yZWZhaXJlIiwibGFiZWwiOiLDgCByZWZhaXJlIiwibXVsdGlwbGllciI6MSwiYWRqdXN0bWVudCI6LTEwMDAwfV19LHsiaWQiOiJxNCIsImxhYmVsIjoiTHVtaW5vc2l0w6kgaW50w6lyaWV1cmUiLCJvcHRpb25zIjpbeyJpZCI6InRyZXNfbHVtaW5ldXgiLCJsYWJlbCI6IlRyw6hzIGx1bWluZXV4IiwibXVsdGlwbGllciI6MSwiYWRqdXN0bWVudCI6MH0seyJpZCI6Im5vcm1hbCIsImxhYmVsIjoiTm9ybWFsIiwibXVsdGlwbGllciI6MC45OCwiYWRqdXN0bWVudCI6MH0seyJpZCI6InNvbWJyZSIsImxhYmVsIjoiU29tYnJlIiwibXVsdGlwbGllciI6MC45NSwiYWRqdXN0bWVudCI6MH1dfSx7ImlkIjoicTUiLCJsYWJlbCI6Ik51aXNhbmNlcyIsIm9wdGlvbnMiOlt7ImlkIjoibnVpc2FuY2VzX291aSIsImxhYmVsIjoiUm91dGUsIHZvaWUgZmVycsOpZSwgYXZpb24sIGhhdXRlIHRlbnNpb24uLi4iLCJtdWx0aXBsaWVyIjowLjksImFkanVzdG1lbnQiOjB9LHsiaWQiOiJudWlzYW5jZXNfbm9uIiwibGFiZWwiOiJOb24iLCJtdWx0aXBsaWVyIjoxLCJhZGp1c3RtZW50IjowfV19XSwic2V0dGluZ3MiOnsibWluTXVsdGlwbGllciI6MC44NSwibWF4TXVsdGlwbGllciI6MS4xNSwiZGVmYXVsdE11bHRpcGxpZXIiOjF9fSwibW90ZXVySW1tb0FwaUtleSI6IjRmOGUwNDNiMjkwYzlkZmFmZTA5ZTIzOGY4MGJhMWQ3YmY5M2QzYjFhY2QzZWQ5OWNmY2M1ZTAxYWEwMjU4YWYiLCJwcml4QmFzZUFwcGFydGVtZW50IjoyNTAwLCJwcml4QmFzZU1haXNvbiI6MjgwMH0="
      style={{
        width: "100%",
        height: "100%",
      }}
      loading="lazy"
      allow="geolocation"
      sandbox="allow-scripts allow-same-origin allow-popups"
      referrerPolicy="origin-when-cross-origin"
      title="Kojimo AVM Widget"
    />
  )

  const triggerButton = (
    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
      Demander une estimation
    </Button>
  )

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {triggerButton}
        </DialogTrigger>
        <DialogContent className="bg-white w-full h-full max-h-[80vh] max-w-[80vw]">
          {iframeContent}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {triggerButton}
      </DrawerTrigger>
      <DrawerContent className="bg-white h-[95vh]">
        <div className="h-full">
          {iframeContent}
        </div>
      </DrawerContent>
    </Drawer>
  )
}