function validateInput(input) {
	// Remove any non-numeric characters
	input.value = input.value.replace(/[^0-9]/g, '');
	if (input.value.length > 3) {
		input.value = input.value.slice(0, 3);
	}
}

function autofillZeros() {
	// Autofill zeros for empty input fields
	const inputFields = document.querySelectorAll('input[type="number"]');
	inputFields.forEach((input) => {
		if (input.value === '') {
			input.value = '0';
		}
	});
}

function changeMinistar() {
	if (document.getElementById("dk-select").value == 1) {
		document.getElementById("ministar_img").src = "Currency Images/bananas.png";
		document.getElementById("ministar-caption").innerText = "Bananas";
	} else {
		document.getElementById("ministar_img").src = "Currency Images/ministars.png";
		document.getElementById("ministar-caption").innerText = "Ministars";
	}	
}

function changeBonusStarNames(bonusStarCount) {
	const game = document.getElementById("chooseGame").value;
	let names = null;
	if (game == "7") {
		names = ["Minigame", "Shopping", "Orb", "Running", "Red", "Action"];
	} else if (game == "8") {
		names = ["Minigame", "Shopping", "Candy", "Running", "Red", "Action"];
	} else if (game == "DS") {
		names = ["Item", "Green", "Hex", "Friendship", "Minigame", "Running"];
	} else if (game == "9") {
		names = ["Minigame", "Dice Block", "Spin", "Minus", "Far", "Slow"];
	} else if (game == "10") {
		names = ["Minigame", "Dice Block", "Minus", "Far", "Slow"];
	} else if (game == "Star Rush" && document.getElementById("balloon-select").value == 0) {
		names = ["Champion", "Item", "Balloon", "Duel", "Sightseer", "Slowpoke", "Wanderer", "Loner"];
	} else if (game == "Star Rush" && document.getElementById("balloon-select").value == 1) {
		names = ["Champion", "Item", "Balloon", "Duel", "Sightseer", "Slowpoke", "Anti-Items", "Almost"];
	} else if (game == "Top 100") {
		names = ["Minigame", "Item", "Rich", "Sightseer", "Easygoing", "Balloon", "So-Close", "Unused"];
	} else if (game == "Super" && document.getElementById("partner-select").value == 0) {
		names = ["Rich", "Minigame", "Item", "Sightseer", "Slowpoke", "Unlucky", "Eventful"];
	} else if (game == "Super" && document.getElementById("partner-select").value == 1) {
		names = ["Rich", "Minigame", "Item", "Sightseer", "Slowpoke", "Eventful", "Stompy", "Doormat"];
	} else if (game == "Superstars") {
		names = ["Rich", "Minigame", "Shopping", "Item", "Sightseer", "Slowpoke", "Unlucky", "Eventful", "Bowser Space"];
	}

	for (let i = 1; i <= bonusStarCount; i++) {
		document.getElementById(`bonus${i}_img`).src = "MP" + game + " Textures/" + names[i-1].toLowerCase() + ".png";
		document.getElementById(`bonus${i}_name`).innerText = names[i-1];
	}
}

