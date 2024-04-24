export const Categories = () => {
  return (
    <div>
      <h2 className="uppercase text-base font-semibold ">Categories</h2>
      <div>
        <hr className="w-[35%] border-2 border-buttonHoverBg" />
      </div>
      <div className="mt-2">
        <div className="mt-5 space-y-3">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              className="flex items-center justify-between text-sm text-muted-foreground cursor-pointer"
              key={index}
            >
              <h2>Conference {index + 1}</h2>
              <div>(2)</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
