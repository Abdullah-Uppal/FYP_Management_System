export default function FormExtra({TogglePassword}){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-slate-900 focus:ring-slate-500 border-gray-300 rounded"
            onChange={TogglePassword}
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Show Password
          </label>
        </div>

        {/* <div className="text-sm">
          <a href="/" className="font-medium text-slate-600 hover:text-slate-500">
            Forgot your password?
          </a>
        </div> */}
      </div>

    )
}