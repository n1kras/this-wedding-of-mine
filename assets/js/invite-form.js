const form = document.getElementById("invite-form");
const donationSelect = document.getElementById("donation");
const pixSection = document.getElementById("pix-section");
const formMessage = document.getElementById("form-message");

function updateDonationUI() {
    const choseDonation = donationSelect.value === "other";
    pixSection.classList.toggle("hidden", !choseDonation);
}

function showMessage(text, type = "error") {
    formMessage.textContent = text;
    formMessage.classList.remove("hidden", "bg-red-100", "text-red-700", "bg-green-100", "text-green-700");

    if (type === "success") {
        formMessage.classList.add("bg-green-100", "text-green-700");
    } else {
        formMessage.classList.add("bg-red-100", "text-red-700");
    }
}

function getSelectedPresenca() {
    const checked = document.querySelector('input[name="presenca"]:checked');
    return checked ? checked.value : null;
}

donationSelect.addEventListener("change", updateDonationUI);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const presenca = getSelectedPresenca();
    const querDoar = donationSelect.value === "other";

    if (!presenca) {
        showMessage("Por favor, selecione se você irá ao casamento.", "error");
        return;
    }

    // Front-end only: simulação de envio
    console.log("Dados do formulário:", {
        presenca,
        querDoar,
    });

    showMessage("Confirmação enviada com sucesso! Obrigado 💖", "success");
    form.reset();
    updateDonationUI();
});

updateDonationUI();