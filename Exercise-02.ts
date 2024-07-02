export const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject(false);
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject(false);
            }
        }
        resolve(true);
    });
};


// start
// end
// { prime: true }