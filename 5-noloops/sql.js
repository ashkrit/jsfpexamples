var newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 675466,
        "title": "SpiderMan",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 1,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];


//Select ID , Title from  newRelease
console.table(
    newReleases.map(movie => { return { "id": movie.id, "title": movie.title } })
);

//Select title,rating from newRelease where rating>3
console.table(
    newReleases
        .filter(movie => movie.rating > 3)
        .map(movie => { return { "rating": movie.rating, "title": movie.title } })
);

//select rating , count(*) from newRelease group by rating


newReleases.map(movie => movie.rating)
    .reduce((agg, value) => {
        agg[value] = (agg[value] || 0) + 1;
        return agg;
    }, {})


//select rating , count (*) from  newRelease group by rating having count(*) > 1

var flat = (acc,value) => acc.concat(value);

var groupBy = Array(newReleases.map(movie => movie.rating)
    .reduce((agg, value) => {
        agg[value] = (agg[value] || 0) + 1;
        return agg;
    }, {}))


    console.table(
        groupBy.map(result => {
        return Object.keys(result)
            .filter(rating => result[rating] > 1)
            .map(rating => {
                return { "rating": rating, "count": result[rating] }
            }
            );
    }).reduce(flat,[]))
