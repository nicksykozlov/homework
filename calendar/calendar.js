const select = document.createElement("select");
select.id = "year";
document.body.prepend(select);
for (let year = 1970; year <= 2052; year++) {
  let options = document.createElement("OPTION");
  document.getElementById("year").appendChild(options).innerHTML = year;
}
// теперь данные из селекта на до запихнуть в new дате
// сделать событие 


select.addEventListener('change', () =>{
  
});
const year = new Date().getFullYear();

for (let month = 1; month <= 12; month++) {
  const container = document.body.querySelector(".container");
  const monthDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  monthDiv.append(h3);
  const ul = document.createElement("ul");
  ul.insertAdjacentHTML(
    "afterbegin",
    "<li>пн</li><li>вт</li><li>ср</li><li>чт</li><li>пт</li><li>сб</li><li>вс</li>"
  );
  const firstDay = new Date(year, month - 1, 1);
  h3.textContent = firstDay.toLocaleString("cn", { month: "long" });
  for (let day = 1; day < firstDay.getDay(); day++) {
    const li = document.createElement("li");
    ul.append(li);
  }
  //др
  let birth = new Date(year, 02, 23);
  birth.ClassName = 'green';

  console.log(birth);
  const daysCount = new Date(year, month, 0);
  for (let day = 1; day <= daysCount.getDate(); day++) {
    const li = document.createElement("li");
    li.textContent = day;
    ul.append(li);
  }
  monthDiv.append(ul);
  container.append(monthDiv);
 
}
