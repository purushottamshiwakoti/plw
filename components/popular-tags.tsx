import { Button } from "./ui/button";

export const PopularTags = () => {
  return (
    <div>
      <h2 className="uppercase text-base font-semibold ">Popular Tags</h2>
      <div>
        <hr className="w-[35%] border-2 border-buttonHoverBg" />
      </div>
      <div className="mt-2">
        <div className="mt-5  gap-3 grid grid-cols-2">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="">
              <Button
                variant={"ghost"}
                className="bg-gray-500/10 w-full text-sm text-muted-foreground"
              >
                Tag {index + 1}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
