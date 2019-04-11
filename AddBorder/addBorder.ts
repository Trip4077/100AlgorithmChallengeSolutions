function addBorder(picture: string[]): string[] {
    const result: string[] = picture.map(str => `*${str}*`);
    
    const borderLength: number = result[0].length;
    let border: string = '*';

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