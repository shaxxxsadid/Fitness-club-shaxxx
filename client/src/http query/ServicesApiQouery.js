import { $host } from ".";

export const fetchAllServices = async () => {
    const response = await $host.get('api/service/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}