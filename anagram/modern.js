function isAnagram(strA, strB) {
    const normalize = (str) => {
        return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
    }
    console.log(normalize(strA) === normalize(strB))
}

// Should return true for both
// console.log(isAnagram('Night', 'Thing'))
// console.log(isAnagram('Statue of Liberty', 'Built to stay free'))

// Should return False for both
console.log(isAnagram('Light', 'Night'))
console.log(isAnagram('Statue of Liberty', 'eiffel tower'))