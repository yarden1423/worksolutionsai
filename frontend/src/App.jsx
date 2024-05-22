import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import JobSuggestion from './components/jobSuggestion';
import Suggestion from './Suggestions';

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
    <div>
      <Suggestion jobs = {[job1, job2,job3, job4, job5, job6]}>

      </Suggestion>
    </div>
  );
}
