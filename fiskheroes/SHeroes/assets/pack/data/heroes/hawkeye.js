function init(hero) {
    hero.setName("Hawkeye");
    hero.setTier(3);
    hero.setChestplate("item.superhero_armor.piece.robes");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");
    hero.addEquipment("fiskheroes:compound_bow");
    hero.addEquipment("fiskheroes:quiver");
    hero.addAbilities("fiskheroes:archery");
    hero.addAttribute("BOW_DRAWBACK", 0.90, 1);
    hero.addAttribute("FALL_RESISTANCE", 3.0, 0);
    hero.addAttribute("SWORD_DAMAGE", 2.0, 0);

    hero.addKeyBind("HORIZONTAL_BOW", "key.horizontalBow", 1);
}
