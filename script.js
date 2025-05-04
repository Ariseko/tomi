function switchScreen(hideId, showId) {
    document.getElementById(hideId).classList.remove('active');
    setTimeout(() => {
        document.getElementById(hideId).style.display = 'none';
        const next = document.getElementById(showId);
        next.style.display = 'block';
        setTimeout(() => {
            next.classList.add('active');
        }, 20);
    }, 300);
}

function startTest() {
    switchScreen('startScreen', 'q1');
}

function nextQuestion(current) {
    const checkboxes = document.querySelectorAll(`input[name="q${current}"]:checked`);
    if (checkboxes.length === 0) {
        alert("Пожалуйста, выберите хотя бы один вариант.");
        return;
    }
    switchScreen('q' + current, 'q' + (current + 1));
}

function showResult() {
    const checkboxes = document.querySelectorAll(`input[name="q4"]:checked`);
    if (checkboxes.length === 0) {
        alert("Пожалуйста, выберите хотя бы один вариант.");
        return;
    }

    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `
      <div class="result-celebration">🎉 Дорогой брат, ты успешно прошел тест! 🎉</div>
      <p style="margin-top: 20px;">
        Мы поздравляем тебя с твоим праздником и приглашаем<br>
        <strong>09.05.25 в 15:00</strong><br>
        по адресу <strong>М. Габдуллина 3</strong>
      </p>
    `;
    switchScreen('q4', 'result');
    launchConfetti();
}

function launchConfetti() {
    const container = document.getElementById('confettiContainer');
    container.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
        container.appendChild(confetti);
    }
}