import imobiliaria from '../assets/docs/ImobiliariaDocs.json'



const getDataInmo = async () => {
    const response = await fetch('../assets/docs/ImobiliariaDocs.json');
    const json = await response.json();
    return json

}

const jsonData = getDataInmo();
console.log(jsonData)