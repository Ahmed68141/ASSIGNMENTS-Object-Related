console.log("Q1:-");

// Q1 (Add/Update)
// Karo:

// year property add karo — value 2022
// color change karo — "Red" kar do
// console.log(car) karo — result kya aayega?
const car = { brand: "Toyota", color: "White" };
car.year = 2022;
car.color = "red";
console.log(car);

console.log("Q2:-");


// Q2 — delete
// Karo:

// city delete karo
// rollNo delete karo
// Ab object print karo — kya bacha
const student = { name: "Ali", age: 20, rollNo: 101, city: "Karachi" };
delete student.city;
delete student.rollNo;
console.log(student);

console.log("Q3:-");




// Q3 — Method
  // yahan ek method banao "canVote"
  // jo check kare age 18+ hai toh "Vote de sakti hai"
  // warna "Vote nahi de sakti"
const person = {
  name: "Sara",
  age: 17,
  canVote(age){
  if (age > 18) {
    console.log( "Vote de sakti hai");
    
  } else {
    console.log( "Vote nahi de sakti");
    
  }
  },

};

person.canVote();


console.log("Q4:-");



// Q4 — this
  // method banao "info" jo print kare:
  // "Ali Store mein 50 items hain"
  // this use karna zaroori hai!
const shop = {
  shopName: "Ali ",
  items: 50,
 info(){
    console.log(this.shopName , "Store mein" , this.items ,"hai!");
    
 }
};

shop.info();


console.log("Q5:-");



// Q5 — for...in
// Karo:
// Loop lagao aur print karo:
// brand → Dell
// ram → 8GB
// storage → 512GB
// price → 80000
const laptop = {
  brand: "Dell",
  ram: "8GB",
  storage: "512GB",
  price: 80000
};
for (let key in laptop){
    console.log(key + "→"+ laptop[key]);
    
}


console.log("Q6:-");



// Q6 — Destructuring
// Karo:

// title aur rating destructure karo
// language ka default value "English" rakho
// Teeno print karo
let movie = {
  title: "Interstellar",
  director: "Nolan",
  year: 2014,
  rating: 9.0
};
let {title,rating,luanguage = "english"}= movie
console.log(title);
console.log(rating);
console.log(luanguage);


console.log("Q7:-");



// Q7 — Nested ?.
const user = {
  name: "Ahmed",
  address: {
    city: "Lahore"
  }
};
console.log(name.addresses?.city);
console.log("Q8:-");



// Q8 — {...obj} Copy
// Karo:

// Spread se copy banao
// Copy mein score change karo → 200
// Dono print karo — original safe hai?
let original = { name: "Ali", score: 100 };
let copy = {...original};
copy.score = 200;
console.log(copy);
console.log(original);



console.log("Q9:-");

// Q9 — Object.keys / values / entries
// Karo:

// Sirf keys print karo
// Sirf values print karo
// Entries se loop lagao aur print karo:
let country = {
  name: "Pakistan",
  capital: "Islamabad",
  population: "220 million",
  language: "Urdu"
};
console.log(Object.keys(country));
console.log(Object.values(country));
console.log(Object.entries(country));
for (const [key,val] of Object.entries(country)) {
    console.log(key , ":",val);
    
    
    
}
console.log("Q10:-");

// Q10
// Ek user object banao jisme ho:
// - username: "ali123"
// - password: "1234"
// - login(inputPassword) method jo check kare:
//   sahi password → "Welcome Ali123! ✅"
//   galat password → "Galat password! ❌"
//   3 baar galat → "Account lock ho gaya! 🔒"

// user.login("0000");  // Galat password! ❌
// user.login("0000");  // Galat password! ❌
// user.login("0000");  // Account lock ho gaya! 🔒
// user.login("1234");  // Account lock ho gaya! 🔒 (ab sahi bhi nahi chalay ga)



let user2 = {
    username: "ali123",
password: "1234",
attempt : 0,
login(inputPassword){
     if(  this.attempt >= 3){
  console.log("  Account lock ho gaya! 🔒");
  return;
 }
 if (inputPassword === this.password) {
    console.log("Welcome",this.username);
    
 }else {
this.attempt++
    console.log("Galat password! ❌(" + this.attempt + "/3 tries)");
    
 }


}

}
user2.login("0000");
user2.login("0000");
user2.login("0000");
user2.login("1234");

console.log("Q11:-");



// Ek cart object banao jisme ho:
// - items: [] (khali array)
// - addItem(name, price) → item add kare
// - removeItem(name) → item remove kare  
// - total() → saare prices ka total nikale
// - showCart() → saare items print kare
// Yeh karo:




let cart ={
 item : [],
 addItem(name,price){
  this.item.push({name,price});
 },
 removeItem(name){
  this.item = this.item.filter(item => item.name !== name)
 },
total() {
    let sum = this.item.reduce((acc, item) => {
        return acc + item.price;  // fix 1
    }, 0);
    console.log( `Total: ${sum}`);
  
},
  showCart(){
    this.item.forEach((item)=>{
      console.log(item.name,"-",item.price);
      
    })
  }

 }



