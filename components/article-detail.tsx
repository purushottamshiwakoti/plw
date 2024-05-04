import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, MessageCircle, User } from "lucide-react";

export const ArticleDetail = () => {
  return (
    <div
      // href={"#"}
      className=" pb-5  group cursor-pointer "
    >
      <div className="w-full h-[25rem] overflow-hidden relative">
        <Image
          src={"/images/p2.jpg"}
          alt="img"
          fill
          className="object-cover "
        />
        <div className="absolute bottom-10 left-10">
          <Button className="bg-buttonHoverBg hover:bg-buttonHoverBg/80 rounded-sm px-[30px]">
            Category
          </Button>
        </div>
      </div>
      <div className="space-y-5 mt-5">
        <h3 className="text-[#323031] font-bold text-2xl">
          Upholds The Idea That True Democracy Right{" "}
        </h3>
        <div className="md:flex items-center gap-5 md:space-y-0 space-y-3">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-buttonHoverBg" />
            <p className="text-muted-foreground font-medium">admin</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-buttonHoverBg" />
            <p className="text-muted-foreground font-medium">June 8, 2023</p>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-buttonHoverBg" />
            <p className="text-muted-foreground font-medium">0 Comments</p>
          </div>
        </div>
        <p className="text-muted-foreground ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit porro
          ipsa asperiores laudantium dolor officiis adipisci facere culpa
          nostrum quibusdam harum quaerat illo repudiandae magni cupiditate
          iusto dolorum, distinctio, consectetur incidunt voluptate excepturi
          voluptatem. Exercitationem assumenda maiores odio in vel quasi, vero
          nostrum dolorem, adipisci cum accusamus iste expedita id error
          reiciendis ex? Cupiditate rerum tempora, laudantium, accusamus
          suscipit dolores laborum exercitationem magnam ipsa minus cumque!
          Nemo, sed reprehenderit. Expedita repellendus dignissimos dolor
          voluptatibus deleniti. Adipisci voluptate dolores quibusdam
          exercitationem sint id quisquam molestiae libero atque amet! Doloribus
          a delectus dolorum possimus laborum repellat, rerum nobis, sint
          consectetur tempore vero est. Eveniet labore a provident aut
          recusandae harum, suscipit eligendi, ducimus aliquid totam tempora
          impedit dolores porro quam? Dolorum vitae, provident exercitationem
          sequi perspiciatis sapiente. Dolor harum deleniti saepe voluptate
          nesciunt repudiandae sequi aliquam ullam amet eum, labore, ab
          assumenda cum, dicta quod natus. Minima, voluptatum non explicabo
          suscipit officia nisi quisquam tempora vel obcaecati et libero,
          maiores laborum ullam architecto ad quaerat nihil deleniti sit fugit
          deserunt dicta dolorum tempore, tenetur incidunt. Repudiandae eveniet
          quaerat vero voluptas molestiae itaque vel cumque ut facere iste nam
          aperiam, ipsa vitae ipsam quibusdam, soluta architecto sit, quo
          veritatis. Maxime, temporibus quis. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Odit tenetur iure alias, tempora nam
          placeat quis expedita et omnis quibusdam necessitatibus laudantium
          accusantium illum nesciunt dolore cum. Eius, necessitatibus iste
          nostrum itaque consectetur nemo quo. Consequatur dolores, blanditiis
          et adipisci tenetur tempore cupiditate doloremque consequuntur
          repudiandae porro maxime. Quasi qui officia ullam, magnam dignissimos
          animi ipsam atque nemo reiciendis necessitatibus voluptas explicabo
          dolorem inventore nostrum pariatur beatae assumenda quod tempora!
          Dignissimos perspiciatis odio sint, aliquid reiciendis, praesentium
          eos sapiente placeat libero deserunt laudantium optio impedit modi
          quos quam ducimus quasi neque. Consequuntur libero repellat, magnam
          ipsa dolore dolores porro placeat! Illo labore laborum quaerat esse
          optio possimus sint ipsa ullam quae facere quia qui ipsum accusantium
          assumenda molestiae reiciendis veniam laudantium sit corporis, neque
          magnam ex, exercitationem voluptate. Amet, ipsam? Asperiores delectus
          voluptatum eius, cum commodi in similique nobis, tempore quae incidunt
          ullam, dolorem minus neque? Voluptatum magnam omnis rem modi unde quia
          veritatis ipsum. Facilis sit ullam rem aperiam recusandae provident
          molestiae consequuntur quis a, harum voluptate cum, quo illum amet
          expedita error vero quibusdam facere iste maiores explicabo deleniti
          possimus magni fuga. Voluptatum incidunt totam magni, qui, consectetur
          perferendis voluptates dolor omnis sapiente unde eaque officiis, dicta
          alias.
        </p>
      </div>
    </div>
  );
};
