import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-3 pb-6 flex items-center space-x-12">
      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Pool - Category"
          width={20}
          height={20}
        />

        <span className="text-xs">Amazing pools</span>
      </div>

      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Pool - Category"
          width={20}
          height={20}
        />

        <span className="text-xs">Villas</span>
      </div>

      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Pool - Category"
          width={20}
          height={20}
        />

        <span className="text-xs">Cabins</span>
      </div>

      <div className="pb-4 space-y-2 flex flex-col items-center cursor-pointer border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icon_category.jpg"}
          alt="Pool - Category"
          width={20}
          height={20}
        />

        <span className="text-xs">Tiny houses</span>
      </div>
    </div>
  );
};

export default Categories;
