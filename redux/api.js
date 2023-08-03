// api.js
const saveListToDatabase = async (list) => {
    try {
      // Replace this with your actual API call to save the list to the database
      const response = await fetch('your-server-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(list),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving list to database:', error);
      throw error;
    }
  };
  
  export { saveListToDatabase };
  