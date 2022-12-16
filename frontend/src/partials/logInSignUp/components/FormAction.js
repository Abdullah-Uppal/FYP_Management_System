
export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  // const { loginWithRedirect } = useAuth0();

  return (
    <>
    
        {type === "Button" ? (
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900  hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 mt-10"
            onSubmit={handleSubmit}
          >
            {text}
          </button>
        ) : (
          <></>
        )}
    </>
  );
}
