
const input = document.querySelector('#input');

// écouteur d'évenement sur le bouton 
document.querySelector('#send').addEventListener('click', ()=>{

  // let chaine = input.value;
  // let longueurChaine = chaine.length;
  // let nombreSegments = 3;
  // let longueurSegment = Math.floor(longueurChaine / nombreSegments);
  
  // let segments = [];
  // for (let i = 0; i < nombreSegments; i++) {
  //   let debutSegment = i * longueurSegment;
  //   let finSegment = (i + 1) * longueurSegment;
  //   let segment = chaine.substring(debutSegment, finSegment);
  //   segments.push(segment);
  // }
  
  // console.log(segments);

// const key = '' ;

// // Phrase prédéfini + rss
// const prompt = 'utilise les données de chacun des articles présent dans le flux RSS, prends en compte (les articles, blog post, réseaux sociaux, tout, …) pour créer (une analyse, une prédiction, un résumé, un tableau récapitulatif, une comparaisons, un schéma, une liste à puce, une critique, autre) pour (chacun des articles du jour, chaque flux rss, autres). pour la rédaction utilise un ton (conversationnel, amical, professionnel, pédagogique, autre). donne une réponse bien détaillé et bien réfléchi. : ' + input.value;
// const url = 'https://api.openai.com/v1/chat/completions';



const key = ''

// Phrase prédéfini + rss
const prompt = 'utilise les données de chacun des articles présent dans le flux RSS, prends en compte (les articles, blog post, réseaux sociaux, tout, …) pour créer (une analyse, une prédiction, un résumé, un tableau récapitulatif, une comparaisons, un schéma, une liste à puce, une critique, autre) pour (chacun des articles du jour, chaque flux rss, autres). pour la rédaction utilise un ton (conversationnel, amical, professionnel, pédagogique, autre). donne une réponse bien détaillé et bien réfléchi. : ' + input.value;
const url = 'https://api.openai.com/v1/chat/completions';


// Requete envoyé à l'api ChatGpt
fetch(url, {
  method: 'POST',
  headers: {
    
    'Authorization': `Bearer ${key}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model : 'gpt-3.5-turbo',
    messages : [{role: "user", content: prompt}]
  })
})
  .then(response => response.json())
  .then(data => {
    // réponse de ChatGPT dans la console
    console.log(data.choices[0].message.content);
  })
  .catch(error => console.error(error));
})