function determineNumColumnsAndExtraQs() {
	const game = document.getElementById("chooseGame").value;

	classicCells = document.querySelectorAll(".classicCurrency")
	classicCells.forEach((cell) => cell.style.display = "table-cell");
	partnerCells = document.querySelectorAll(".partner-party")
	partnerCells.forEach((cell) => cell.style.display = "none");
	thirdCells = document.querySelectorAll(".third-results")
	thirdCells.forEach((cell) => cell.style.display = "table-cell");
	document.getElementById("third-header").style.display = "table-cell";
	fourthCells = document.querySelectorAll(".fourth-results")
	fourthCells.forEach((cell) => cell.style.display = "table-cell");
	document.getElementById("fourth-header").style.display = "table-cell";
	partnerCells.forEach((cell) => cell.style.display = "none");
	ministarCells = document.querySelectorAll(".ministarCurrency")
	ministarCells.forEach((cell) => cell.style.display = "none");
	if (game != "9") {
		document.getElementById("dk-select").value = 0;
		changeMinistar();
	}
	allyCells = document.querySelectorAll(".allyGame")
	allyCells.forEach((cell) => cell.style.display = "none");
		
	if (game == "7" || game == "8") {
		return 6
	} 
	document.getElementById("minigame-note").style.display = "inline";
	if (game == "DS") {
		return 6
	}
	else if (game == "9") {
		document.getElementById("dk-label").style.display = "inline"
		document.getElementById("dk-select").style.display = "inline"
		classicCells = document.querySelectorAll(".classicCurrency")
		classicCells.forEach((cell) => cell.style.display = "none");
		ministarCells = document.querySelectorAll(".ministarCurrency")
		ministarCells.forEach((cell) => cell.style.display = "table-cell");
		return 6
	}
	else if (game == "10") {
		classicCells = document.querySelectorAll(".classicCurrency")
		classicCells.forEach((cell) => cell.style.display = "none");
		ministarCells = document.querySelectorAll(".ministarCurrency")
		ministarCells.forEach((cell) => cell.style.display = "table-cell");
		return 5
	}
	else if (game == "Super"){
		document.getElementById("partner-label").style.display = "inline"
		document.getElementById("partner-select").style.display = "inline"
		document.getElementById("turns-20-label").style.display = "inline"
		document.getElementById("turns-20-select").style.display = "inline"
		document.getElementById("super-ally-note").style.display = "inline"
		allyCells = document.querySelectorAll(".allyGame")
		allyCells.forEach((cell) => cell.style.display = "table-cell");
		if (document.getElementById("partner-select").value == 1) {
			classicCells = document.querySelectorAll(".classicCurrency")
			classicCells.forEach((cell) => cell.style.display = "none");
			partnerCells = document.querySelectorAll(".partner-party")
			partnerCells.forEach((cell) => cell.style.display = "table-cell");
			document.getElementById("star-header").style.display = "table-cell";
			document.getElementById("coin-header").style.display = "table-cell";
			thirdCells = document.querySelectorAll(".third-results")
			thirdCells.forEach((cell) => cell.style.display = "none");
			document.getElementById("third-header").style.display = "none";
			fourthCells = document.querySelectorAll(".fourth-results")
			fourthCells.forEach((cell) => cell.style.display = "none");
			document.getElementById("fourth-header").style.display = "none";
			return 8
		} else {
			return 7
		}
	}
	else if (game == "Superstars"){
		document.getElementById("turns-30-label").style.display = "inline"
		document.getElementById("turns-30-select").style.display = "inline"
		return 9
	}
	else if (game == "Star Rush") {
		document.getElementById("balloon-label").style.display = "inline"
		document.getElementById("balloon-select").style.display = "inline"
		if (document.getElementById("balloon-select").value == 0) {
			allyCells = document.querySelectorAll(".allyGame")
			allyCells.forEach((cell) => cell.style.display = "table-cell");
			document.getElementById("rush-ally-note").style.display = "inline"
		}
		return 8
	} else { // Top 100
		return 8
	}
}

function changeLayout() {
	labels = document.querySelectorAll(".extraQ")
	labels.forEach((label) => label.style.display = "none");
	notes = document.querySelectorAll(".note")
	notes.forEach((note) => note.style.display = "none");
	selects = document.querySelectorAll(".extraSelect")
	selects.forEach((select) => select.style.display = "none");

	const bonusStarCount = determineNumColumnsAndExtraQs();
	changeBonusStarNames(bonusStarCount);

	// Hide all bonus star columns and corresponding checkboxes
	for (let i = 1; i <= 9; i++) {
		document.getElementById(`bonus-star-column${i}`).style.display = "none";
		for (let j = 1; j <= 4; j++) {
			document.getElementById(`bonus${i}_P${j}-cell`).style.display = "none";
			document.getElementById(`bonus${i}_P${j}`).checked = false;
		}
	}
	document.getElementById("minigame-team1").checked = false;
	document.getElementById("minigame-team2").checked = false;
				
	// Show the selected number of bonus star columns
	if (document.getElementById("chooseGame").value == "Super" && document.getElementById("partner-select").value == 1) {
		for (let i = 1; i <= bonusStarCount; i++) {
			document.getElementById(`bonus-star-column${i}`).style.display = "table-cell";
			if (i == 2) {
				document.getElementById("minigame-teamOne-cell").style.display = "table-cell";
				document.getElementById("minigame-teamTwo-cell").style.display = "table-cell";
			} else {
				for (let j = 1; j <= 4; j++) {
					document.getElementById(`bonus${i}_P${j}-cell`).style.display = "table-cell";
				}
			}
		}
	} else {
		for (let i = 1; i <= bonusStarCount; i++) {
			document.getElementById(`bonus-star-column${i}`).style.display = "table-cell";
			for (let j = 1; j <= 4; j++) {
				document.getElementById(`bonus${i}_P${j}-cell`).style.display = "table-cell";
			}
		}
	}
}