cart.addItem("Shirt", 1500);
cart.addItem("Pants", 2500);
cart.addItem("Shoes", 3000);
cart.showCart();
// Shirt - 1500
// Pants - 2500
// Shoes - 3000
cart.total();
// "Total: 7000"
cart.removeItem("Pants","Shirt");
cart.showCart();
// Shirt - 1500
// Shoes - 3000



console.log("Q12:-");





// Q4 — Object Se Filter Karna
// js


// Sirf woh products print karo jinka price 100 se zyada ho
// Expected Output:
// mango : 120
// grapes : 200


const products = {
  apple: 50,
  mango: 120,
  banana: 30,
  grapes: 200,
  orange: 80,
  result (){
   
    let filtered = Object.entries(products).filter(function([key,val]){
    
    if (val > 100) {
      return  [key,val];

        }
      
   })
 for(let [key,val] of filtered){
      console.log(key, ":" ,val);
      
    }

  }
};
products.result()



console.log("Q13:-");



// Q5 — Object Merge Challenge

// Teeno objects ko ek "profile" object mein merge karo
// phir sirf keys print karo
// phir check karo — kya "gpa" property exist karti hai? (true/false)
const personalInfo = {
  name: "Sara",
  age: 22
};

const academicInfo = {
  degree: "BS Computer Science",
  university: "FAST",
  gpa: 3.8
};

const jobInfo = {
  company: "Google",
  salary: 200000
};
let profile = {
  ...personalInfo,
  ...academicInfo,
  ...jobInfo

}
console.log(Object.keys(profile));

let s = Object.keys(profile).some(function(key){
  return key === "gpa";
}
)
console.log(s);




console.log("Q14:-");





// Q6 — Library Book System
// Ek library object banao jisme ho:
// - books: [] (khali array)
// - addBook(title, author) → book add kare
// - removeBook(title) → book remove kare
// - showBooks() → saari books print kare
// - searchBook(title) → book mile to "Mili: title by author" 
//                       na mile to "Nahi mili! ❌"



let library ={
books:[],
addBook(title,author){
  this.books.push({title,author})
},
removeBook(title){
 this.books= this.books.filter(function(val){return val.title !== title})
},
showBooks(){
 this.books.forEach(function(val){
console.log(val.title,":",val.author);

 })
},
searchBook(title){
  let found = this.books.filter(function(val){
    return title === val.title;
  })
  if(found.length > 0){
    found.forEach(function(val){
      console.log("Mili:", val.title, "by", val.author);
    })
  }else{
    console.log("Nahi mili! ❌");
  }
}
}

library.addBook("Alchemist", "Paulo Coelho");
library.addBook("Quran Majeed", "Allah");
library.addBook("Hamlet", "Shakespeare");
library.showBooks();
// Alchemist - Paulo Coelho
// Quran Majeed - Allah
// Hamlet - Shakespeare

library.searchBook("Hamlet");
// Mili: Hamlet by Shakespeare ✅

library.removeBook("Alchemist");
library.showBooks();
// Quran Majeed - Allah
// Hamlet - Shakespeare
library.searchBook("Alchemist");
// Nahi mili! ❌






console.log("Q15:-");



// Q7 — Bank Account
// Ek account object banao jisme ho:
// - owner: "Ahmed"
// - balance: 5000
// - deposit(amount) → balance mein add kare
//   "5000 deposit hua. Naya balance: 10000"
// - withdraw(amount) → balance se minus kare
//   agar balance kam ho → "Insufficient balance! ❌"
//   warna → "3000 nikale. Bacha hua: 7000"
// - showBalance() → "Ahmed ka balance: 5000"

let account = {
  owner: "Ahmed",
balance: 5000,
deposit(amount){
 this.balance += amount;
  console.log(amount, "deposit hua. Naya balance:", this.balance);
    

},
withdraw(amount){
  if(amount > this.balance){
    console.log("you want to withdraw",amount,"and your blance is",this.balance,"Insufficient balance! ❌");
  }else{
    this.balance -= amount;
    console.log(amount, "nikale. Bacha hua:", this.balance);
  }


},
showBalance(){
  console.log("Ahmed ka balance: ",this.balance);
}
};






account.showBalance();   // Ahmed ka balance: 5000
account.deposit(5000);   // 5000 deposit hua. Naya balance: 10000
account.withdraw(3000);  // 3000 nikale. Bacha hua: 7000
account.withdraw(9000);  // Insufficient balance! ❌
account.showBalance();   // Ahmed ka balance: 7000




console.log("Q16:-");



// Ek todo object banao jisme ho:
// - tasks: [] (khali array)
// - addTask(task) → task add kare
// - completeTask(task) → task complete mark kare
// - showTasks() → saari tasks print kare
// - pending() → sirf incomplete tasks print kare

