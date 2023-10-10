const API_URL = 'http://localhost:3000';

export const createTimelineService = async (formDataTimeline) => {
    const formData = new FormData();
    formData.append('image', formDataTimeline.image);
    formData.append('title', formDataTimeline.title);
    formData.append('year', formDataTimeline.year);
    formData.append('text', formDataTimeline.text);
  
    const response = await fetch(`${API_URL}/createTimeline`, {
      method: 'POST',
      headers: {
        Authorization: formDataTimeline.token,
      },
      body: formData,
    });
  
    const json = await response.json();
    console.log(json)
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };
  
  export const getTimelineService = async () => {
    const response = await fetch(`${API_URL}/timeline`, {
      method: 'GET',
    });
    console.log(response)
  
    const json = await response.json();
    console.log(json.data.timeline)
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json.data.timeline; 
  };
  
  getTimelineService()

  export const updateTimelineService = async (data, idTimeline) => {
    const formData = new FormData();
  
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });
  
    const response = await fetch(`${API_URL}/timeline/${idTimeline}`, {
      method: 'PUT',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
      body: formData,
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };
  
  export const deleteTimelineService = async (idTimeline) => {
    const response = await fetch(`${API_URL}/timeline/${idTimeline}`, {
      method: 'DELETE',
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };
  