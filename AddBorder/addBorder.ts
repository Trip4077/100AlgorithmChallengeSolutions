function addBorder(picture: string[]): string[] {
    const result = picture.map(str => `*${str}*`);
    
    const borderLength = result[0].length;
    let border = '*';

    for(let i = 1; i < borderLength; i++) {
        border += '*';
    }

    result.push(border);
    result.unshift(border);

    return result;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["ab", "cd"]));
console.log(addBorder(["a", "a"]));