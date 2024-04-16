import { StarList } from "@/components/star-list";
import { Eye } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <div className="px-[10rem] p-10">
      <StarList
        title=" What is the Syrian Future Movement?"
        description=" A political organization born from the womb of the Syrian Revolution,
          established in 2012 with the participation of free Syrians at home and
          abroad, to contribute to achieving the goals of the Syrian Revolution
          in overthrowing the Assad regime and rebuilding a free, united and
          independent Syria.​"
      />

      <div className="grid grid-cols-2 gap-10 mb-10 px-[10rem] mt-10">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            className="    shadow-md border-1 w-full pb-5 rounded-md"
            key={index}
          >
            <div className="flex px-2 items-center space-x-2">
              <div>
                <Eye className="w-10 h-10 text-buttonBg rotate-45" />
              </div>
              <h2 className="text-[#302E2F] font-semibold text-lg flex-1 line-clamp-2">
                Programs
              </h2>
            </div>
            <div className="mt-3">
              <p className="text-muted-foreground text-sm line-clamp-6 px-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                consectetur dicta recusandae numquam officiis tempora earum
                voluptatem similique ad optio iure consequuntur voluptate
                obcaecati libero velit, voluptatibus veniam excepturi delectus
                hic illum ullam! Totam, illum. Veritatis autem praesentium
                inventore quas nam repellat vero ipsa quos eos pariatur? Nam
                impedit laborum consequatur doloremque, cumque ipsa sint quia
                sunt ratione saepe exercitationem pariatur dicta deleniti quidem
                ex fugit officia in libero aliquam velit. Reprehenderit
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
