const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}