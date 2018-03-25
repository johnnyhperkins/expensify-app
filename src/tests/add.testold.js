const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `hello ${name}`;

test('Should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreeting('Mike');
    expect(result).toBe("hello Mike")
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe("hello Anonymous")
});