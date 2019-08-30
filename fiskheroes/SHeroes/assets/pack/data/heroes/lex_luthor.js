function init(hero) {
    hero.setName("Lex Luthor");
	  hero.setVersion("DCEU");
    hero.setTier(4);
    hero.setChestplate("item.superhero_armor.piece.head");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.leggings");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addAbilities("fiskheroes:healing_factor", "fiskheroes:propelled_flight", "fiskheroes:superhuman_durability", "fiskheroes:fire_immunity", "fiskheroes:cold_resistance");
    hero.addWeaknesses("fiskheroes:metal_skin");
    hero.addAttribute("ATTACK_DAMAGE", 0.75, 1);
    hero.addAttribute("PUNCH_DAMAGE", 4.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 8.5, 0);
    hero.addAttribute("SPRINT_SPEED", 0.75, 1);
    hero.addAttribute("SWORD_DAMAGE", 0.55, 1);
    hero.setHasProperty(hasProperty);
    hero.setDefaultScale(1);
}

function hasProperty(entity, property) {
    switch (property) {
    case "MASK_TOGGLE":
        return false;
    case "BREATHE_UNDERWATER":
        return false;
    case "BREATHE_SPACE":
        return true;
    default:
        return false;
    }
}
