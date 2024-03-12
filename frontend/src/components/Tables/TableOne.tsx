

const TableOne = () => {
  const acceptRequest = () => {
    console.log("Request accepted");
  
  };
  const rejectRequest = () => {
    console.log("Request rejected");
  };

  const brandData = [
    {
      name: 'RajaGiri',
      Address: 'Chunangamvely, Aluva - 683 112',
      Contact: '0484-290 5100',
      Location: 'Kerala',
    },
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Hospital Requests
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Hospital Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Address
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Location
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Contact Details
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        
        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.Address}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.Contact}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.Location}</p>
            </div>

            <div className="hidden items-center p-2.5 sm:flex">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded" onClick={acceptRequest}>Accept</button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 ml-2 rounded" onClick={rejectRequest}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
