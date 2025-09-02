const Announcements = () => {
  return (
    <>
      <div className="p-4 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl">Announcements</h1>
          <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className=" flex flex-col gap-4 mt-2">
          <div className="bg-lameSkyLight p-4 rounded-md">
            <div className=" flex items-center justify-between">
              <h1 className=" font-medium">Lorem ipsum dolor sit amet.</h1>
              <span className=" text-xs text-gray-400 bg-white rounded-md p-1">
                01-01-2025
              </span>
            </div>
            <p className=" text-sm text-gray-400 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellat.
            </p>
          </div>
          <div className="bg-lamePurpleLight p-4 rounded-md">
            <div className=" flex items-center justify-between">
              <h1 className=" font-medium">Lorem ipsum dolor sit amet.</h1>
              <span className=" text-xs text-gray-400 bg-white rounded-md p-1">
                01-01-2025
              </span>
            </div>
            <p className=" text-sm text-gray-400 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellat.
            </p>
          </div>
          <div className="bg-lameYellowLight p-4 rounded-md">
            <div className=" flex items-center justify-between">
              <h1 className=" font-medium">Lorem ipsum dolor sit amet.</h1>
              <span className=" text-xs text-gray-400 bg-white rounded-md p-1">
                01-01-2025
              </span>
            </div>
            <p className=" text-sm text-gray-400 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
