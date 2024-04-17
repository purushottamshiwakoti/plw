"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

export const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <DialogTrigger>
          <Search className="w-5 h-5 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="rounded-none border-none p-2">
          <div className="mt-5 flex ">
            <Input
              className="h-[4rem] rounded-none focus-visible:ring-0 text-lg focus-visible:inset-0    "
              placeholder="Type here to search..."
            />
            <Button
              className="bg-buttonHoverBg rounded-none -mt-[0.9px] h-[4.1rem]   hover:bg-buttonHoverBg/90 "
              onClick={() => setIsOpen(false)}
            >
              <Search className="w-5 h-5 cursor-pointer" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
