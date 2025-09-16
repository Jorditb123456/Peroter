const GODS = [
  {
    id: "zeus",
    name: "Zeus",
    epithet: "Señor del Rayo",
    portrait: "⚡",
    description:
      "Comandante del Olimpo que alterna descargas eléctricas con defensas nubosas y ráfagas curativas de pura luz.",
    color: "#38bdf8",
    maxHealth: 110,
    maxEnergy: 100,
    abilities: [
      {
        id: "thunder-bolt",
        name: "Trueno Olímpico",
        icon: "⚡",
        type: "attack",
        baseDamage: 18,
        energyCost: 0,
        energyGain: 25,
        description: "Descarga un rayo veloz que puede aturdir al rival.",
        effects: [
          {
            type: "stun",
            target: "enemy",
            chance: 0.2,
            remaining: 1,
            label: "Aturdido",
          },
        ],
      },
      {
        id: "olympic-aegis",
        name: "Muralla de Nubes",
        icon: "🛡️",
        type: "support",
        energyCost: 15,
        energyGain: 15,
        description: "Invoca un escudo vaporoso que absorbe daño durante varios turnos.",
        effects: [
          {
            type: "shield",
            target: "self",
            value: 15,
            remaining: 3,
            label: "Muralla de Nubes",
          },
        ],
      },
      {
        id: "divine-gleam",
        name: "Luz del Olimpo",
        icon: "✨",
        type: "support",
        energyCost: 20,
        energyGain: 12,
        heal: 22,
        description: "Canaliza rayos benéficos que restauran vida e inspiran un enfoque demoledor.",
        effects: [
          {
            type: "focus",
            target: "self",
            value: 0.3,
            remaining: 2,
            label: "Foco Celestial",
          },
        ],
      },
      {
        id: "storm-judgement",
        name: "Tormenta Divina",
        icon: "🌩️",
        type: "attack",
        baseDamage: 38,
        energyCost: 60,
        energyGain: 0,
        description: "Desata un cataclismo eléctrico que abrasa al enemigo durante varios turnos.",
        effects: [
          {
            type: "burn",
            target: "enemy",
            value: 6,
            remaining: 2,
            label: "Tormenta",
          },
        ],
      },
    ],
  },
  {
    id: "athena",
    name: "Atenea",
    epithet: "Estratega del Alba",
    portrait: "🦉",
    description:
      "Guerrera sabia que combina golpes precisos, bendiciones tácticas y escudos imposibles de romper.",
    color: "#a855f7",
    maxHealth: 120,
    maxEnergy: 110,
    abilities: [
      {
        id: "strategic-lance",
        name: "Lanza Oracular",
        icon: "🗡️",
        type: "attack",
        baseDamage: 16,
        energyCost: 0,
        energyGain: 28,
        description: "Un ataque planeado que refuerza la concentración de la diosa.",
        effects: [
          {
            type: "focus",
            target: "self",
            value: 0.2,
            remaining: 2,
            label: "Tácticas",
          },
        ],
      },
      {
        id: "aegis-shield",
        name: "Égida Resplandeciente",
        icon: "🛡️",
        type: "support",
        energyCost: 18,
        energyGain: 18,
        description: "Levanta la Égida para reducir el daño enemigo durante varios turnos.",
        effects: [
          {
            type: "shield",
            target: "self",
            value: 18,
            remaining: 3,
            label: "Égida",
          },
        ],
      },
      {
        id: "wisdom-blessing",
        name: "Bendición de la Sabiduría",
        icon: "💫",
        type: "support",
        energyCost: 25,
        energyGain: 15,
        heal: 26,
        description: "Las olas de sabiduría sanan heridas y preparan la mente para un contraataque.",
        effects: [
          {
            type: "focus",
            target: "self",
            value: 0.35,
            remaining: 1,
            label: "Clarividencia",
          },
        ],
      },
      {
        id: "judgement-day",
        name: "Juicio Implacable",
        icon: "⚖️",
        type: "attack",
        baseDamage: 34,
        energyCost: 55,
        energyGain: 0,
        description: "Sentencia al rival con un golpe crítico que puede aturdirlo.",
        effects: [
          {
            type: "stun",
            target: "enemy",
            chance: 0.35,
            remaining: 1,
            label: "Juicio",
          },
        ],
      },
    ],
  },
  {
    id: "hades",
    name: "Hades",
    epithet: "Señor del Inframundo",
    portrait: "💀",
    description:
      "Domina el Tartaro con llagas ígneas, sombras protectoras y golpes que paralizan de terror.",
    color: "#f97316",
    maxHealth: 115,
    maxEnergy: 105,
    abilities: [
      {
        id: "stygian-flame",
        name: "Llama Estigia",
        icon: "🔥",
        type: "attack",
        baseDamage: 17,
        energyCost: 0,
        energyGain: 26,
        description: "Llama eterna que deja ardiendo al adversario.",
        effects: [
          {
            type: "burn",
            target: "enemy",
            value: 5,
            remaining: 3,
            label: "Estigia",
          },
        ],
      },
      {
        id: "shadow-cloak",
        name: "Abrazo de Sombras",
        icon: "🌒",
        type: "support",
        energyCost: 18,
        energyGain: 18,
        heal: 18,
        description: "Un manto oscuro que drena energía enemiga y regenera las fuerzas propias.",
        effects: [
          {
            type: "shield",
            target: "self",
            value: 12,
            remaining: 2,
            label: "Sombras",
          },
        ],
      },
      {
        id: "soul-brand",
        name: "Marca de las Almas",
        icon: "🕯️",
        type: "attack",
        baseDamage: 22,
        energyCost: 24,
        energyGain: 20,
        description: "Golpe espectral que marca al rival con fuego abrasador.",
        effects: [
          {
            type: "burn",
            target: "enemy",
            value: 7,
            remaining: 2,
            label: "Marca",
          },
        ],
      },
      {
        id: "tartarus-judgement",
        name: "Juicio del Tártaro",
        icon: "🌑",
        type: "attack",
        baseDamage: 40,
        energyCost: 65,
        energyGain: 0,
        description: "Invoca al Cerbero interior para un golpe demoledor que puede dejar inmóvil al enemigo.",
        effects: [
          {
            type: "stun",
            target: "enemy",
            chance: 0.3,
            remaining: 1,
            label: "Terror",
          },
        ],
      },
    ],
  },
  {
    id: "quetzalcoatl",
    name: "Quetzalcóatl",
    epithet: "Serpiente Emplumada",
    portrait: "🐍",
    description:
      "Deidad mesoamericana que combina vendavales afilados, curaciones solares y huracanes imbatibles.",
    color: "#34d399",
    maxHealth: 125,
    maxEnergy: 105,
    abilities: [
      {
        id: "jade-wind",
        name: "Viento de Jade",
        icon: "💨",
        type: "attack",
        baseDamage: 15,
        energyCost: 0,
        energyGain: 30,
        description: "Cuchillas de aire que inspiran un enfoque renovado.",
        effects: [
          {
            type: "focus",
            target: "self",
            value: 0.25,
            remaining: 2,
            label: "Impulso",
          },
        ],
      },
      {
        id: "emerald-scales",
        name: "Escamas Resplandecientes",
        icon: "🛡️",
        type: "support",
        energyCost: 20,
        energyGain: 18,
        description: "Escudos serpenteantes que atenúan los ataques rivales.",
        effects: [
          {
            type: "shield",
            target: "self",
            value: 14,
            remaining: 3,
            label: "Escamas",
          },
        ],
      },
      {
        id: "solar-rebirth",
        name: "Renacer Solar",
        icon: "☀️",
        type: "support",
        energyCost: 28,
        energyGain: 14,
        heal: 28,
        description: "Una llamarada vital que restaura grandes cantidades de salud.",
      },
      {
        id: "divine-hurricane",
        name: "Huracán Divino",
        icon: "🌀",
        type: "attack",
        baseDamage: 36,
        energyCost: 60,
        energyGain: 0,
        description: "Huracán devastador que deja al enemigo envuelto en remolinos abrasadores.",
        effects: [
          {
            type: "burn",
            target: "enemy",
            value: 6,
            remaining: 2,
            label: "Huracán",
          },
        ],
      },
    ],
  },
];

