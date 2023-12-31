// <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>

const seededRandom = function (seed) {
    const m = 2**35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
}

export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export function submitAPI(formData) {
    localStorage.setItem('booking', JSON.stringify(formData));
    return true;
};