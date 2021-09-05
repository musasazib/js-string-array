function megaFriend(friends) {
    // isArray
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Saha', 'Shawon', 'Rocky', 'Shamol', 'Abu Saleh'];
const myBigBuddy = megaFriend(187);
console.log(myBigBuddy);

// indexOf
if (friends.indexOf('Fox') != -1) {
    console.log('Rocky Exists');
}
else {
    console.log('Fox does not exists');
}

// includes
if (friends.includes('Rocky')) {
    console.log('rocky exits using includes');
}

//  concat 
const first = [1, 2, 3];
const second = [4, 5, 6];
const combine = first.concat(second);
console.log(combine);