const mongoose = require('./connection');
const Card = require('./card');
const Land = require('./land');


mongoose.connection.on('open', async () => {

    //1. create entries into the db using the startCard
    //1a. in order to do this we need to delete everything
    await Card.deleteMany();

    //1b. then using startCard, we will insert that into the db
    const startCard = [{ 
        name: "Myrel, Shield of Argive", 
        type_line: "Legendary Creature - Human Soldier", 
        expansion_symbol: "The Brothers' War (Mythic Rare)", 
        artist_info: "Ryan Pancoast", 
        power_toughness: "3/4", 
        collectors_number: "18",
        text_box: {
            abilities: `During your turn, your opponents can't cast spells or activate abilities of artifacts, creatures, or enchantments. Whenever Myrel, Shield of Argive attacks, create X 1/1 colorless Soldier artifact creature tokens, where X is the number of Soldiers you control.`,
            flavor_text: ""
        },
        mana_cost: {
            colorless_info: "3",
            colors_identity: "White"
        },
        img_link: "https://www.artofmtg.com/wp-content/uploads/2022/12/Myrel-Shield-of-Argive.png"
    },
        {
        name: "Force of Will", 
        type_line: "Instant", 
        expansion_symbol: "Dominaria Remastered (Mythic Rare)", 
        artist_info: "Donato Giancola", 
        power_toughness: "", 
        collectors_number: "50",
        text_box: {
            abilities: `You may pay 1 life and exile a blue card from your hand rather than pay this spell's mana cost. Counter target spell.`,
            flavor_text: "Your artillery will burn itself out before I allow my focus to waver."
        },
        mana_cost: {
            colorless_info: "3",
            colors_identity: "Blue Blue",
        },
        img_link: "https://product-images.tcgplayer.com/fit-in/539x539/4146.jpg"
    }
    ];
    await Card.create(startCard);
    console.log(`completed startCard`)
    await Land.deleteMany();
    const startLand = [{
        name: "Island",
        type_line: "Land",
        artist_info: "Terese Nielsen",
        img_link: "https://cdn1.mtggoldfish.com/images/gf/Island%2B%255BPRM-GUR%255D.jpg"
    },
        {
        name: "Forest",
        type_line: "Land",
        artist_info: "Terese Nielsen",
        img_link: "https://cdn1.mtggoldfish.com/images/gf/Forest%2B%255BPRM-GUR%255D.jpg"
    },
        {
        name: "Mountain",
        type_line: "Land",
        artist_info: "Terese Nielsen",
        img_link: "https://cdn1.mtggoldfish.com/images/gf/Mountain%2B%255BPRM-GUR%255D.jpg"
    },
        {
        name: "Swamp",
        type_line: "Land",
        artist_info: "Terese Nielsen",
        img_link: "https://cdn1.mtggoldfish.com/images/gf/Swamp%2B%255BPRM-GUR%255D.jpg"
    },
        {
        name: "Plains",
        type_line: "Land",
        artist_info: "Terese Nielsen",
        img_link: "https://cdn1.mtggoldfish.com/images/gf/Plains%2B%255BPRM-GUR%255D.jpg"
    }
    ];

    await Land.create(startLand)
    console.log(`completed startLand`)
    //2. we are going to close the connection
    mongoose.connection.close();
})