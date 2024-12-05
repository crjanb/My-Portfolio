export default function Footer() {
    return (
        <footer className="w-3/6 mx-auto mt-10">
            <div className="flex justify-center py-4 items-center">
                <div className="flex items-center justify-center flex-1">
                    <p className="text-amber-200 text-md pr-5">Reach out to me</p>

                    <ul className="flex items-center gap-x-1 sm:flex-initial">
                        <li>
                            <a className="inline-block p-2 sm:hover:text-link" href="https://github.com/crjanb" target="_blank" rel="noopener noreferrer">
                                <svg className="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                </svg>
                                <span className="sr-only">Github</span>
                            </a>
                        </li>
                        <li>
                            {/* LinkedIn Icon */}
                            <svg fill="#ffffff" width="25" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <g id="LinkedIn"> <g> <path d="M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z" /> <g> <path d="M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z" /> <circle cx="7.376" cy="6.744" r="1" /> <path d="M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z" /> </g> </g> </g> </g>

                            </svg>
                            <span className="sr-only">LinkedIn</span>
                        </li>
                        <li>
                            <a className="inline-block p-2 sm:hover:text-link" href="https://twitter.com/crjanb_" target="_blank" rel="noopener noreferrer">
                                <svg className="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a className="inline-block p-2 sm:hover:text-link" href="mailto:crjanb@gmail.com">
                                <svg className="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9CA3AF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                    <polyline points="3 7 12 13 21 7"></polyline>
                                </svg>
                                <span className="sr-only">Email</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">
                                <svg fill="#ffffff" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                    <g id="SVGRepo_iconCarrier"> <path d="M25.099 31.812c-0.025 0.12-0.156 0.188-0.375 0.188h-4.183c-0.249 0-0.468-0.109-0.656-0.328l-6.907-8.787-1.932 1.828v6.817c0 0.313-0.151 0.469-0.463 0.469h-3.245c-0.312 0-0.469-0.156-0.469-0.469v-31.061c0-0.308 0.157-0.469 0.469-0.469h3.245c0.312 0 0.463 0.161 0.463 0.469v19.124l8.271-8.359c0.224-0.224 0.443-0.328 0.661-0.328h4.319c0.192 0 0.317 0.077 0.38 0.239 0.063 0.199 0.047 0.339-0.047 0.417l-8.74 8.459 9.115 11.343c0.125 0.141 0.156 0.276 0.093 0.48z" /> </g>
                                </svg>
                                <span class="sr-only">Kaggle</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}
