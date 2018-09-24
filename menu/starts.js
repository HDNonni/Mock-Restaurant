
// console.log($)
// const BlueNibs = {
//     name: "Blueberry Nibbles",
//     decscription: "Plump, sweet blueberries wrapped in chocolate deliciousness",
//     imageURL: '../dessertImages/blueberry-nibbles.jpg',
//     imageAlt: 'blueberry-nibbles',
//     imageTitle: 'Blueberry Nibbles',
//     price: "$2"
// }

// const StrawBites = {
//     name: "Strawberry Bites",
//     imageURL: '../dessertImages/strawberry-bites.png',
//     imageAlt: 'strawberry-bites',
//     imageTitle: 'Strawberry Bites',
//     decscription: "Strawberries topped with whipped cream and a chocolate drizzle",
//     price: "$2"
// }
// const ApDips = {
//     name: "Apple Dippers",
//     imageURL: '../dessertImages/pb-apples.png',
//     imageAlt: 'pb-apples.',
//     imageTitle: 'Apple Dippers',
//     decscription: "Apple slices with your choice of dipping sauce(Peanut Butter,Almond Butter, or SunflowerSeed Butter)",
//     price: "$2"
// }
// const BanChunks = {
//     name: "Banana Chunks",
//     imageURL: '../dessertImages/banana-chunks.jpg',
//     imageAlt: 'banana-chunks',
//     imageTitle: 'Banana Chunks',
//     decscription: "Banana Chunks topped with caramel, chocolate and chopped peanuts.",
//     price: "$2"
// }
// const FunSplits = {
//     name: "Fun Splits",
//     imageURL: '../dessertImages/fun-splits.jpg',
//     imageAlt: 'fun-splits',
//     imageTitle: 'Fun Splits',
//     decscription: "Sliced banana, topped with vanilla yogurt, strawberries, blueberries and granola with a drizzle of honey",
//     price: "$6"
// }

// const starts = {
//     BlueNibs,
//     StrawBites,
//     ApDips,
//     BanChunks,
//     FunSplits
// };
// //copy from console and past into JSON file
// console.log(JSON.stringify(starts, null, 2));
//$(document).ready(function () {
// for (const index in starts) {
//     console.log("index", index);
// }
// const start = starts;
// console.log(start);

function startMenu(starts) {
    //added Object .values to see page otherwise use an array of starts
    for (const start of Object.values(starts)) {
        console.log("Starts Item", start);


        $('#main').append(`
                <div>
                    <ul>
                        <div class = "name">
                            <li>${start.name}</li>
                                <a href ="#" class = "tooltip">
                                    <img src = "${start.imageURL}" title = "${start.imageTitle}" alt = "${start.imageAlt}"/>
                                    <span>${start.decscription}</span>
                                <a>
                                <ul>
                                    <li>${start.price}</li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </div>
            `);
    }
}



$(document).ready(function () {
    //url: have to use browser sync
    //const url = 'http://localhost:3000/Restaurant/menu/starts.json';
    //change to a relative url so it can be viewed
    const url = "/Restaurant/menu/starts.json";
    //ajax call to url , what kind of data type and GET method
    $.ajax(url, {
        dataType: 'json',
        method: 'GET'
    }).done(function (data, textStatus) {
        //log to check for success
        console.log('Data: ', data);
        console.log('Text Status:', textStatus);
        const starts = data;
        //use function calls and passing in parameter that are required  
        startMenu(starts);
    });



});