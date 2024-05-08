import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const MobileNav = ({ menu }: { menu: any }) => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-primary">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-3 mt-10">
          {menu.map(
            (item: any, index: any) =>
              item.attributes.children.data.length == 0 && (
                <DialogClose asChild key={index}>
                  <Link href={item.attributes.url ?? "/"}>
                    <span
                      className={cn(
                        path === item.attributes.url
                          ? "text-buttonHoverBg font-semibold text-base "
                          : "font-semibold text-base hover:text-buttonHoverBg "
                      )}
                      // onMouseEnter={() => handleParentClick(item.attributes.title)}
                      title={item.attributes.title}
                    >
                      {item.attributes.title}
                    </span>
                  </Link>
                </DialogClose>
              )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
