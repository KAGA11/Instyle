interface DescInterface {
    header:string[];
    body:string[];
}

const descProcessing:DescInterface = {
    header:[
        "Cotton T-Shirts",
        "Formal Wear",
        "Sportswear",
    ],
    body:[
       "We offer state-of-the-art processing for high-quality cotton t-shirts, ensuring comfort and style.",
       "Our expertise in formal wear processing ensures precision and sophistication in every stitch.",
       "Our sportswear processing capabilities blend functionality with cutting-edge design.",
    ],
}


const descClothing:DescInterface = {
    header:[
        "Denim Jackets",
        "Evening Gowns",
        "Casual Wear",
    ],
    body:[
       "Crafted with precision from top-quality denim for both style and durability.",
       "Exquisite evening gowns designed for grace and elegance at any event.",
       "Our casual wear collection offers comfort and style for everyday living.",
    ],
}

export {descProcessing, descClothing};