function simulateGame() {

	autofillZeros();
	let starList = [];
	let coinList = [];
	let ministarList = [];
	let bonusList = [];
	const bonusStarCount = determineNumColumnsAndExtraQs();
	changeBonusStarNames(bonusStarCount);
	
	if (document.getElementById("chooseGame").value == "Super" && document.getElementById("partner-select").value == 1) {
		starList.push(parseInt(document.getElementById("star_teamOne").value));
		starList.push(parseInt(document.getElementById("star_teamTwo").value));

		coinList.push(parseInt(document.getElementById("coin_teamOne").value));
		coinList.push(parseInt(document.getElementById("coin_teamTwo").value));
				
		for (let i = 1; i <= bonusStarCount; i++){
			if (i == 2) {
				minigameBonusList = []
				for (var j = 1; j <= 2; j++) {
					var checkboxId = "minigame-team" + j;
					var checkbox = document.getElementById(checkboxId);
					if (checkbox.checked) {
						minigameBonusList.push((j*2) - 1);
						minigameBonusList.push((j*3) - j);
					}
				}
				bonusList.push(minigameBonusList);
			} else {	
				bonusList.push(getBonusStarListValues("bonus"+i));
			}
		}
	} else {
		starList.push(parseInt(document.getElementById("star_P1").value));
		starList.push(parseInt(document.getElementById("star_P2").value));
		starList.push(parseInt(document.getElementById("star_P3").value));
		starList.push(parseInt(document.getElementById("star_P4").value));

		coinList.push(parseInt(document.getElementById("coin_P1").value));
		coinList.push(parseInt(document.getElementById("coin_P2").value));
		coinList.push(parseInt(document.getElementById("coin_P3").value));
		coinList.push(parseInt(document.getElementById("coin_P4").value));
	
		ministarList.push(parseInt(document.getElementById("ministar_P1").value));
		ministarList.push(parseInt(document.getElementById("ministar_P2").value));
		ministarList.push(parseInt(document.getElementById("ministar_P3").value));
		ministarList.push(parseInt(document.getElementById("ministar_P4").value));
		
		for (let i = 1; i <= bonusStarCount; i++){
			bonusList.push(getBonusStarListValues("bonus"+i));
		}
	}

	generateStats(starList, coinList, ministarList, bonusList, bonusStarCount);
}

function getBonusStarListValues(bonusId) {
	bonusList = []
	for (var i = 1; i <= 4; i++) {
		var checkboxId = bonusId + "_P" + i;
		var checkbox = document.getElementById(checkboxId);
		if (checkbox.checked) {
			bonusList.push(i)
		}
	}
	return bonusList
}

function determineNumBonusStarsAwarded() {
	const game = document.getElementById("chooseGame").value;
	if (game == "10" || (game == "Super" && document.getElementById("turns-20-select").value == 0) || (game == "Superstars" && document.getElementById("turns-30-select").value == 0)) {
		return 2
	} else  {
		return 3
	}
}

