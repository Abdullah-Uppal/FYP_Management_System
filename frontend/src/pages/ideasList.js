import React from "react";
import Card from "../partials/card";
import ShowPdf from "../partials/showPdf";
import axios from "axios";
import { NavLink } from "react-router-dom";
const IdeaList = () => {

    const [files, setFile] = React.useState(null);
    const [isShow, setIsShow] = React.useState(false);
    const [filename, setFilename] = React.useState("");
    React.useEffect(() => {
        const fetchPdf = async () => {
            await axios
                .get("http://localhost:3000/project/getProjects")
                .then((res) => {

                    setFile(res.data.reverse());
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
    const Delete = async (file, url) => {
        await axios.delete(url + file)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const handleDelete = (e, file) => {
        const url = "http://localhost:3000/project/deleteProject/";
        Delete(e, url);
        const url1 = "http://localhost:3000/format/removefile/";
        Delete(file, url1);
        setFile(files.filter((file) => file._id !== e));
    }

    return (
        <div className="container w-full ">
            {files && files.length > 0 ? (
                <div className="flex flex-col gap-3 justify-center w-full h-full p-5">
                    <div className="absolute left-0 z-[10000]"></div>
                    <div className="absolute right-0 z-[10000] "></div>
                    <div
                        className={
                            files.length === 1
                                ?
                                "main-container relative grid grid-flow-col justify-items-start  py-2 overflow-hidden"
                                :
                                files.length === 2
                                    ? "main-container relative grid grid-flow-col justify-items-center  py-2 overflow-hidden overflow-x-scroll gap-3 md:overflow-none md:gap-0 lg:gap-3"
                                    : "main-container relative grid grid-flow-col justify-items-center py-2 gap-3 overflow-x-scroll scroll-smooth"
                        }
                    >
                        {files.map((file) => {
                            return (
                                <Card
                                    id={file._id}
                                    title={file.title}
                                    description={file.description}
                                    url={file.proposalDocument}
                                    date={file.date}
                                    handleClick={handleClick}
                                    handleDelete={handleDelete}
                                    key={file._id}
                                />
                            );
                        })}
                    </div>
                    <ShowPdf file={filename} showFile={isShow} setShowFile={setIsShow} />
                    <div className="flex py-2 self-end">
                        <NavLink
                            to={"/project/new"}
                            className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                        >
                            Create
                        </NavLink>
                    </div>
                </div>
            ) : (
                <div className="flex w-full flex-col">
                    <h1>No Format available</h1>
                    <div className="flex py-2 self-end">
                        <NavLink
                            to={"/project/new"}
                            className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                        >
                            Create
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}

export default IdeaList