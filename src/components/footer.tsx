// sitemap (links to pages)
// Socials
// contact info

export default function Footer(){
    return(
        <footer className='flex flex-row gap-x-20 bg-gray-100 text-black dark:bg-slate-900 dark:text-gray-400 pb-12 pt-12'> {/*lg:pt-16*/}
            <div className='min-h-0 flex-col text-center w-1/3 text-gray-800 lg:flex-row' id="footer-sitemap">
                hola amiga
            </div>
            <div className="align-middle text-center w-1/3" id="footer-socials">
                second man
            </div>
            <div className="align-middle text-center w-1/3" id="footer-contact-info">
                third man
            </div>
        </footer>
    )
}