function generateStats(starList, coinList, ministarList, bonusList, bonusStarCount) {
	const numBonusStarsGiven = determineNumBonusStarsAwarded();
	const game = document.getElementById("chooseGame").value;
	
	const winList = enumeratePossibleResults(starList.slice(), coinList.slice(), ministarList.slice(), bonusList.slice(), numBonusStarsGiven, bonusStarCount, game);
	const winListLength = winList.length;
	// First list of rankList represents number of times P1 got 1st, P1 got 2nd, 3rd, etc. Then P2, etc.
	let rankList = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	
	for (let list of winList) {
		// i represents player index number
		for (let i = 0; i < 4; i++) {
			// Checking for decimal placements (ties for 1st)
			if (list[i] - Math.floor(list[i]) > 0) {
				rankList[i][Math.floor(list[i]) - 1] += (1 - (list[i] - Math.floor(list[i])));
				rankList[i][Math.floor(list[i])] += list[i] - Math.floor(list[i]);
			} else {
				rankList[i][list[i] - 1]++;	
			}
		}
	}
	
	if (game == "Super" && document.getElementById("partner-select").value == 1) {
		for (let i = 0; i < 4; i++) {
			rankList[i][1] = rankList[i][2];
			rankList[i][2] = 0;
		}
	}
	
	for (let playerIndex = 0; playerIndex < 4; playerIndex++) {
		for (let rankIndex = 0; rankIndex < 4; rankIndex++) {
			updatePercentageResults(playerIndex + 1, rankIndex + 1, rankList[playerIndex][rankIndex], winListLength);
		}
		let playerAverageRank = (((4 * rankList[playerIndex][3]) + (3 * rankList[playerIndex][2]) + (2 * rankList[playerIndex][1]) + rankList[playerIndex][0]) / winListLength).toFixed(2);
		document.getElementById(`avgPlace_P${playerIndex + 1}`).innerText = playerAverageRank;
	}
}


function updatePercentageResults(playerNum, placeNum, winCount, totalCount) {
	const percentage = Math.round(((winCount / totalCount) * 100) * 10) / 10;
	document.getElementById(`percentage${placeNum}_P${playerNum}`).innerText = `${percentage}%`;
}

function computeAllyStar() {
	var p1Allies = parseInt(document.getElementById("ally_P1").value);
	var p2Allies = parseInt(document.getElementById("ally_P2").value);
	var p3Allies = parseInt(document.getElementById("ally_P3").value);
	var p4Allies = parseInt(document.getElementById("ally_P4").value);
	
	const allyCountList = [p1Allies, p2Allies, p3Allies, p4Allies];
	const allyTie = [];

	// Check if all players have 0 allies
	if (allyCountList.every(count => count == 0)) {
		return [[],[]];
	} else {
		let mostAllies = Math.max(...allyCountList);
		var mostAllyIndex = allyCountList.indexOf(mostAllies);

		// Check if there is a tie for the most allies
		allyCountList.forEach((count, index) => {
		  if (count === mostAllies) {
			allyTie.push(index + 1);
		  }
		});
		
		if (allyTie.length > 1) {
		  return [allyCountList, allyTie];
		} else {
		  return [allyCountList, allyTie[0]];
		}
	}
}

function enumeratePossibleResults(starList, coinList, ministarList, bonusList, numBonusStarsGiven, bonusStarCount, game) {
	if (game == "Super") {
		bonusStarCount += 2;
		allyResult = computeAllyStar();
		allyCount = allyResult[0];
		bonusList.push(allyResult[1]);
		return enumerateSuperResults(starList, coinList, ministarList, bonusList, numBonusStarsGiven, bonusStarCount, game, allyCount);
	} else if (game == "Star Rush" && document.getElementById("balloon-select").value == 0) {
		allyResult = computeAllyStar();
		allyCount = allyResult[0];
		return enumerateStarRushResults(starList, coinList, ministarList, bonusList, numBonusStarsGiven, bonusStarCount, game, allyCount);
	} else {
		let winList = [];
		let bonusStarOneIndex = 0;
		if (numBonusStarsGiven == 3) {
			while (bonusStarOneIndex < (bonusStarCount - 2)) {
				let bonusStarTwoIndex = bonusStarOneIndex + 1;
				while (bonusStarTwoIndex < (bonusStarCount - 1)) {
					let bonusStarThreeIndex = bonusStarTwoIndex + 1;
					while (bonusStarThreeIndex < bonusStarCount) {
						const chosenBonusStars = [bonusList[bonusStarOneIndex], bonusList[bonusStarTwoIndex], bonusList[bonusStarThreeIndex]];
						winList.push(giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game));
						bonusStarThreeIndex++;
					}
					bonusStarTwoIndex++;
				}
				bonusStarOneIndex++;
			}
		} else if (numBonusStarsGiven == 2) {
			while (bonusStarOneIndex < (bonusStarCount - 1)) {
				let bonusStarTwoIndex = bonusStarOneIndex + 1;
				while (bonusStarTwoIndex < bonusStarCount) {
					const chosenBonusStars = [bonusList[bonusStarOneIndex], bonusList[bonusStarTwoIndex]];
					winList.push(giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game));
					bonusStarTwoIndex++;
				}
				bonusStarOneIndex++;
			}
		}
		return winList;
	}
}

