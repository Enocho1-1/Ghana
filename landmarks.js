const touristAttractions = [
    {
        name: 'Kwame Nkrumah Memorial Park & Mausoleum',
        location: 'Accra, Ghana',
        details:'Dr.Kwame Nkrumah is remembered as quintessential leader, he was the catalyst that gave Ghana its independence from colonial rule (Britain). The Kwame Nkrumah Memorial Park and Mausoleum was dedicated in 1992 to Dr Kwame Nkrumah to commemorate his life and work after his death.',
        image: 'https://viewghana.com/wp-content/uploads/2018/03/Kwame_Nkurmah_museum4.jpg'
    },
    {
        name: 'Larabanga Mosque',
        location: 'Larabanga, Ghana',
        details:'The Larabanga Mosque is the oldest mosque in Ghana. Built in 1421, this architectural beauty is often referred to as the "the Mecca of West Africa".',
        image: 'https://www.wmf.org/sites/default/files/styles/project_gallery_full_size/public/projects/gallery/GHA_Larabanga_JPEG_img-02.jpg?itok=Z9oh9eFN'
    },
    {
        name: 'Lake Bosomtwe',
        location: 'Kumasi, Ghana',
        details:'Lake Bosomtwe is the only natural lake in Ghana,moreover the lake is surrounded by mountains and is inhabited by a myriad of fish species. Furthermore, the scene is very serene and tranquil.',
        image: 'https://visitghana.com/wp-content/uploads/2019/02/3907_Lake-Bosomtwe-Abono.jpg'
    },
    {
        name: 'Kintampo Falls',
        location: 'Kintampo Township, Ghana',
        details:'Kintampo Falls is a waterfall that has enamored tourists an innumerable amount of times. The falls themselves are in the shape of stairs, moreover, the water disappears subsequently resurfacing about 200 meters away from the original location.',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/3b/e5/7f/kintampo-falls.jpg?w=1200&h=-1&s=1'
    },
    {
        name: 'Kakum National Park',
        location: 'Odumase Abrafo, Ghana',
        details:'Regarded as the national park of Ghana, Kakum National Park offers a breathtaking nature exprience. The park is inhabited by enadangered species such as antelopes and elephants. Additionally, the park has a canopy walkway that is 30 meters from the ground; offering an ethereal view of the surrounding area.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Kakum.jpg'
    },
]

const attractionDisplay = array => {
    array.forEach(element => {
        document.querySelector('div.landmarks').innerHTML += `
        <div class="attraction">
            <img src="${element.image}">
            <div class="info">
                <h1>${element.name}</h1>
                <h2>${element.location}</h2>
                <p>${element.details}</p>
            </div>
        </div>
        <hr>
        `
    })
}




attractionDisplay(touristAttractions)