class Fighter {
  constructor(config, side) {
    this.id = config.id;
    this.name = config.name;
    this.epithet = config.epithet;
    this.portrait = config.portrait;
    this.description = config.description;
    this.color = config.color;
    this.maxHealth = config.maxHealth;
    this.maxEnergy = config.maxEnergy;
    this.health = config.maxHealth;
    this.energy = 0;
    this.side = side;
    this.statuses = [];
    this.abilities = config.abilities.map((ability) => ({
      ...ability,
      effects: ability.effects ? ability.effects.map((effect) => ({ ...effect })) : [],
    }));
  }
}

const state = {
  player: null,
  enemy: null,
  playerConfig: null,
  enemyConfig: null,
  turn: null,
  waiting: false,
  finished: false,
};

const ui = {
  selectionPanel: document.getElementById("selection"),
  optionsContainer: document.getElementById("god-options"),
  gameSection: document.getElementById("game"),
  abilityButtons: document.getElementById("ability-buttons"),
  controlHelp: document.getElementById("control-help"),
  turnIndicator: document.getElementById("turn-indicator"),
  logList: document.getElementById("log"),
  restart: document.getElementById("restart"),
  rematch: document.getElementById("rematch"),
  fighters: {
    player: {
      card: document.getElementById("player-card"),
      portrait: document.getElementById("player-portrait"),
      name: document.getElementById("player-name"),
      epithet: document.getElementById("player-epithet"),
      healthBar: document.getElementById("player-health-bar"),
      healthLabel: document.getElementById("player-health-label"),
      energyBar: document.getElementById("player-energy-bar"),
      energyLabel: document.getElementById("player-energy-label"),
      status: document.getElementById("player-status"),
    },
    enemy: {
      card: document.getElementById("enemy-card"),
      portrait: document.getElementById("enemy-portrait"),
      name: document.getElementById("enemy-name"),
      epithet: document.getElementById("enemy-epithet"),
      healthBar: document.getElementById("enemy-health-bar"),
      healthLabel: document.getElementById("enemy-health-label"),
      energyBar: document.getElementById("enemy-energy-bar"),
      energyLabel: document.getElementById("enemy-energy-label"),
      status: document.getElementById("enemy-status"),
    },
  },
};

