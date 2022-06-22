// Закрасьте все div у которых нет дочерних элементов синим цветом
const first=document.body.querySelector('div');
first.parentElement.style.backgroundColor = 'grey'
first.node.firstChild.backgroundColor = 'red'

console.log(first);
// Закрасьте все div у которых только 1 дочерний элемент желтым
// Закрасьте все div у которых больше 2 дочерних элементов серым