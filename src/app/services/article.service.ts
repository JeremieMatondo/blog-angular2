import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  
  // articles: Article[] = [{ 
  //   id:1,
  //   title:"apprendre python",
  //   content:"python est un langage de programmation",
  //   slug :"apprendre python",
  //   auteur : "Jhon doe",
  //   photo :"https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
  //   created_at:"2021-03-10",
  //   nb_comments :10,
  //   categories :['python','Programmation']},
  //   { 
  //     id:2,
  //     title:"apprendre java",
  //     content:"java ",
  //     slug :"apprendre java",
  //     auteur : "ben mat",
  //     photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwah60EQxlnuGFag1TRvQAxFFBmxgjva8XLg&s",
  //     created_at:"2021-03-10",
  //     nb_comments :1,
  //     categories :['java','Programmation']},
  //     { 
  //       id:3,
  //       title:"apprendre python",
  //       content:"python est un langage de programmation",
  //       slug :"apprendre python",
  //       auteur : "Jack mak",
  //       photo :"https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
  //       created_at:"2021-03-10",
  //       nb_comments :20,
  //       categories :['python','Programmation']},
  //     ]
 articles:Article[]=[];

//  async all(): Promise<Article[]> {
// let rep = await fetch(' http://127.0.0.1:8000/api/articles').then((response) =>
//    response.json()


//   );
//   console.log(rep);

//   return rep;
// //   }
 
// }

async all(): Promise<Article[]>{
  return await fetch('http://127.0.0.1:8000/api/articles').then(response => response.json()).then(data => {
    console.log(data)
    return data.data
  });
}
async one(id: number): Promise<Article> {
  return await fetch('http://127.0.0.1:8000/api/articles/' + id).then(response => response.json()).then(data => {
    console.log(data)
    return data.data
  });

}
}