function init() {
  renderGodSelection();
  ui.restart.addEventListener("click", handleChooseAnother);
  ui.rematch.addEventListener("click", handleRematch);
}

document.addEventListener("DOMContentLoaded", init);

function renderGodSelection() {
  ui.optionsContainer.innerHTML = "";
  GODS.forEach((god) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "god-card";
    button.setAttribute("role", "listitem");
    button.innerHTML = `
      <span class="portrait" aria-hidden="true">${god.portrait}</span>
      <div class="name">${god.name}</div>
      <div class="epithet">${god.epithet}</div>
      <p class="description">${god.description}</p>
      <div class="stats">
        <span>Salud ${god.maxHealth}</span>
        <span>Energía ${god.maxEnergy}</span>
      </div>
    `;
    button.addEventListener("click", () => startBattle(god.id));
    ui.optionsContainer.appendChild(button);
  });
}

function startBattle(playerId, fixedEnemyConfig = null) {
  const playerConfig = GODS.find((god) => god.id === playerId);
  if (!playerConfig) return;

  const enemyConfig =
    fixedEnemyConfig ||
    pickRandom(GODS.filter((god) => god.id !== playerConfig.id));

  state.playerConfig = playerConfig;
  state.enemyConfig = enemyConfig;

  initBattle(playerConfig, enemyConfig);
}

