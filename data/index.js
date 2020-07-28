const clothesList = [];
const clothes = [
    'blue_s', 'blue_p', 'blue_t',
    'yellow_s', 'yellow_p', 'yellow_t',
    'pink_s', 'pink_p', 'pink_t',
];
const genders = ['male', 'female'];
const sizes = ['large', 'small'];

const generateDataset = (count) => {
    let type = null;
    let url = null;
    let color = null;
    let gender = null;
    let size = null;
    for(let i = 0; i < count; i++) {
        type = clothes[Math.floor(Math.random() * clothes.length)];
        url = `./img/${type}.png`;
        color = type.split('_')[0];
        gender = genders[Math.floor(Math.random() * genders.length)];
        size = sizes[Math.floor(Math.random() * sizes.length)];
        clothesList.push({
            type,
            url,
            color,
            gender,
            size,
        });
    }
};