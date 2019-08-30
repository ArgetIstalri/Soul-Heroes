function init(hero) {
    hero.setName("Joker");
    hero.setTier(3);
    hero.setHelmet("item.superhero_armor.piece.head");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.leggings");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addAttribute("ATTACK_DAMAGE", 0.45, 1);
    hero.addAttribute("FALL_RESISTANCE", 6.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.25, 0);
    hero.addAttribute("PUNCH_DAMAGE", 4.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.25, 1);
    hero.setDefaultScale(1.0);
}