function initBattle(playerConfig, enemyConfig) {
  state.player = new Fighter(playerConfig, "player");
  state.enemy = new Fighter(enemyConfig, "enemy");
  state.turn = "player";
  state.waiting = true;
  state.finished = false;

  ui.selectionPanel.classList.add("hidden");
  ui.selectionPanel.setAttribute("aria-hidden", "true");
  ui.gameSection.classList.remove("hidden");
  ui.gameSection.setAttribute("aria-hidden", "false");

  ui.logList.innerHTML = "";

  setupFighterCard(state.player, "player");
  setupFighterCard(state.enemy, "enemy");
  refreshFighterStats(state.player, "player");
  refreshFighterStats(state.enemy, "enemy");
  renderAbilityButtons();
  updateTurnIndicator();

  addLogEntry(
    `${state.player.name} desciende a la arena para retar a ${state.enemy.name}.`,
    "system"
  );

  setTimeout(() => {
    playerPhase();
  }, 900);
}

function handleChooseAnother() {
  ui.gameSection.classList.add("hidden");
  ui.gameSection.setAttribute("aria-hidden", "true");
  ui.selectionPanel.classList.remove("hidden");
  ui.selectionPanel.setAttribute("aria-hidden", "false");
  ui.turnIndicator.textContent = "Elige una deidad para comenzar.";
  ui.controlHelp.textContent =
    "Explora las cartas y elige a tu dios para entrar a la arena.";
  ui.abilityButtons.innerHTML = "";
  state.finished = false;
  state.turn = null;
}

function handleRematch() {
  if (!state.playerConfig || !state.enemyConfig) {
    return;
  }
  startBattle(state.playerConfig.id, state.enemyConfig);
}

function setupFighterCard(fighter, side) {
  const panel = ui.fighters[side];
  panel.portrait.textContent = fighter.portrait;
  panel.name.textContent = fighter.name;
  panel.epithet.textContent = fighter.epithet;
  const glow = withAlpha(fighter.color, 0.55);
  panel.card.style.setProperty("--glow", glow);
  panel.card.style.borderColor = withAlpha(fighter.color, 0.45);
  panel.portrait.style.borderColor = withAlpha(fighter.color, 0.75);
  panel.portrait.style.boxShadow = `inset 0 0 18px ${withAlpha(
    fighter.color,
    0.6
  )}`;
}

function refreshFighterStats(fighter, side) {
  const panel = ui.fighters[side];
  panel.healthBar.style.width = `${percentage(fighter.health, fighter.maxHealth)}%`;
  panel.energyBar.style.width = `${percentage(
    fighter.energy,
    fighter.maxEnergy
  )}%`;
  panel.healthLabel.textContent = `${Math.max(0, Math.round(
    fighter.health
  ))} / ${fighter.maxHealth}`;
  panel.energyLabel.textContent = `${Math.round(
    fighter.energy
  )} / ${fighter.maxEnergy}`;
  updateStatusChips(panel.status, fighter.statuses);
}

function renderAbilityButtons() {
  ui.abilityButtons.innerHTML = "";
  if (!state.player) return;

  state.player.abilities.forEach((ability) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ability-button";
    button.innerHTML = `
      <span class="icon" aria-hidden="true">${ability.icon}</span>
      <span class="name">${ability.name}</span>
      <span class="cost">Costo ${ability.energyCost} • Genera ${
      ability.energyGain || 0
    }</span>
      <span class="desc">${ability.description}</span>
    `;
    const canUse =
      state.turn === "player" &&
      !state.waiting &&
      !state.finished &&
      state.player.energy >= ability.energyCost;
    if (!canUse) {
      button.disabled = true;
    }
    button.addEventListener("click", () => {
      handlePlayerAbility(ability);
    });
    ui.abilityButtons.appendChild(button);
  });
}

function handlePlayerAbility(ability) {
  if (state.turn !== "player" || state.waiting || state.finished) return;
  if (state.player.energy < ability.energyCost) {
    addLogEntry("No posees suficiente energía divina para esa habilidad.", "system");
    return;
  }
  state.waiting = true;
  renderAbilityButtons();
  executeAbility(state.player, state.enemy, ability, "player");
}