let todo ={
  task :[],

  addTask(task){
    this.task.push({task,done:false})
  },
  
   completeTask(task){
    this.task.forEach(function(val){
      if(val.task === task){
  val.done = true
} 
      
    })
  
},
  showTasks(){
    this.task.forEach(function(val) {
          if (val.done === true) {
        console.log(`${val.task} - ✅`)
      }else{
           console.log(`${val.task} - ⏳`);
      }
    })
   
  },
pending(){
  this.task.forEach(function(values){
   if(values.done !== true){
    console.log(`${values.task} - ⏳`);
    
   }
  })

  
}}
todo.addTask("Math homework");
todo.addTask("Clean room");
todo.addTask("Buy groceries");

todo.showTasks();
// Math homework - ⏳
// Clean room - ⏳
// Buy groceries - ⏳

todo.completeTask("Clean room");

todo.showTasks();
// Math homework - ⏳
// Clean room - ✅
// Buy groceries - ⏳

todo.pending();
// Math homework - ⏳
// Buy groceries - ⏳





console.log("Q17:-");


// Ek attendance object banao jisme ho:
// - studentName: "Ali"
// - attendance: [] (khali array)
// - markPresent(subject) → present mark kare
// - markAbsent(subject) → absent mark kare
// - showAttendance() → saari attendance print kare
// - percentage() → present percentage nikale


let attend ={
  student:"ali",
  attendance:[],
  markPresent(subject){
   this.attendance.push({subject,present:true})
console.log(subject, "- Present ✅")
  },
  markAbsent(subject){
    this.attendance.push({subject,present:false})
console.log(subject, "- Absent ❌")   
   
  },
  showAttendance(){
    this.attendance.forEach(function(val){
  if (val.present === true) {
    console.log(val.subject, "- Present ✅")

  } else {
    console.log(val.subject, "- Absent ❌")   

  }
  })
  },
  percentage(){
    let count = this.attendance.filter(function(v){
      return v.present === true;
    })
    console.log("Ali ki attendance:",(count.length / this.attendance.length)* 100,"%");
    
  }

}



attend.markPresent("Math");
attend.markPresent("English");
attend.markAbsent("Science");
attend.markPresent("Urdu");


attend.showAttendance();
// Math - Present ✅
// English - Present ✅
// Science - Absent ❌
// Urdu - Present ✅

attend.percentage();
// "Ali ki attendance: 75%"


console.log("Q18:-");







// Ek movies object banao jisme ho:
// - collection: [] (khali array)
// - addMovie(title, rating) → movie add kare
// - removeMovie(title) → movie remove kare
// - showAll() → saari movies print kare
// - topRated() → sirf 8 ya usse zyada rating wali movies print kare
let movies = {
  collection: [],
  addMovie(title, rating){
    this.collection.push({title, rating})
  },
  removeMovie(title){
    this.collection= this.collection.filter(function(val){return val.title !== title})

    },
    showAll(){
       this.collection.forEach(function(v){
        console.log(v.title, ":",v.rating);
        
       })
      },
     topRated(){
        this.collection.forEach(function(v){
          if (v.rating >= 8) {
            console.log(v.title, ":",v.rating);
            
          }
        })
        }
      
      

    }


movies.addMovie("Inception", 9);
movies.addMovie("Titanic", 7);
movies.addMovie("Interstellar", 9.5);
movies.addMovie("Joker", 8.5);

movies.showAll();
// Inception - 9
// Titanic - 7
// Interstellar - 9.5
// Joker - 8.5

movies.topRated();
// Inception - 9
// Interstellar - 9.5
// Joker - 8.5

movies.removeMovie("Titanic");
movies.showAll();
// Inception - 9
// Interstellar - 9.5
// Joker - 8.5


console.log("Q19:-");

// Ek expenses object banao jisme ho:
// - list: [] (khali array)
// - add(category, amount) → expense add kare
// - remove(category) → expense remove kare
// - total() → saara total print kare
// - mostExpensive() → sabse mehenga expense print kare
   
let expenses={
  list: [],
  add(category, amount){
    this.list.push({category, amount})
  },
   remove(category){
    this.list=this.list.filter(function(n){return n.category !== category} )
   },
   total(){
    let s = this.list.reduce(function(acc,val){
      return acc + val.amount;
    },0)
        console.log("Total kharch:", s)
   },
   mostExpensive(){
    let most=this.list.reduce(function(acc,val){
      return val.amount > acc.amount ? val : acc
    })
      console.log("Sabse zyada kharch:", most.category, "-", most.amount)
   }
  }
expenses.add("Food", 500);
expenses.add("Transport", 200);
expenses.add("Shopping", 1500);
expenses.add("Bills", 800);

expenses.total();
// "Total kharch: 3000"

expenses.mostExpensive();
// "Sabse zyada kharch: Shopping - 1500"

expenses.remove("Transport");
expenses.total();
// "Total kharch: 2800"