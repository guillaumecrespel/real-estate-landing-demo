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
      src="https://avm.kojimo.fr/widget/index.html?config=eyJhcGlCYXNlVXJsIjoiaHR0cHM6Ly9hcGkua29qaW1vLmZyIiwicHVibGljQXBpS2V5IjoidGVzdC1rZXktMTIzIiwicmVkaXJlY3RVcmwiOiJodHRwczovL3JlYWwtZXN0YXRlLWxhbmRpbmctZGVtby52ZXJjZWwuYXBwI2NvbnRhY3QiLCJxdWVzdGlvbnNDb25maWdVcmwiOiJodHRwczovL2F2bS5rb2ppbW8uZnIvcXVlc3Rpb25zLWNvbmZpZy5qc29uIn0="
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
      <DrawerContent className="bg-white h-[85vh]">
        <div className="h-full p-4">
          {iframeContent}
        </div>
        <DrawerClose asChild>
          <Button variant="outline" className="m-4">
            Fermer
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}