function playerPhase() {
  if (state.finished) return;
  state.turn = "player";
  const skipTurn = processStatusesAtTurnStart(state.player);
  refreshFighterStats(state.player, "player");
  if (state.player.health <= 0) {
    endBattle("enemy");
    return;
  }
  if (skipTurn) {
    addLogEntry(
      `${state.player.name} está aturdido y no puede actuar en este turno.`,
      "system"
    );
    state.waiting = true;
    setTimeout(() => advanceTurn("enemy"), 1000);
    return;
  }
  state.waiting = false;
  updateTurnIndicator();
  renderAbilityButtons();
}

function enemyPhase() {
  if (state.finished) return;
  state.turn = "enemy";
  state.waiting = true;
  updateTurnIndicator();
  const skipTurn = processStatusesAtTurnStart(state.enemy);
  refreshFighterStats(state.enemy, "enemy");
  if (state.enemy.health <= 0) {
    endBattle("player");
    return;
  }
  if (skipTurn) {
    addLogEntry(
      `${state.enemy.name} está aturdido y pierde su turno.`,
      "system"
    );
    setTimeout(() => advanceTurn("player"), 1000);
    return;
  }
  const ability = chooseEnemyAbility();
  setTimeout(() => executeAbility(state.enemy, state.player, ability, "enemy"), 700);
}

function chooseEnemyAbility() {
  const energy = state.enemy.energy;
  const abilities = state.enemy.abilities.filter(
    (ability) => energy >= ability.energyCost
  );
  if (abilities.length === 0) {
    return state.enemy.abilities[0];
  }

  const lowHealth = state.enemy.health <= state.enemy.maxHealth * 0.45;
  const healOption = abilities.find((ability) => ability.heal);
  if (lowHealth && healOption && Math.random() < 0.8) {
    return healOption;
  }

  const ultimates = abilities.filter((ability) => ability.energyCost >= 55);
  if (ultimates.length && energy >= 55 && Math.random() < 0.7) {
    return pickRandom(ultimates);
  }

  const burners = abilities.filter((ability) =>
    ability.effects?.some((effect) => effect.type === "burn")
  );
  if (burners.length && Math.random() < 0.6) {
    return pickRandom(burners);
  }

  return pickRandom(abilities);
}

function executeAbility(attacker, defender, ability, actingSide) {
  addLogEntry(`${attacker.name} usa ${ability.name}.`, actingSide);

  const energyBefore = attacker.energy;
  attacker.energy = Math.max(0, attacker.energy - ability.energyCost);
  attacker.energy = Math.min(
    attacker.maxEnergy,
    attacker.energy + (ability.energyGain || 0)
  );
  if (ability.energyCost > 0 || ability.energyGain) {
    const energyDiff = attacker.energy - energyBefore;
    if (energyDiff !== 0) {
      addLogEntry(
        `${attacker.name} ahora dispone de ${Math.round(
          attacker.energy
        )} de energía divina.`,
        "system"
      );
    }
  }

  if (ability.type === "attack") {
    const { damage, bonusMultiplier } = computeDamage(attacker, ability.baseDamage);
    const { dealt, absorbed } = applyDamage(defender, damage);
    addLogEntry(
      `${attacker.name} inflige ${dealt} de daño a ${defender.name}.`,
      actingSide
    );
    showFloatingText(defender.side, `-${dealt}`, "damage");
    if (bonusMultiplier > 1) {
      addLogEntry(
        `${attacker.name} aprovecha su enfoque divino (+${Math.round(
          (bonusMultiplier - 1) * 100
        )}%).`,
        "system"
      );
    }
    if (absorbed > 0) {
      addLogEntry(
        `${defender.name} reduce ${absorbed} de daño gracias a su escudo.`,
        "system"
      );
    }
  }

  if (ability.heal) {
    const healed = applyHealing(attacker, ability.heal);
    if (healed > 0) {
      addLogEntry(
        `${attacker.name} recupera ${healed} de salud.`,
        actingSide
      );
      showFloatingText(attacker.side, `+${healed}`, "heal");
    }
  }

  if (ability.effects) {
    ability.effects.forEach((effect) => {
      const message = applyEffect(effect, attacker, defender);
      if (message) {
        addLogEntry(message.text, message.type || "system");
      }
    });
  }

  refreshFighterStats(attacker, attacker.side);
  refreshFighterStats(defender, defender.side);
  renderAbilityButtons();

  if (defender.health <= 0 && attacker.health <= 0) {
    endBattle("draw");
    return;
  }
  if (defender.health <= 0) {
    endBattle(actingSide);
    return;
  }
  if (attacker.health <= 0) {
    endBattle(oppositeSide(actingSide));
    return;
  }

  setTimeout(() => advanceTurn(oppositeSide(actingSide)), 1000);
}

