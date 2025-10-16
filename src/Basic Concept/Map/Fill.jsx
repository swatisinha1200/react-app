import React from 'react'

export const Fill = () => {
    const String=`I am learning React.\n       React is a popular                   JavaScript library for building user interfaces. React makes it easy to create interactive and dynamic web applications. It allows developers to build reusable UI components and manage the state of their applications efficiently.   React is maintained by Facebook and has a large community of developers who contribute to its growth and development.                                                                                                                                                
    React is a powerful tool for building modern web applications.
    It is widely used by companies and developers around the world.
    Learning React can open up many opportunities in the field of web development.
    
    
    Overall, React is a great choice for building web applications and is definitely worth learning.`;
    const st="    Hellog     World   ";
    const st1="hello javascript world";
    const str=String.replace(/\s+/g,' ');     
    const str1=st.replace("g","f");
    
    const str2=st1.slice(2,7);
    const countCharacter=String.length; 
    const s=String.split('.');
    const sentenceCount=s.filter((i)=>i.length>0).length;
    const para =String.split('\ns*\n');
    const paraCount=para.filter((i)=>i.length>0).length;
    const w=String.trim();
    const Words=w.split(/\s+/);
    console.log(Words);
    const wordCount=Words.filter((i)=>i.length>0).length;
    console.log(wordCount);
    console.log(countCharacter);
    console.log(sentenceCount);
    console.log(paraCount);
    console.log(str);
    console.log(str1);  
    console.log(str2);
    


    
    
    
    
  return (
    <div>
      
    </div>
  )
}

