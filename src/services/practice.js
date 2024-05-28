const BASE_URL = `http://localhost:3002/words`;

const show = async () => {
    try {
    const res = await fetch(BASE_URL )
    const data = await res.json()
    return data;
    } catch (err) {
      console.log(err);
    }
  };

export { show };