function enumerateStarRushResults(starList, coinList, ministarList, bonusList, numBonusStarsGiven, bonusStarCount, game, allyCount) {
	let winList = [];
	let bonusStarOneIndex = 0;
	if (numBonusStarsGiven == 3) {
		while (bonusStarOneIndex < (bonusStarCount - 2)) {
			let bonusStarTwoIndex = bonusStarOneIndex + 1;
			while (bonusStarTwoIndex < (bonusStarCount - 1)) {
				let bonusStarThreeIndex = bonusStarTwoIndex + 1;
				while (bonusStarThreeIndex < bonusStarCount) {
					const chosenBonusStars = [bonusList[bonusStarOneIndex], bonusList[bonusStarTwoIndex], bonusList[bonusStarThreeIndex]];
					if (allyCount.every(ally => ally === 0)) {
						winList.push(giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game));
					} else {
						allyCountCopy = [...allyCount];
						for (let player = 0; player < 4; player++) {
							while (allyCountCopy[player] > 0) {
								chosenBonusStars.push(player+1);
								winList.push(giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game));
								chosenBonusStars.splice(3,1);
								allyCountCopy[player] -= 1;
							}
						}
					}
					bonusStarThreeIndex++;
				}
				bonusStarTwoIndex++;
			}
			bonusStarOneIndex++;
		}
	}
	return winList;
}

function enumerateSuperResults(starList, coinList, ministarList, bonusList, numBonusStarsGiven, bonusStarCount, game, allyCount) {
	let winList = [];
	let bonusStarOneIndex = 0;
	const buddyIndex = bonusStarCount - 1;
	const sumAllies = Math.max(allyCount.reduce((accumulator, currentValue) => accumulator + currentValue, 0), 1);
	if (numBonusStarsGiven == 3) {
		while (bonusStarOneIndex < (bonusStarCount - 2)) {
			let bonusStarTwoIndex = bonusStarOneIndex + 1;
			while (bonusStarTwoIndex < (bonusStarCount - 1)) {
				let bonusStarThreeIndex = bonusStarTwoIndex + 1;
				while (bonusStarThreeIndex < bonusStarCount) {
					if (bonusStarThreeIndex == buddyIndex) {
						if (allyCount.every(ally => ally === 0)) {
							const chosenBonusStars = [bonusList[bonusStarOneIndex], bonusList[bonusStarTwoIndex], []];
							const result = giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game);
							for (let i = 0; i < sumAllies; i++) {
								winList.push(result);
							}
						} else {
							allyCountCopy = [...allyCount];
							const chosenBonusStars = [bonusList[bonusStarOneIndex], bonusList[bonusStarTwoIndex]];
							for (let player = 0; player < 4; player++) {
								while (allyCountCopy[player] > 0) {
									chosenBonusStars.push(player+1);
									winList.push(giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game));
									chosenBonusStars.splice(2,1);
									allyCountCopy[player] -= 1;
								}
							}
						}
					} else {
						const chosenBonusStars = [bonusList[bonusStarOneIndex], bonusList[bonusStarTwoIndex], bonusList[bonusStarThreeIndex]];
						const result = giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game);
						for (let i = 0; i < sumAllies; i++) {
							winList.push(result);
						}
					}
					bonusStarThreeIndex++;
				}
				bonusStarTwoIndex++;
			}
			bonusStarOneIndex++;
		}
	} else if (numBonusStarsGiven == 2) {
		while (bonusStarOneIndex < (bonusStarCount - 1)) {
			let bonusStarTwoIndex = bonusStarOneIndex + 1;
			while (bonusStarTwoIndex < bonusStarCount) {
				if (bonusStarTwoIndex == buddyIndex) {
					if (allyCount.every(ally => ally === 0)) {
						const chosenBonusStars = [bonusList[bonusStarOneIndex], []];
						const result = giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game);
						for (let i = 0; i < sumAllies; i++) {
							winList.push(result);
						}
					} else {
						allyCountCopy = [...allyCount];
						const chosenBonusStars = [bonusList[bonusStarOneIndex]];
						for (let player = 0; player < 4; player++) {
							while (allyCountCopy[player] > 0) {
								chosenBonusStars.push(player+1);
								winList.push(giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game));
								chosenBonusStars.splice(1,1);
								allyCountCopy[player] -= 1;
							}
						}
					}
				} else {
					const chosenBonusStars = [bonusList[bonusStarOneIndex], bonusList[bonusStarTwoIndex]];
					const result = giveBonusReward(starList, coinList, ministarList, chosenBonusStars, game);
					for (let i = 0; i < sumAllies; i++) {
						winList.push(result);
					}
				}
				bonusStarTwoIndex++;
			}
			bonusStarOneIndex++;
		}
	}
	return winList;
}
	
