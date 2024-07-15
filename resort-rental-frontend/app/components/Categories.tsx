import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-3 pb-6 flex items-center space-x-12">
      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>

      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Category - Villas"
          width={20}
          height={20}
        />

        <span className="text-xs">Villas</span>
      </div>

      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Category - Cabins"
          width={20}
          height={20}
        />

        <span className="text-xs">Cabins</span>
      </div>

      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Category - Tiny homes"
          width={20}
          height={20}
        />

        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};

export default Categories;
