import {NavLink} from "react-router-dom";
export default function Page404() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}

      <div className='min-h-full pt-16 pb-12 flex flex-col bg-white absolute inset-0'>
        <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <NavLink
              to='/'
              className='inline-flex'
            >
              <span className='sr-only'>Workflow</span>
              <img
                className='h-12 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                alt=''
              />
            </NavLink>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <p className='text-sm font-semibold text-indigo-600 uppercase tracking-wide'>
                404 error
              </p>
              <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                Page not found.
              </h1>
              <p className='mt-2 text-base text-gray-500'>
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className='mt-6'>
                <NavLink
                  to='/'
                  className='text-base font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Go back home<span aria-hidden='true'> &rarr;</span>
                </NavLink>
              </div>
            </div>
          </div>
        </main>
        {/* //! footer may be needed */}
      </div>
    </>
  );
}
