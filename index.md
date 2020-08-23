---
layout: page
title: Simulateur capacité emprunt / mensualité
---
<div class="container-fluid">
<div class="row">
<div class="col">
<h2>Paramètres</h2>
<form>
<div class="form-group range-wrap">
<label for="formRate">Taux du prêt</label>
<input type="range" class="form-control-range" id="formRate" min="0" max="2" step="0.1">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formDuration">Durée du prêt</label>
<input type="range" class="form-control-range" id="formDuration" min="5" max="20" step="1">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formAssurRate">Taux assurance prết</label>
<input type="range" class="form-control-range" id="formAssurRate" min="0" max="1" step="0.1">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formVente">Montant vente</label>
<input type="range" class="form-control-range" id="formVente" min="750000" max="900000" step="5000">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formRachat">Montant rachat prêt</label>
<input type="range" class="form-control-range" id="formRachat" min="370000" max="470000" step="5000">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formVoitures">Montant achat voitures</label>
<input type="range" class="form-control-range" id="formVoitures" min="50000" max="100000" step="1000">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formAssurVoitures">Mensualité assurances voitures</label>
<input type="range" class="form-control-range" id="formAssurVoitures" min="50" max="200" step="10">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formAchat">Montant achat (sans frais de notaire)</label>
<input type="range" class="form-control-range" id="formAchat" min="400000" max="650000" step="5000">
<output class="bubble"></output>
</div>

<div class="form-group range-wrap">
<label for="formApport">Apport</label>
<input type="range" class="form-control-range" id="formApport" min="0" max="100000" step="5000">
<output class="bubble"></output>
</div>

</form>
</div>
<div class="col">
<h2>Résultat</h2>
<table class="table">
<tr><td>Montant à emprunter</td><td><span id="montant"></span></td></tr>
<tr>
<td>Mensualité emprunt</td><td><span id="result"></span></td>
</tr>
<tr><td>Mensualité assurance</td><td><span id="monthAssur"></span></td></tr>
<tr id="trTotal"><td>Mensualité totale</td><td><span id="total"></span></td></tr>
<tr><td>Coût du prêt (hors assurance)</td><td><span id="cost"></span></td></tr>
</table>

</div>
</div>
</div>
