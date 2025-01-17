const getTheTitles = function(books) {
    const booksTitle = books.map( (book) => {
        return book[Object.keys(book)[0]];

        // I've could used Object.values too.
    });

    return booksTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
