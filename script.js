function showModal(type) {
    const modal = document.getElementById(`${type}Modal`);
    modal.classList.add('active');
}

function hideModal(type) {
    const modal = document.getElementById(`${type}Modal`);
    modal.classList.remove('active');
}

function switchModal(from, to) {
    hideModal(from);
    setTimeout(() => showModal(to), 100);
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});