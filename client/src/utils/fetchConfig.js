// function to fetch backend API URL from config file
export async function fetchConfig() {
    const response = await fetch('../public/config.json');
    const config = await response.json();
    return config.backendAPI;
}