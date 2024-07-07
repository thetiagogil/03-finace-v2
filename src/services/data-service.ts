const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
  const token = window.localStorage.getItem("authToken");
  return {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : ""
  };
};

export const DataService = {
  async getData(endpoint: string) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "GET",
        headers: getAuthHeaders()
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async postData(endpoint: string, data: object) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async putData(endpoint: string, data: object) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async deleteData(endpoint: string) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "DELETE",
        headers: getAuthHeaders()
      });
      return { status: response.status, message: "Delete successful" };
    } catch (error) {
      throw error;
    }
  }
};
