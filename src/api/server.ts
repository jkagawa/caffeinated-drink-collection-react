const token = 'feeb49d23e87301305e51b440a13201ff98457b8c3da64aa'
const base_url = 'https://flower-fallacious-hose.glitch.me'

export const server_calls = {
    get: async () => {
        const response = await fetch(base_url + '/api/drink', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            }
        })

        if(!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(base_url + '/api/drink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(base_url + `/api/drink/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(base_url + `/api/drink/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            }
        })

        if(!response.ok) {
            throw new Error('Failed to delete data on the server')
        }

        return
    }
}