function advanceTurn(nextSide) {
  if (state.finished) return;
  if (nextSide === "player") {
    playerPhase();
  } else if (nextSide === "enemy") {
    enemyPhase();
  }
  updateTurnIndicator();
}

function processStatusesAtTurnStart(fighter) {
  let skipTurn = false;
  const retained = [];

  fighter.statuses.forEach((status) => {
    if (status.timing === "use") {
      retained.push(status);
      return;
    }
    if (status.type === "burn") {
      fighter.health = Math.max(0, fighter.health - status.value);
      addLogEntry(
        `${fighter.name} sufre ${status.value} de daño por ${status.label || "llagas"}.`,
        "system"
      );
      showFloatingText(fighter.side, `-${status.value}`, "burn");
    }
    if (status.type === "stun") {
      skipTurn = true;
    }
    status.remaining -= 1;
    if (status.remaining > 0) {
      retained.push(status);
    } else if (status.type === "shield") {
      addLogEntry(
        `${fighter.name} pierde la protección de ${status.label || "su escudo"}.`,
        "system"
      );
    }
  });

  fighter.statuses = retained;
  refreshFighterStats(fighter, fighter.side);
  return skipTurn;
}

function computeDamage(attacker, base) {
  let multiplier = 1;
  const keep = [];

  attacker.statuses.forEach((status) => {
    if (status.type === "focus") {
      multiplier += status.value;
      status.remaining = typeof status.remaining === "number" ? status.remaining - 1 : 0;
      if (status.remaining > 0) {
        keep.push(status);
      }
    } else {
      keep.push(status);
    }
  });

  attacker.statuses = keep;
  const damage = Math.max(0, Math.round(base * multiplier));
  return { damage, bonusMultiplier: multiplier };
}

function applyDamage(target, amount) {
  let damage = Math.max(0, Math.round(amount));
  let absorbed = 0;
  const shield = target.statuses.find((status) => status.type === "shield");
  if (shield) {
    const reduction = Math.min(shield.value, damage);
    damage -= reduction;
    absorbed = reduction;
  }
  target.health = Math.max(0, target.health - damage);
  return { dealt: damage, absorbed };
}

function applyHealing(target, amount) {
  const healAmount = Math.max(0, Math.round(amount));
  const before = target.health;
  target.health = Math.min(target.maxHealth, target.health + healAmount);
  return Math.round(target.health - before);
}

function applyEffect(effect, attacker, defender) {
  const recipient = effect.target === "self" ? attacker : defender;
  const status = {
    type: effect.type,
    label: effect.label,
    remaining: effect.remaining ?? 1,
    value: effect.value ?? 0,
    timing: effect.type === "focus" ? "use" : "turn",
  };

  switch (effect.type) {
    case "stun": {
      if (effect.chance && Math.random() > effect.chance) {
        return null;
      }
      recipient.statuses.push(status);
      return {
        text: `${recipient.name} queda aturdido y podría perder su siguiente turno.`,
        type: "system",
      };
    }
    case "burn": {
      recipient.statuses.push(status);
      return {
        text: `${recipient.name} arde con ${effect.label || "llamas divinas"}.`,
        type: attacker.side,
      };
    }
    case "shield": {
      recipient.statuses = recipient.statuses.filter((s) => s.type !== "shield");
      recipient.statuses.push(status);
      return {
        text: `${recipient.name} se protege con ${effect.label || "un escudo"}.`,
        type: recipient.side,
      };
    }
    case "focus": {
      recipient.statuses.push(status);
      return {
        text: `${recipient.name} concentra su poder divino.`,
        type: recipient.side,
      };
    }
    default:
      return null;
  }
}

