

export const trendingListData = [
    {
        _id: 1,
        recipeImage: require('../images/trendingList/image1.png'),
        title: 'How to make sushi at home',
        star: 4.1,
        isFavorite: false,
        userCreateName: 'Niki Samantha',
        userCreateImage: require('../images/trendingList/profile1.jpeg'),
    },
    {
        _id: 2,
        recipeImage: require('../images/trendingList/image2.png'),
        title: 'How to make sushi at home',
        star: 3.4,
        isFavorite: true,
        userCreateName: 'Niki Samantha',
        userCreateImage: require('../images/trendingList/profile1.jpeg'),
    },
    {
        _id: 3,
        recipeImage: require('../images/trendingList/image3.png'),
        title: 'How to make ',
        star: 4.4,
        isFavorite: true,
        userCreateName: 'Niki Samantha',
        userCreateImage: require('../images/trendingList/profile1.jpeg'),
    }
];

export const recentListData = [
    {
        _id: 1,
        recipeImage: require('../images/recentList/image1.png'),
        title: 'Home made cute pancake',
        userCreateName: 'Julino andrada',

    },
    {
        _id: 2,
        recipeImage: require('../images/recentList/image2.png'),
        title: 'Indonesia chicken burger',
        userCreateName: 'Vitor Vieira',

    },
    {
        _id: 3,
        recipeImage: require('../images/recentList/image3.png'),
        title: 'How to make sushi at home my bussines and parth',
        userCreateName: 'Adriana Samantha',

    }
]

export const popularCreatorsData = [
    {
        _id: 1,
        image: require('../images/popularCreators/profile1.png'),
        firstName: 'Troyan',
        lastName: 'Smith'

    },
    {
        _id: 2,
        image: require('../images/popularCreators/profile2.png'),
        firstName: 'Niki',
        lastName: 'Samantha'

    },
    {
        _id: 3,
        image: require('../images/popularCreators/profile3.png'),
        firstName: 'Roberta',
        lastName: 'Anny'

    },
    {
        _id: 4,
        image: require('../images/popularCreators/profile4.png'),
        firstName: 'Adriana',
        lastName: 'Silva'

    },
    {
        _id: 5,
        image: require('../images/popularCreators/profile5.png'),
        firstName: 'Joana',
        lastName: 'Vieira'

    },
]

export const detailsUser = [
    {
        _id: 1,
        image: require('../images/profile/1.png'),
        name: 'Alessandra Blair',
        description: "Hello world I'm Alessandra Blair, I'm from Italy 🇮🇹 I love cooking so much!",
        numberOfRecipes: 3,
        stars: 5,
        followers: 14 ,
        following: 120

    },
    {
        _id: 2,
        image: require('../images/profile/2.png'),
        name: 'Bryan Styf',
        description: "Hello world I'm Bryan styf I live in Canada and I love to cook!",
        numberOfRecipes: 10,
        stars: 3,
        followers: 10,
        following: 20

    },
    {
        _id: 3,
        image: require('../images/profile/3.png'),
        name: 'Taylor Megan',
        description: "Hello world I'm Taylor Megan I live in Estados unidos and I love to cook!",
        numberOfRecipes: 5,
        stars: 5,
        followers: 14,
        following: 50

    },
    
]

export const recipeDetails = {
    _id: 1,
    title: 'toast with cheese',
    image: require('../images/recipeDetails/image1.png'),
    star: 4.3,
    portion: '5',
    cookTime: '45 min',
    userCreateDetails: {
        name: 'Adriana silva',
        image: require('../images/recipeDetails/profile.jpeg'),
        address: 'Curitiba, Parana'
    },
    Ingredients: [
        {
            name: 'Bread',
            quantity: '200g',
        },
        {
            name: 'eggs',
            quantity: '1un',
        },
        {
            name: 'milk',
            quantity: '200ml',
        }
    ],
    
}
export const savedRecipesData = [
    {
        _id: 1,
        recipeImage: require('../images/trendingList/image1.png'),
        title: 'How to make sushi at home',
        star: 4.1,
        isFavorite: false,
        userCreateName: 'Niki Samantha',
        userCreateImage: require('../images/trendingList/profile1.jpeg'),
    },
    {
        _id: 2,
        recipeImage: require('../images/trendingList/image2.png'),
        title: 'How to make sushi at home',
        star: 3.4,
        isFavorite: true,
        userCreateName: 'Niki Samantha',
        userCreateImage: require('../images/trendingList/profile1.jpeg'),
    },
    {
        _id: 3,
        recipeImage: require('../images/trendingList/image3.png'),
        title: 'How to make ',
        star: 4.4,
        isFavorite: true,
        userCreateName: 'Niki Samantha',
        userCreateImage: require('../images/trendingList/profile1.jpeg'),
    }
]
export const recipesProfile = [
    {
        _id: 1,
        recipeImage: require('../images/recipeUser/1.png'),
        title: 'How to make Italian Spaghetti at home',
        description: "12 Ingredients",
        time: "40 min",
        star: 5.1 ,
        isFavorite: false,
       
    },
    {
        _id: 2,
        recipeImage: require('../images/recipeUser/2.png'),
        title: 'Simple chicken meal prep dishes',
        description: "10 Ingredients",
        time: "40 min",
        star: 4.7,
        isFavorite: false,
       
    },
    {
        _id: 3,
        recipeImage: require('../images/recipeUser/3.png'),
        title: 'Japanese fried rice',
        description: "12 Ingredients",
        time: "40 min",
        star: 4.2,
        isFavorite: false,
       
    },
    
    
];