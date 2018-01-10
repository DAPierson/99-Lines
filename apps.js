let friends = ['dustin', 'will', 'josh', 'alysia', 'todd'];



for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]+":");
    
    for (let j = 99; j > 0; j--) {
         if (j > 1) {
            let song = j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + " strikes one out, clears it all out, "
            console.log(song)
         }
        else  {
           let song1 = j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + " strikes one out, clears it all out, no more lines of code in the file "
         console.log(song1)
         }

    }

}
