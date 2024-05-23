const url = 'https://wordsapiv1.p.rapidapi.com/words/?random=true';
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
	console.log(result);
    //  {
//   word: 'pipe clamp',
//   results: [
//     {
//       definition: 'a clamp for holding pipe that is to be cut or threaded',
//       partOfSpeech: 'noun',
//       synonyms: [Array],
//       typeOf: [Array]
//     }
//   ]
// }
} catch (error) {
	console.error(error);
}
};
// show();
export { show } ;