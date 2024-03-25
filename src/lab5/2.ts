function calculateIntersectionPoint(A: number, B: number, C: number, D: number, E: number, F: number): { x: number, y: number } {
    // Solve the system of linear equations Ax + By = C and Dx + Ey = F
    const x = (C * E - B * F) / (A * E - B * D);
    const y = (A * F - C * D) / (A * E - B * D);
    return { x, y };
}

function checkParallelToAxis(A: number, B: number, D: number, E: number): boolean {
    return B === 0 || E === 0;
}

const intersectionPoint = calculateIntersectionPoint(1, 2, 3, 4, 5, 6);
console.log('Найденная точка пересечения: ', intersectionPoint);

const isParallel = checkParallelToAxis(1, 2, 4, 0);
console.log('Это прямая параллельна оси: ', isParallel);