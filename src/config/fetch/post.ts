const demoBaseUrl = "https://tegain-api.talrop.works/api/";
// const liveBaseUrl = 'https://tegain-erp-api.talrop.works/api/v1/';

export default function post(path: string, data: any) {
  try {
    
    return new Promise(function (resolve, reject) {
      fetch(`${demoBaseUrl}${path}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (result) {
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}