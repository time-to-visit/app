import axios from "../../../Utilidades/axios/sites-axios"
import { DOMAIN_ROUTES, DOMAIN_SITES } from "../../../constant/url"




const generateComment = async ({ type, review }) => {
    let url = ""
    switch (type) {
        case "sites":
            url = DOMAIN_SITES.SITES_REVIEW
            break
        case "route":
            url = DOMAIN_ROUTES.ROUTES_COMMENTS
    }
    try {
        const { data } = await axios.post(url, review)
        console.log(data)
        if (data.status_code == 200) {
            return true
        }
    } catch (e) {
        console.log(e.response)
        return false
    }
}


const seeComment = async ({ type, siteID, routeID }) => {
    let url = ""

    try {
        if (type === "sites") {
            url = `${DOMAIN_SITES.SITES_REVIEW}/${siteID}`
            const { data } = await axios.get(url)
            return data.data
        } else if (type === "route") {
            url = `${DOMAIN_ROUTES.ROUTES_COMMENTS}/${routeID}`
            const { data } = await axios.get(url)
            data.data = data.data.map(data => ({
                user_nombre: data.name_user,
                comment: data.description
            }))
            return data.data
        }
    } catch (e) {
        return []
    }

}






export {
    generateComment,
    seeComment
}