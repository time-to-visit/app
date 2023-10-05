const URL_NATIVE = "https://time-to-visit-v2.tech/"

const URL_USER = URL_NATIVE + "user"
const URL_SITES = URL_NATIVE + "sites"
const URL_GUIDES = URL_NATIVE + "guides"
const URL_ROUTES = URL_NATIVE + "routes"

// const URL_USER = 'https://fe1a-191-156-130-86.ngrok.io'
// const URL_SITES = 'https://447a-191-156-130-86.ngrok.io'
// const URL_GUIDES = 'https://17fa-191-156-130-86.ngrok.io'
// const URL_ROUTES =  'https://3dfc-191-156-140-179.ngrok.io'

export const DOMAIN_USER = {
    USER_REGISTER: URL_USER + "/register",
    USER_AUTH: URL_USER + "/auth",
    USER_PROGRESS: URL_USER + "/progress"

}


export const DOMAIN_SITES = {
    SITES_DEPARTMENT: URL_SITES + "/deparment",
    SITES_MUNICIPALITIES: URL_SITES + "/municipalities",
    SITES_CATEGORY: URL_SITES + "/category",
    SITES_CONTACT: URL_SITES + "/contact",
    SITES_RESOURCE: URL_SITES + "/resource",
    SITES_REVIEW: URL_SITES + "/review",
    SITES_SUBCATEGORY: "/subcategory",
    SITES_ENDPOINT : URL_SITES +  "/sites"
}


export const DOMAIN_GUIDES ={
    GUIDES_ENPOINT : URL_GUIDES + "/guides",
    GUIDES_LEVELS: URL_GUIDES + "/level/category",
    GUIDES_LEVEL_CONTAINER: URL_GUIDES + "/container-level/level",
    GUIDES_OBJECTIVE : URL_GUIDES+ "/objectives/level"
}



export const DOMAIN_ROUTES ={
    ROUTES_ENDPOINT : URL_ROUTES +"/route",
    ROUTES_STEPS : URL_ROUTES + "/step/route",
    ROUTES_COMMENTS : URL_ROUTES + "/comment",
}