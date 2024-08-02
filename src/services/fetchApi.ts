import axios from "axios"

export const fetchDate = async () => {
 try {
  const response = await axios.post('https://run.mocky.io/v3/72e7e252-2f2b-462c-8e60-30a8a0cac801')
  return response;

 }
 catch (error) {
  return error;

 }

}

