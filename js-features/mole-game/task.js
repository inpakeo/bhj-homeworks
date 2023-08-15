document.addEventListener('DOMContentLoaded', () => {
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
        hole.addEventListener('click', () => {
            if (hole.classList.contains('hole_has-mole')) {
                deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
            } else {
                lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
            }

            if (parseInt(deadCounter.textContent) === 10) {
                alert('Победа!');
                resetCounters();
            } else if (parseInt(lostCounter.textContent) === 5) {
                alert('Вы проиграли!');
                resetCounters();
            }
        });
    }

    function resetCounters() {
        deadCounter.textContent = '0';
        lostCounter.textContent = '0';
    }
});