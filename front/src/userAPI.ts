export const getUser = async (): Promise<any> => {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/sample',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const users = await res.json();
        return users;

    }catch ( error) {
        console.log(error);
    }
}