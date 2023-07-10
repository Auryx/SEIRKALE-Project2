const mongoose = require('./connection');
const Card = require('./card');


mongoose.connection.on('open', async () => {

    //1. create entries into the db using the startFruits
    //1a. in order to do this we need to delete everything
    await Card.deleteMany();

    //1b. then using startFruits, we will insert that into the db
    const startCard = [{ 
        name: "Myrel, Shield of Argive", 
        type_line: "Legendary Creature - Human Soldier", 
        expansion_symbol: "The Brothers' War (Mythic Rare)", 
        artist_info: "Ryan Pancoast", 
        power_toughness: "3/4", 
        collectors_number: "18",
        text_box: {
            abilities: `During your turn, your opponents can't cast spells or activate abilities of artifacts, creatures, or enchantments. Whenever Myrel, Shield of Argive attacks, create X 1/1 colorless Soldier artifact creature tokens, where X is the number of Soldiers you control.`,
            flavor_text: " "
        },
        mana_cost: [
            {colorless_info: "3"},
            {colors_identity: "White"}
        ]},
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
        mana_cost: [
            {colorless_info: "3"},
            {colors_identity: "Blue Blue"}
        ]}
    ];
    await Card.create(startCard);

    //2. we are going to close the connection
    mongoose.connection.close();


})