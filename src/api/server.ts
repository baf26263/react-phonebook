let token = 'fde31f35b81ef191d414fdb784edfeb370cc05586ce5d0f2'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-uifx.onrender.com`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://phonebook-uifx.onrender.com`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://phonebook-uifx.onrender.com/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch(`https://phonebook-uifx.onrender.com/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete new data on server')
        }

        return;
    }
}