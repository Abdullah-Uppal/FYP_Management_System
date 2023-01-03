// import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-[7em] w-[7em]"
                    src="https://i.pinimg.com/originals/e9/d3/5b/e9d35b1793dfd860e7a05cc8633719f9.jpg"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            {/* <p className="text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-slate-600 hover:text-slate-500">
                {linkName}
            </Link>
            </p> */}
        </div>
    )
}