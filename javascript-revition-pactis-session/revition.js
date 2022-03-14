
// nested loop 

const dreamGirl = [
    {
      dream1: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [
                { name: "rofik" },
                { name: "jobbar" },
                { name: "salam" },
                { name: "borkot" },
                undefined,
              ],
            },
          },
          { instagram: "https://www.instagram.com/" },
          { twitter: "https://twitter.com/" },
          { github: "https://github.com/" },
          { phone: ["01254823212", "02152457"] },
        ],
      },
    },
  ];

//   console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);

// const friends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;
// console.log(friends);

// for( const friend of friends){
//     console.log(friend?.name);
// }

//for of and for in kokhon use korbo?
//1. for of array opor loop chalate use korte hoy.
// exam:

// const myDetails =[ "rock", "shila",  "chinki" , 45, 66];
    
//         for(const element of myDetails ){
//             console.log(element);
//         }
//2. for in object ar opor loop chalate use kora hoy.
// exam:
// const myDetails ={
//     father:"rock",
//      mother: "shila", 
//      sister: "chinki" 
//     }
    //object ar kono akta value ke access korte chaile 
// console.log(myDetails['mother']);

    // for(const element in myDetails ){
        // console.log(element);
        //property soho dekte chaile
    // console.log(`${element}: ${myDetails[element]}`);
    // }
    
    
    //-----------filter------------------

    const product =[
        {id: 1, name:'laptop', price: 5000, color: 'black'},
        {id: 2, name:'Mobile', price: 6000, color: 'red'},
        {id: 3, name:'Monitor', price: 7000, color: 'black'},
        {id: 4, name:'Watch', price: 4000, color: 'green'},
        {id: 5, name:'laptop', price: 3000, color: 'yello'},
        {id: 6, name:'Bad', price: 5000, color: 'white'},
        {id: 7, name:'laptop', price: 9000, color: 'red'}
    ];

    // const result = product.filter(pd => pd.color == 'black');
    // 1 Number ta bade baki gola dew 
    const result = product.filter(pd => pd.id != 1);
    console.log(result);