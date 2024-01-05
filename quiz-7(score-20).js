/*
 A lottery is going to be held for the participants of a game website.
 1. Create a table that shows the list of all users along with their scores.
 2. Clicking the start button will initiate the lottery.
    - The lottery must be conducted among people whose scores are more than 2000.
    - There should be a 3-second delay between clicking on the button and displaying the winners
      * display the winners in the table which has an id of winners
      * When you click again on the start button, the old winner should be removed from the table
    - At the end, we will have three winners.
*/
const user = [
  {
    id: 1,
    name: 'John',
    VIP: true,
    Score: 3455,
  },
  {
    id: 2,
    name: 'Beatrice',
    VIP: false,
    Score: 1200,
  },
  {
    id: 3,
    name: 'Aurora',
    VIP: true,
    Score: 900,
  },
  {
    id: 4,
    name: 'Emily',
    VIP: true,
    Score: 2001,
  },
  {
    id: 5,
    name: 'Gabriel',
    VIP: false,
    Score: 200,
  },
  {
    id: 6,
    name: 'Charlie',
    VIP: false,
    Score: 2670,
  },
  {
    id: 7,
    name: 'Isabella',
    VIP: false,
    Score: 1560,
  },
  {
    id: 8,
    name: 'Elliot',
    VIP: false,
    Score: 3420,
  },
  {
    id: 9,
    name: 'Benjamin',
    VIP: false,
    Score: 2900,
  },
  {
    id: 10,
    name: 'Gemma',
    VIP: true,
    Score: 999,
  },
  {
    id: 11,
    name: 'Khaleesi',
    VIP: true,
    Score: 1469,
  },
  {
    id: 12,
    name: 'Matilda',
    VIP: false,
    Score: 3021,
  },
  {
    id: 13,
    name: 'Grayson',
    VIP: false,
    Score: 780,
  },
  {
    id: 14,
    name: 'Nicholas',
    VIP: true,
    Score: 1370,
  },
  {
    id: 15,
    name: 'Imogen',
    VIP: true,
    Score: 2360,
  },
  {
    id: 16,
    name: 'Amelia',
    VIP: false,
    Score: 1474,
  },
  {
    id: 17,
    name: 'Nathaniel',
    VIP: false,
    Score: 2029,
  },
  {
    id: 18,
    name: 'Ryker',
    VIP: true,
    Score: 2016,
  },
  {
    id: 19,
    name: 'Leo',
    VIP: false,
    Score: 1894,
  },
  {
    id: 20,
    name: 'Zane',
    VIP: true,
    Score: 1954,
  },
  {
    id: 21,
    name: 'Owen',
    VIP: false,
    Score: 2145,
  },
  {
    id: 22,
    name: 'Clara',
    VIP: true,
    Score: 202,
  },
  {
    id: 23,
    name: 'Julian',
    VIP: false,
    Score: 1666,
  },
  {
    id: 24,
    name: 'Nolan',
    VIP: true,
    Score: 1856,
  },
  {
    id: 25,
    name: 'Caleb',
    VIP: true,
    Score: 2244,
  },
  {
    id: 26,
    name: 'Logan',
    VIP: false,
    Score: 3492,
  },
  {
    id: 27,
    name: 'Kai',
    VIP: true,
    Score: 3002,
  },
  {
    id: 28,
    name: 'Tobias',
    VIP: true,
    Score: 126,
  },
  {
    id: 29,
    name: 'Harper',
    VIP: true,
    Score: 1007,
  },
  {
    id: 30,
    name: 'Mabe',
    VIP: false,
    Score: 2491,
  },
];


//todo ================ selecting ======================
const container = document.querySelector('#container')
const startBtn = document.querySelector('#startButton')
const winnersTable = document.querySelector('#winners')

//todo =============== create tables ===============

function createTable(arr , append) {
  
const usersTable = document.createElement('table');// <table></table>
const tableBody = document.createElement("tbody");// <tbody></tbody>
usersTable.style.borderStyle = "solid"

//! create header row
  const headers = ["ID", "Name", "VIP", "Score"];
  const headerRow = document.createElement("tr");// <tr></tr>
  const thead = document.createElement('thead')

  headers.forEach((headerText) => {
    const thEle = document.createElement("th");//<th></th> <th></th> <th></th> <th></th>
    thEle.style.borderStyle = "solid"
    thEle.textContent = headerText;//<th>ID</th> <th>Name</th> <th>VIP</th> <th>Score</th>
    headerRow.append(thEle);
    /*<tr>
      <th>ID</th>
      <th>Name</th>
      <th>VIP</th>
      <th>Score</th>
    </tr>
    */
  });
  thead.append(headerRow)
  usersTable.append(thead);
  /*<table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>VIP</th>
        <th>Score</th>
      </tr>
      </thead>
    </table>
    */

   //! create tbody rows

   // user => array with 30 object
   // user data => object of array

  arr.forEach((userData) => {
    const row = document.createElement("tr"); // create 30 row (tr)
    Object.values(userData).forEach((value) => {
      const cell = document.createElement("td");//create 4 cell (td)
      cell.style.borderStyle = "solid"
      cell.textContent = value;
      row.append(cell);// tr with 4 td 
    });
    tableBody.append(row);// tbody with 30 row (tr)
  });

  usersTable.append(tableBody);// table with thead and tbody
  append.append(usersTable);

}
 createTable(user , container)



//todo
//click start button
// 3 second delay
//display three random winner
//click again => the old winner should remove

//todo ============== People who can participate =============
//scores are more than 2000.

const participates = user.filter( ({Score}) => Score > 2000)//array with 14 object

//todo ================ start lottery ===================
//click start button
startBtn.addEventListener('click',()=>{
      // remove the old winners
    winnersTable.innerHTML = "";
    //three random winner
  const winners = []
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random()*participates.length)
    winners.push(participates[random])
    participates.splice(random,1)
  }
  //3 second delay
  setTimeout(()=>{
    createTable(winners , winnersTable)
  },3000)

 
})


