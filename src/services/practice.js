const BASE_URL = `http://18.188.210.18:3002/words`;

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