function updateTurnIndicator() {
  if (state.finished) {
    return;
  }
  if (state.turn === "player") {
    ui.turnIndicator.textContent = "Tu turno: elige una habilidad para actuar.";
    ui.controlHelp.textContent =
      "Combina ataques básicos para cargar energía y desata tus golpes definitivos.";
  } else if (state.turn === "enemy") {
    ui.turnIndicator.textContent = `${state.enemy.name} prepara su movimiento...`;
    ui.controlHelp.textContent =
      "Observa al rival. Tras su ataque recuperarás el control.";
  } else {
    ui.turnIndicator.textContent = "Elige una deidad para comenzar.";
  }
}

function endBattle(winnerSide) {
  state.finished = true;
  state.turn = null;
  state.waiting = true;
  renderAbilityButtons();

  if (winnerSide === "draw") {
    ui.turnIndicator.textContent = "Empate divino: ambos combatientes caen a la vez.";
    addLogEntry("La contienda termina en equilibrio perfecto.", "system");
    return;
  }

  const winner = winnerSide === "player" ? state.player : state.enemy;
  const loser = winnerSide === "player" ? state.enemy : state.player;

  ui.turnIndicator.textContent = `${winner.name} domina la arena.`;
  ui.controlHelp.textContent = "Puedes reiniciar el combate o elegir otra deidad.";
  addLogEntry(
    `${winner.name} derrota a ${loser.name} y se alza con la victoria divina.`,
    "system"
  );
}

function updateStatusChips(container, statuses) {
  container.innerHTML = "";
  if (!statuses.length) {
    const span = document.createElement("span");
    span.className = "status-chip";
    span.textContent = "Sin efectos";
    container.appendChild(span);
    return;
  }
  statuses.forEach((status) => {
    const chip = document.createElement("span");
    chip.className = `status-chip ${status.type}`;
    let suffix = "";
    if (status.timing === "turn" && typeof status.remaining === "number") {
      suffix = ` (${status.remaining})`;
    }
    if (status.timing === "use" && typeof status.remaining === "number") {
      suffix = ` (${status.remaining} uso${status.remaining === 1 ? "" : "s"})`;
    }
    chip.textContent = `${status.label || formatStatusName(status.type)}${suffix}`;
    container.appendChild(chip);
  });
}

function addLogEntry(text, type = "system") {
  const entry = document.createElement("li");
  entry.className = `log-item ${type}`;
  entry.textContent = text;
  ui.logList.appendChild(entry);
  if (ui.logList.children.length > 50) {
    ui.logList.removeChild(ui.logList.firstChild);
  }
  ui.logList.scrollTop = ui.logList.scrollHeight;
}

function showFloatingText(side, text, variant) {
  const card = ui.fighters[side]?.card;
  if (!card) return;
  const floating = document.createElement("span");
  floating.className = `floating-text ${variant || ""}`;
  floating.textContent = text;
  card.appendChild(floating);
  setTimeout(() => {
    floating.remove();
  }, 1100);
}

function withAlpha(hex, alpha) {
  const sanitized = hex.replace("#", "");
  if (sanitized.length !== 6) return hex;
  const r = parseInt(sanitized.slice(0, 2), 16);
  const g = parseInt(sanitized.slice(2, 4), 16);
  const b = parseInt(sanitized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function percentage(current, max) {
  if (max === 0) return 0;
  return Math.max(0, Math.min(100, (current / max) * 100));
}

function oppositeSide(side) {
  return side === "player" ? "enemy" : "player";
}

function formatStatusName(type) {
  switch (type) {
    case "stun":
      return "Aturdido";
    case "burn":
      return "Quemadura";
    case "shield":
      return "Escudo";
    case "focus":
      return "Enfoque";
    default:
      return "Efecto";
  }
}
