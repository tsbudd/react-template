export async function TemplateClient(endpoint, method="GET", body){
    let headers = {
        'Content-Type': "application/json"
    }

    let config = {
        method: method,
        headers: {
            ...headers
        }
    }

    if (body !== undefined){
        config.body = JSON.stringify(body);
    }

    let data;
    try{
        const response = await fetch(encodeURI(endpoint), config)
        if (response.ok){
            data = await response.json();
            return{
                status: response.status,
                data: data,
                url: response.url
            }
        }
        throw new Error(response.statusText)
    } catch (e) {
        return Promise.reject(e.message ? e.message:data)
    }
}

TemplateClient.GetUselessFact = function (){
    return TemplateClient("https://uselessfacts.jsph.pl/random.json?language=en");
}