import React from "react";
import Card from "../partials/card";
import ShowPdf from "../partials/showPdf";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Formats = () => {
  const [files, setFile] = React.useState(null);
  const [isShow, setIsShow] = React.useState(false);
  const [filename, setFilename] = React.useState("");
  React.useEffect(() => {
    const fetchPdf = async () => {
      await axios
        .get("http://localhost:3000/format/all")
        .then((res) => {
          console.log(res.data);
          setFile(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPdf();
  }, []);

  const handleClick = (e) => {
    setFilename(e);
    setIsShow(true);
  };
  return (
    <div className="container w-full ">
      {files ? (
        <div className="flex flex-col gap-3 justify-center w-full h-full p-5">
        <div className="absolute left-0 z-[10000]"></div>
        <div className="absolute right-0 z-[10000] "></div>
          <div
            className={
              files.length === 2
                ? "main-container relative grid grid-flow-col justify-items-center py-2 overflow-hidden"
                : "main-container relative grid grid-flow-col justify-items-center py-2 gap-3 overflow-x-scroll scroll-smooth"
            }
          >
            {files.map((file) => {
              return (
                <Card
                  title={file.title}
                  description={file.description}
                  url={file.file}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <ShowPdf file={filename} showFile={isShow} setShowFile={setIsShow} />
          <div className="flex py-2 self-end">
            <NavLink
              to={"/formats/upload"}
              className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
            >
              Create
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col">
          <h1>No Format available</h1>
        </div>
      )}
    </div>
  );
};

export default Formats;
