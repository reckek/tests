function divide(a: number, b: number) {
    if (b === 0) {
        throw new Error('Деление на ноль невозможно');
    }
    return a / b;
}

const testCases = [
    { a: 10, b: 2 },
    { a: 0, b: 5 },
    { a: -10, b: -2 },
    { a: 10, b: 0 },
];

testCases.forEach(testCase => {
    try {
        const result = divide(testCase.a, testCase.b);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.error(`Ошибка: ${(error as Error).message}`);
    }
});
