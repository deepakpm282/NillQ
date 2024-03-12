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

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Doctor Requests
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">First Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Last Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Specialization</p>
        </div>
        <div className="col-span-1 flex items-center mr-2">
          <p className="font-medium">Contact Details</p>
        </div>
        <div className="col-span-1 flex items-center mr-3">
          <p className="font-medium">Association Id</p>
        </div>
        <div className="col-span-1 flex items-center mr-3">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {docData.map((doc, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {doc.fname}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {doc.lname}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${doc.specialization}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white mr-2">{doc.contact}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${doc.id}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded" onClick={acceptRequest}>Accept</button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 ml-2 rounded" onClick={rejectRequest}>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default TableTwo;
