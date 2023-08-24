import { baoze_footer_socials, kyle_footer_socials } from "@/constants/nav-footer-lists/footer-lists"

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
                {baoze_footer_socials.map(({name, link, icon}, index) => (
                    <div key={`baoze-social-${index}`} className="pb-4">
                        Name: {name} <br/>
                        Link: {link} <br/>
                        Icon: {icon} 
                    </div>
                ))
                }
                kyle&apos;s socials here
            </div>
            <div className="align-middle text-center w-1/3" id="footer-contact-info">
                third man
            </div>
        </footer>
    )
}