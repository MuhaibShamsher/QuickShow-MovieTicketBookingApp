import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBigLeft, ArrowBigRight, ArrowBigRightDash, ArrowBigRightIcon } from 'lucide-react'

function PageNotFound() {
    return (
        <div class="flex flex-col items-center justify-center text-sm max-md:px-4 py-20 mt-25">
            <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                404 Not Found
            </h1>

            <div class="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>

            <p class="md:text-xl text-gray-400 max-w-lg text-center">
                The page you are looking for does not exist or has been moved.
            </p>

            <Link to={'/'} class="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all">
                Back to Home
                <ArrowBigRightIcon />
            </Link>
        </div>
    )
}

export default PageNotFound