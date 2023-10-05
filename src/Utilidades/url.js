


export const generateQueryParams = (request)=>{
    const  data = Object.entries(request)
    const querys=data.map(filter =>(filter[0] + "="+ filter[1]))
    return querys.reduce((acu,act)=>( acu+=act + "&" ),"")
}
