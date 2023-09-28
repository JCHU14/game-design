const heroes = [
    {
        name: 'Slate',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function attackBoss() {
    heroes.forEach(hero => {
        boss.health -= hero.damage
    })
    console.log(boss.health)
    let bossHp = document.getElementById('boss')
    bossHp.innerText = boss.health.toString()
    bossAttack()
}

function bossAttack() {
    heroes.forEach(hero => {
        hero.health -= boss.damage
    })
    let heroHp = document.getElementById('hp')
    heroHp.innerText = heroes.health

}

function drawFlintStats() {
    heroes.forEach(hero => {
        // debugger
        const heroElement = document.getElementById(hero.name)

        heroElement.innerHTML = `<p>${hero.name}<p>
        <p>HP ${hero.health}<p>
        <p>Damage ${hero.damage}<p>
        <p>Type ${hero.type}<p>`

    })


}


drawFlintStats()