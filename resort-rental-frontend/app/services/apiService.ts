const apiService = {
    get: async function (url:string) : Promise<any> {
        console.log('get', url)

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json',
                }
            })
            .then(respose => respose.json())
            .then(json => {
                console.log('Respose', json)

                resolve(json)
            })

            .catch(error => {
                reject(error)
            })
        }) 
    }
}


export default apiService;