function giveBonusReward(ogStarList, ogCoinList, ogMinistarList, chosenBonusStars, game) {
	let starList = [...ogStarList];
	let coinList = [...ogCoinList];
	let ministarList = [...ogMinistarList];
	
	if (game == "Star Rush" && document.getElementById("balloon-select").value == 0) {
		for (let bonus of chosenBonusStars) {
			if (typeof bonus === 'number') {
				coinList[bonus - 1] += 5;
			} else if (Array.isArray(bonus)) {
				for (let player of bonus) {
					coinList[player - 1] += 5;
				}
			}
		}
		for (let i = 0; i < 4; i++) {
			const convertedStars = Math.floor(coinList[i]/10);
			starList[i] += convertedStars;
			coinList[i] -= (convertedStars*10);
		}
		return assignRankings(starList, coinList, game);
	} else if (game == "Super" && document.getElementById("partner-select").value == 1) {
		for (let bonus of chosenBonusStars) {
			if (typeof bonus === 'number' && bonus < 3) {
				starList[0]++;
			} else if (typeof bonus === 'number' && bonus >= 3) {
				starList[1]++;
			} else if (Array.isArray(bonus)) {
				for (let player of bonus) {
					if (player < 3) {
						starList[0]++;
					} else {
						starList[1]++;
					}
				}
			}
		}
		starList.push(starList[0]);
		starList.push(starList[1]);
		starList.push(starList[1]);
		starList.splice(1,1);
		coinList.push(coinList[0]);
		coinList.push(coinList[1]);
		coinList.push(coinList[1]);
		coinList.splice(1,1);
		return assignRankings(starList, coinList, game);
	} else if (game != "9" && game != "10") {
		for (let bonus of chosenBonusStars) {
			if (typeof bonus === 'number') {
				starList[bonus - 1]++;
			} else if (Array.isArray(bonus)) {
				for (let player of bonus) {
					starList[player - 1]++;
				}
			}
		}
		return assignRankings(starList, coinList, game);
	} else if (game == "9" && document.getElementById("dk-select").value == 0) {
		for (let bonus of chosenBonusStars) {
			if (typeof bonus === 'number') {
				ministarList[bonus - 1] += 5;
			} else if (Array.isArray(bonus)) {
				for (let player of bonus) {
					ministarList[player - 1] += 5;
				}
			}
		}
		return assignRankings([0,0,0,0], ministarList, game);
	} else {
		for (let bonus of chosenBonusStars) {
			if (typeof bonus === 'number') {
				ministarList[bonus - 1] += 10;
			} else if (Array.isArray(bonus)) {
				for (let player of bonus) {
					ministarList[player - 1] += 10;
				}
			}
		}
		return assignRankings([0,0,0,0], ministarList, game);
	}
}

