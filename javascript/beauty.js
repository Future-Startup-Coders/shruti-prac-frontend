// let products = {
//     Compact : {
//         Name : 'compact powder',
//         color : 'Beige',
//         photo : 'image',
//         price : '499',
//         quantity : '25gm',
//         manifacturingDate : '10/06/2023',
//         ExpiryDate : '10/06/2025',
//     },
//     lipstick : {
//         Name : 'lipstick',
//         color : 'Pink',
//         photo : 'image',
//         price : '656',
//         quantity : '25gm',
//         manifacturingDate : '10/06/2023',
//         ExpiryDate : '10/06/2025',
//     },
    
// }
let a = {
        Name : 'compact powder',
        color : 'Beige',
         photo : 'image',
         price : 499,
         quantity : '25gm',
         manifacturingDate : '10/06/2023',
         ExpiryDate : '10/06/2025',
} 
let compact = a
console.log(typeof compact)
let b = {
    Name : 'lipstick',
        color : 'Pink',
        photo : 'image',
        price : '656',
        quantity : '15gm',
        manifacturingDate : '10/06/2023',
        ExpiryDate : '10/06/2025',
}
let lipstick = b


let Beauty = {
    Category : {
        Makeup : {
           
             
            Eyeshadow : {
                Name : 'eyeshadow',
                color : 'multicolor',
                photo : 'image',
                quantity : '8ml',
                manifacturingDate : '10/06/2023',
                ExpiryDate : '10/06/2025',
            },
            lipstick,
            compact
        },
        skincare : {
            Dryskin :{
                HyaluronicAcid : {
                    Name :  'HyaluronicAcid',
                    quantity : '30ml',
                    price : 850,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                },
                Moisturizer : {
                    Name : 'Moisturizer',
                    quantity : '50g',
                    price : 350,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                }
            },
            oilyskin :{
                cleanser :{
                    Name : 'cleanser',
                    quantity : '125g',
                    price : 499,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                },
                toner : {
                    Name : 'toner',
                    quantity : '100ml',
                    price : 299,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                }
            },
            combinationskin : {
                vitaminC : {
                    Name : 'vitaminC',
                    quantity : '30ml',
                    price : 899,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                },
                sunscreen :{
                    Name : 'sunscreen',
                    quantity : '80g',
                    price : 479,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                },
            },
            acneProneSkin: {
                Niacinamide : {
                    Name : 'Niacinamide',
                    quantity : '30ml',
                    price : 550,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                },
                salicylicAcid :{
                    Name : 'salicylicAcid',
                    quantity : '30ml',
                    price : 599,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
                },
            },

        },
        Haircare : {
            RosemaryEssentialOil : {
                Name : 'RosemaryEssentialOil',
                    quantity : '60ml',
                    price : 2000,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
            },
            HairMask : {
                Name : 'HairMask',
                    quantity : '250ml',
                    price : 899,
                    photo : 'image',
                    manifacturingDate : '10/06/2023',
                    ExpiryDate : '10/06/2025',
            },

        },
    },
    Brands : {
        BobbieBrown : {
           compact : {
            compact
           },
        },
        Kay : { lipstick
        },
    },
 }

// console.log(Beauty.Category.Makeup.lipstick)
// console.log(Beauty.Category.Makeup)
console.log(Beauty.Brands.Kay)