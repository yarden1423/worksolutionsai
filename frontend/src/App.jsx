import * as React from 'react';
import Container from '@mui/material/Container';
import HomePage from './components/homePage/homePage';

export default function App() {

  const job1 = {ID: 1, jobTitle: "Software developer bla bla bla bla bla", description : "I am looking for a software developer" ,
  location: "Raanana", companyName: "Redhat", skills: [{id:1,name:"Java"}, {id:2,name:"Python"},{id:3, name:"C++"}], contactInfo: "0522803670", link: "https://www.youtube.com/watch?v=HxD5La2BlwQ"}
  const job2 = {ID: 2, jobTitle: "Software developer bla bla bla bla bla", description : "I am looking for a software developer" ,
  location: "Raanana", companyName: "Redhat", skills: [{id:1,name:"Java"}, {id:2,name:"Python"},{id:3, name:"C++"}], contactInfo: "0522803670", link: "https://www.youtube.com/watch?v=HxD5La2BlwQ"}
  const job3 = {ID: 3 , jobTitle: "Software developer bla bla bla bla bla", description : "I am looking for a software developer" ,
  location: "Raanana", companyName: "Redhat", skills: [{id:1,name:"Java"}, {id:2,name:"Python"},{id:3, name:"C++"}], contactInfo: "0522803670", link: "https://www.youtube.com/watch?v=HxD5La2BlwQ"}
  const job4 = {ID: 4, jobTitle: "Software developer bla bla bla bla bla", description : "I am looking for a software developer" ,
  location: "Raanana", companyName: "Redhat", skills: [{id:1,name:"Java"}, {id:2,name:"Python"},{id:3, name:"C++"}], contactInfo: "0522803670", link: "https://www.youtube.com/watch?v=HxD5La2BlwQ"}
  const job5 = {ID: 5, jobTitle: "Software developer bla bla bla bla bla", description : "I am looking for a software developer" ,
  location: "Raanana", companyName: "Redhat", skills: [{id:1,name:"Java"}, {id:2,name:"Python"},{id:3, name:"C++"}], contactInfo: "0522803670", link: "https://www.youtube.com/watch?v=HxD5La2BlwQ"}
  const job6 = {ID: 6 , jobTitle: "Software developer bla bla bla bla bla", description : "I am looking for a software developer" ,
  location: "Raanana", companyName: "Redhat", skills: [{id:1,name:"Java"}, {id:2,name:"Python"},{id:3, name:"C++"}], contactInfo: "0522803670", link: "https://www.youtube.com/watch?v=HxD5La2BlwQ"}


  return (
     <HomePage />
  );
}
