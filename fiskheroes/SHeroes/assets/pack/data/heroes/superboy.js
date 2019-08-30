function init(hero) {
    hero.setName("Superboy");
    hero.setTier(5);
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addAbilities("fiskheroes:accelerated_perception", "fiskheroes:healing_factor", "fiskheroes:enhanced_reflexes","fiskheroes:heat_vision", "fiskheroes:super_speed", "fiskheroes:flight", "fiskheroes:superhuman_durability", "fiskheroes:fire_immunity", "fiskheroes:cold_resistance");
    hero.addAttribute("ATTACK_DAMAGE", 0.80, 1);
    hero.addAttribute("FALL_RESISTANCE", 7.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.25, 0);
    hero.addAttribute("PUNCH_DAMAGE", 7.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.75, 1);
    hero.addAttribute("SWORD_DAMAGE", -0.9, 1);
    hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 1);
    hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);
    hero.addKeyBind("DECELERATE", "key.decelerate", 3);
    hero.addKeyBind("ACCELERATE", "key.accelerate", 4);
    hero.addKeyBind("HEAT_VISION", "key.heatVision", 5);
    hero.setHasProperty(hasProperty);
    hero.setDefaultScale(0.85);
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
