

const DoctorRequest = () => {
  const acceptRequest = () => {
    console.log("Request accepted");
  
  };
  const rejectRequest = () => {
    console.log("Request rejected");
  };

  const docData = [
    {
      
      fname: 'Deepak',
      lname: 'P',
      specialization:'Dentist',
      contact: 9962456231,
      id: 'M1545',
    },
    
  ];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Doctor Requests
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              First Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Last Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Specialization
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Contact Details
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Assosiation Id
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        
        {docData.map((doc, key) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-6 ${
              key === docData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{doc.fname}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{doc.lname}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{doc.specialization}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{doc.contact}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{doc.id}</p>
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

export default DoctorRequest;
