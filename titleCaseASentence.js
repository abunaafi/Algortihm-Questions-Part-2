const titleCase = (str) => {
    str = str.toLowerCase().split(' ');//changing evertyhting into lowercase and splititng it into arrays
    for(let i = 0; i<str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ')//joining it at the end 
    }
    titleCase("I'm a little tea pot");
    titleCase("I'm a little tea pot");