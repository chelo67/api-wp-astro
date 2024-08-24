// dataFetch.js

export async function fetchAutosData() {
    try {
      const response = await fetch('https://ingenious-jaguar-f974f7.instawp.xyz/wp-json/wp/v2/autos?acf_format=standard');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching the data:', error);
      return null;
    }
  }
  