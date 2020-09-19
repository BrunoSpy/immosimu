
$(document).ready(function() {

    //default values
    $("#formRate").val("1.1");
    $("#formAssurRate").val("0.3");
    $("#formAssurVoitures").val("120");
    $("#formVoitures").val("60000");
    $("#formRachat").val("460000");
    $("#formApport").val("20000");
    $("#formDuration").val("15");

    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach(wrap => {
        const range = wrap.querySelector(".form-control-range");
        const bubble = wrap.querySelector(".bubble");

        range.addEventListener("input", () => {
            setBubble(range, bubble);
            compute();
        });
        setBubble(range, bubble);
        compute();
    });

    function setBubble(range, bubble) {
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;

        // Sorta magic numbers based on size of the native UI thumb
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }

    function compute() {
            let rate = parseFloat($("#formRate").val());
            let assurRate = parseFloat($("#formAssurRate").val());
            let vente = parseFloat($("#formVente").val());
            let rachat = parseFloat($("#formRachat").val());
            let voitures = parseFloat($("#formVoitures").val());
            let assurVoitures = parseFloat($("#formAssurVoitures").val());
            let achat = parseFloat($("#formAchat").val());
            let apport = parseFloat($("#formApport").val());
            let duration = parseFloat($("#formDuration").val());

            //frais de notaires : ~7% + 5000 caution et dossier
            let achatNet = achat * 1.07 + 5000;

            let montantEmprunt = achatNet - (vente - rachat) + voitures - apport;

            let t = rate/100;

            //sur 15 ans
            let mensualite = (montantEmprunt * t/12)/(1 - Math.pow(1+t/12, -12 * duration));

            let cost = 12 * duration * mensualite - montantEmprunt;

            let mensualiteAssur = (montantEmprunt * assurRate/100)/12;

            $("#cost").text(cost.toFixed(0));

            $("#montant").text(montantEmprunt.toFixed(0));

            $("#result").text(mensualite.toFixed(0));

            $("#monthAssur").text(mensualiteAssur.toFixed(0));

            if(mensualite+mensualiteAssur+assurVoitures > 2400) {
                $("#trTotal").removeClass("bg-success").addClass("bg-danger text-white ");
            } else {
                $("#trTotal").addClass("bg-success").removeClass("bg-danger text-white ");
            }

            $("#total").text((mensualite+mensualiteAssur+assurVoitures).toFixed(0));

    }


});