function assignRankings(starList, coinList, game) {
	let tie = [];
	let rankList = [null, null, null, null];
	let currRank = 1;

	// Determine 1st
	let mostStarsIndex = starList.indexOf(Math.max(...starList));
	let mostStars = Math.max(...starList);
	tie.push(mostStarsIndex);
	starList[mostStarsIndex] = -1;
	let tieFound = true;

	while (tieFound) {
		if (Math.max(...starList) === mostStars) {
			mostStarsIndex = starList.indexOf(Math.max(...starList));
			tie.push(mostStarsIndex);
			starList[mostStarsIndex] = -1;
		} else {
			tieFound = false;
		}
	}

	if (tie.length > 1) {
		let winningIndex = breakTie(tie, coinList, 1, game);
		if (typeof winningIndex === 'number') {
			rankList[winningIndex] = 1;
			tie.splice(tie.indexOf(winningIndex), 1);
			currRank++;
		} else {
			let tieLength = winningIndex.length;
			for (let rankTie of winningIndex) {
				if (game == "9" || game == "10" || game == "Super" || game == "Star Rush" || game == "Top 100") {
					rankList[rankTie] = 1;
				} else {
					rankList[rankTie] = 1 + (1 - 1/tieLength);
				}
				tie.splice(tie.indexOf(rankTie), 1);
			}
			currRank += tieLength;
		}
	} else {
		rankList[mostStarsIndex] = 1;
		tie.splice(tie.indexOf(mostStarsIndex), 1);
		currRank++;
	}

	while (tie.length > 0) {
		let secondIndex = breakTie(tie, coinList, currRank, game);

		if (typeof secondIndex === 'number') {
			rankList[secondIndex] = currRank;
			tie.splice(tie.indexOf(secondIndex), 1);
			currRank++;
		} else {
			let tieLength = secondIndex.length;

			for (let rankTie of secondIndex) {
				rankList[rankTie] = currRank;
				tie.splice(tie.indexOf(rankTie), 1);
			}

			currRank += tieLength;
		}
	}

	// Determine remaining places, if needed
	while (rankList.includes(null)) {
		tie = [];

		// Determine next highest placing player via stars
		mostStarsIndex = starList.indexOf(Math.max(...starList));
		mostStars = Math.max(...starList);
		tie.push(mostStarsIndex);
		starList[mostStarsIndex] = -1;
		tieFound = true;

		while (tieFound) {
			if (Math.max(...starList) === mostStars) {
				mostStarsIndex = starList.indexOf(Math.max(...starList));
				tie.push(mostStarsIndex);
				starList[mostStarsIndex] = -1;
			} else {
				tieFound = false;
			}
		}

		if (tie.length === 1) {
			rankList[tie[0]] = currRank;
			currRank++;
			tie.splice(0, 1);
		}

		// Break ties in stars via coins
		while (tie.length > 0) {
			let secondIndex = breakTie(tie, coinList, currRank, game);

			if (typeof secondIndex === 'number') {
				rankList[secondIndex] = currRank;
				tie.splice(tie.indexOf(secondIndex), 1);
				currRank++;
			} else {
				let tieLength = secondIndex.length;

				for (let rankTie of secondIndex) {
					rankList[rankTie] = currRank;
					tie.splice(tie.indexOf(rankTie), 1);
				}

				currRank += tieLength;
			}
		}
	}

	return rankList;
}

function breakTie(tieList, ogCoinList, rank, game) {
	let coinTie = [];
	let coinList = [...ogCoinList];

	for (let i = 0; i < 4; i++) {
		if (tieList.includes(i)) {
			coinList[i] = ogCoinList[i];
		} else {
			coinList[i] = -1;
		}
	}

	let mostCoinsIndex = coinList.indexOf(Math.max(...coinList));
	let mostCoins = Math.max(...coinList);
	coinTie.push(mostCoinsIndex);
	coinList[mostCoinsIndex] = -1;
	let coinTieFound = true;

	while (coinTieFound) {
		if (Math.max(...coinList) === mostCoins) {
			mostCoinsIndex = coinList.indexOf(Math.max(...coinList));
			coinTie.push(mostCoinsIndex);
			coinList[mostCoinsIndex] = -1;
		} else {
			coinTieFound = false;
		}
	}

	if (coinTie.length > 1) {
		return coinTie;
	} else {
		return mostCoinsIndex;
	}
}