export type Property = {
  id: string;
  price_per_night: number;
};

interface ReservationSidebarProps {
  property: Property;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
}) => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">{property.price_per_night} per night</h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label htmlFor="" className="block font-bold text-xs mb-2">
          Guests
        </label>
        <select name="" id="" className="w-full -ml-1 text-sm">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>

      <div className="w-full mb-6 py-6 text-center text-white bg-primary rounded-xl hover:bg-secondary">
        Book
      </div>

      <div className="flex justify-between mb-4 align-center">
        <p>$200 * 4 nights</p>
        <p>$800</p>
      </div>

      <div className="flex justify-between mb-4 align-center">
        <p>RSTR fee</p>
        <p>$800</p>
      </div>

      <hr />

      <div className="mt-4 flex justify-between mb-4 align-center font-bold">
        <p>Total</p>
        <p>$840</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
