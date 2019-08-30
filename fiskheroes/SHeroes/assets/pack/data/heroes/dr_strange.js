function init(hero) {
    hero.setName("Dr. Strange");
    hero.setVersion("MCU");
    hero.setTier(3);
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.leggings");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addAbilities("fiskheroes:pyrokinesis", "fiskheroes:healing_factor", "fiskheroes:enhanced_reflexes", "fiskheroes:flight", "fiskheroes:superhuman_durability");
    hero.addAttribute("ATTACK_DAMAGE", 0.45, 1);
    hero.addAttribute("FALL_RESISTANCE", 8.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
    hero.addAttribute("PUNCH_DAMAGE", 3.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.55, 1);
    hero.setHasProperty(hasProperty);
    hero.setDefaultScale(1.05);
    hero.setHasPermission(hasPermission);
}

function hasProperty(entity, property) {
    switch (property) {
    case "MASK_TOGGLE":
        return false;
    case "BREATHE_UNDERWATER":
        return true;
    case "BREATHE_SPACE":
        return true;
    default:
        return false;
    }
}

function hasPermission(entity, permission) {
    return permission == "USE_MAGIC";
}
