const layout = () => {
  return (
    <div className="bg-white  h-screen flex justify-center  items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <h1 className="text-4xl md:text-6xl lg:text-6xl text-blank font-bold ">
            Welcome to Admin
            <br />
            <span className="text-gray-500 lg:ml-28 ">Dashboard</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default layout;
