hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

rainbow = hero.concat(native, destination);
rainbow.reverse();
console.log(rainbow);

rainbow.shift();
rainbow.unshift('Richard');
rainbow.splice(1, 1);
rainbow.splice(3, 1, 'Gave');
rainbow.push('Battle', 'In', 'Vain');

//Change/add the elements of rainbow array, so in the end you will get array like this
//якщо не можна було саме видаляти, то тоді цей варіант:

// rainbow.unshift('Richard');
// rainbow.push('Vain');

// [rainbow[5], rainbow[1]] = [rainbow[1], rainbow[5]];
// [rainbow[3], rainbow[4], rainbow[1], rainbow[2]] = [rainbow[1], rainbow[2], rainbow[3], rainbow[4]];
// rainbow.splice(3, 2, 'Gave', 'Battle');

divColors = [];

for (i = 0; i < colors.length; i++) {
    divColors.push(`<div class='circle' style='background-color: ${colors[i]}'>
    <p class='text'>${rainbow[i]}</p>
    </div>`);
}

document.write(`
    <div class='wrap'>${divColors.join('')}</div>
`);