// Закрасьте все div у которых нет дочерних элементов синим цветом
const pred = document.body.querySelector('div');
pred.forEach((div) => {
    if(k.children.length === 0){
        k.style.backgroundColor = 'blue';
    }
});
console.log(pred);

// Закрасьте все div у которых только 1 дочерний элемент желтым
// Закрасьте все div у которых больше 2 дочерних элементов серым