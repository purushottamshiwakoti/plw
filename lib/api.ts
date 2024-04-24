export const apiCall = async (name: string, params: string) => {
    try {
        let apiUrl = process.env.APIURL; // Default to production API URL

        // Check if it's in development mode and override API URL
        if (process.env.NODE_ENV === 'development') {
            apiUrl = process.env.DEVAPIURL || apiUrl;
        }

        const response = await fetch(`${apiUrl}/${name}?${params}`, {
        // const response = await fetch(`${apiUrl}/${"header"}?${"populate=*"}`, {
            cache: "no-store"
        });

        const res = await response.json();
        return res;

    } catch (error) {
        return null;
    }
}
