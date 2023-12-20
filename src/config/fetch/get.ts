const baseUrl = "https://tegain-api.talrop.works/api/";
// const baseUrl = 'https://tegain-erp-api.talrop.works/api/v1/';

export default async function get(path: any) {
	try {
		const response = await fetch(
			`${baseUrl}${path}`,
			{
				cache: "no-store",
			}
		)
		if (!response.ok) {
			console.log("Error")
			// throw new Error(`HTTP error! Status: ${response.status}`)
		}

		return response.json()
	} catch (error) {
		console.error("An error occurred:", error)
		throw error
	}
}
