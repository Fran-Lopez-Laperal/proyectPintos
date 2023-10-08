const API_URL = 'http://localhost:3000';

export const loginUserService = async ({ username, password }) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${API_URL}/users`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const createNewService = async (formDataNews) => {
  const formData = new FormData();
  formData.append('image', formDataNews.image);
  formData.append('title', formDataNews.title);
  formData.append('introduction', formDataNews.introduction);
  formData.append('text', formDataNews.text);

  const response = await fetch(`${API_URL}/createNews`, {
    method: 'POST',
    headers: {
      Authorization: formDataNews.token,
    },
    body: formData,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getNewsService = async () => {
  const response = await fetch(`${API_URL}/news`, {
    method: 'GET',
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data.news;
};
