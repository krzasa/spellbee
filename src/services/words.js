const url = 'http://wordsapiv1.p.rapidapi.com/words/?random=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f87c3f11c3msh50afd734726d011p134727jsn2a94d786f64f',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};
const show = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export { show } ;