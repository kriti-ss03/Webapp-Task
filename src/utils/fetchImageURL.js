import query from "./api"

const fetchImageURL = async (queryString) => {
    const response = await query({ inputs: queryString });
    let urlCreator = window.URL || window.webkitURL;
    let imageUrl = urlCreator.createObjectURL(response);
    return imageUrl;
}

export default fetchImageURL;