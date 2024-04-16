import Image from "next/image";
import { SmallSocialIcon } from "./small-social-icon";

export const Momvement = () => {
  return (
    <div className="bg-[#09274C] ">
      <div className="flex ">
        <div className="p-10">
          <Image
            src={"/images/man1.jpg"}
            alt="img"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="p-20 text-white space-y-3 w-[60%]">
          <h3 className="font-bold text-2xl">Dr: Zaher Ihssan Baadarani</h3>
          <p className="text-sm  text-white/90 font-semibold">
            president Syrian Future Movement (SFM)
          </p>
          <hr className="border-2 border-[#E23E4E] w-[20%]  bg-[#E23E4E] h-1" />
          <p className="font-semibold pt-4">
            The Syrian Future Movement (SFM): A Syrian national civil political
            entity, born from the womb of the Syrian revolution, with its own
            intellectual and civilizational identity. Its objectives stem from a
            vision with a specific approach, revolving around well-defined
            programmatic realms, and in accordance with practical and realistic
            strategies that evolve over time and place, without compromising
            national constants. It aims to reach a roundtable discussion that
            proposes a project of a national agreement document supported by the
            Syrian Future Movement (SFM) and calls for its adoption with the
            participation of various national political forces, aiming for civil
            peace and the revival of Syria after the devastating effects of war
            on both infrastructure and human beings alike.”
          </p>
          <div className="">
            <SmallSocialIcon size="30px" />
          </div>
        </div>
      </div>
    </div>
  );
};
