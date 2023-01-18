 // ## Array Cardio Day 2

 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
console.table(comments);
  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  //  OLD WAY FUNCTION CHECK IF SOME ONE AGE OVER 19 YEARS OLD
  const isAdults = people.some(function(person){
    const currentYear = new Date().getFullYear();
    if(currentYear - person.year <= 19){
        return true;
    }else{
        return false;
    }
  });
//   console.log(isAdults);

  // ES6 ARROW FUNCTION CHECK CODE 
  const isAdult = people.some(person=>{
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
  });
//   console.log(isAdult);
  // Array.prototype.every() // is everyone 19 or older?
  // OLD FUNCTION CHECK
  const allAdults = people.every(function(peron){
    const currentYear = new Date().getFullYear();
    if(currentYear - peron.year === 19){
        return true;
    }else{
        return false;
    }
  });
//   console.log(allAdults);

// CHECK ES6 ARROW FUNCTION  JUST ONE LINE CODE
const allAdult = people.every(person=>new Date().getFullYear()-person.year >= 19)
// console.log(allAdult);


  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

// CHECK OLD FUNCTION 
const commentId = comments.find(function(comment){
    if(comment.id === 823423){
        return comment.id
    }
});
// console.table(commentId);
// HERE ES6 FUNCTION JUST ONE LINE CODE CHECK
const comment = comments.find(comment=>comment.id===823423);
// console.table(comment);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423 
  // CHECK ES6 ARROW FUNCTION 
  const index = comments.findIndex(index=>index.id === 823423);
  comments.splice(index,1)
  console.table(comments);

  const newComments = [
    ...comments.slice(0,index),
    ...comments.slice(index +1)
  ];
  console.table(newComments);
