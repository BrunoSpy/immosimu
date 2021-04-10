---
layout: page
title: Simulateur capacité emprunt / mensualité
---
<div class="container-fluid">
<div class="row">
<div class="col">

<form>

<div class="card">
<div class="card-body">
<div class="form-group range-wrap">
<label for="formAchat">Montant achat (sans frais de notaire)</label>
<input type="range" class="form-control-range" id="formAchat" min="200000" max="1000000" step="1000">
<output class="bubble" data-trailing="€"></output>
</div>
<div class="form-group range-wrap">
<label for="formAchat">Cautionnement</label>
<input type="range" class="form-control-range" id="formCaution" min="0000" max="15000" step="500">
<output class="bubble" data-trailing="€"></output>
</div>

<div class="form-group range-wrap">
<label for="formApport">Apport</label>
<input type="range" class="form-control-range" id="formApport" min="0" max="200000" step="5000">
<output class="bubble" data-trailing="€"></output>
</div>
</div>
</div>

<div class="card mt-3">
<div class="card-header">
Paramètres du prêt
</div>
<div class="card-body">
<div class="form-group range-wrap">
<label for="formRate">Taux du prêt</label>
<input type="range" class="form-control-range" id="formRate" min="0" max="2" step="0.01">
<output class="bubble" data-trailing="%"></output>
</div>

<div class="form-group range-wrap">
<label for="formDuration">Durée du prêt</label>
<input type="range" class="form-control-range" id="formDuration" min="5" max="25" step="1">
<output class="bubble" data-trailing="ans"></output>
</div>

<div class="form-group range-wrap">
<label for="formAssurRate">Taux assurance prêt<sup>1</sup></label>
<input type="range" class="form-control-range" id="formAssurRate" min="0" max="1" step="0.05">
<output class="bubble" data-trailing="%"></output>
</div>
</div>
</div>

<div class="card mt-3">
<div class="card-header">
Vente d'un bien
</div>
<div class="card-body">
<div class="form-group range-wrap">
<label for="formVente">Montant vente</label>
<input type="range" class="form-control-range" id="formVente" min="0000" max="900000" step="5000">
<output class="bubble" data-trailing="€"></output>
</div>

<div class="form-group range-wrap">
<label for="formRachat">Montant rachat prêt</label>
<input type="range" class="form-control-range" id="formRachat" min="0000" max="500000" step="1000">
<output class="bubble" data-trailing="€"></output>
</div>

<div class="form-group range-wrap">
<label for="formVoitures">Montant de la vente non réinvesti</label>
<input type="range" class="form-control-range" id="formVoitures" min="0" max="100000" step="100">
<output class="bubble" data-trailing="€"></output>
</div>
</div>
</div>

</form>
</div>
<div class="col">
<div class="row">
<h2>Résultat</h2>
<table class="table">
  <tr><td>Montant à emprunter</td><td><span id="montant"></span></td></tr>
  <tr><td>Mensualité emprunt</td><td><span id="result"></span></td></tr>
  <tr><td>Mensualité assurance</td><td><span id="monthAssur"></span></td></tr>
  <tr id="trTotal"><td>Mensualité totale</td><td><span id="total"></span></td></tr>
  <tr><td>Coût du prêt (hors assurance)</td><td><span id="cost"></span></td></tr>
  <tr><td>Coût assurance du prêt</td><td><span id="totalAssur"></span></td></tr>
  <tr><td>Apport total</td><td><span id="apporttotal"></span></td></tr>
</table>
</div>
<div class="row">
<h2>Explications</h2>
<ul>
<li>Montant à emprunter = Montant à financer - apport</li>
<li>Montant à financer = Montant achat + frais de notaires + cautionnement + frais de dossier</li>
<li>Apport = Montant de la vente + Apport - Montant non réinvesti - Rachat des prêts</li>
<li>Pour simplifier, les frais de notaires sont évalués à 7%.</li>
</ul>
</div>
</div>
</div>
<p><sup>1</sup> : Taux moyen d'assurance annuel en pourcentage du capital initial assuré</p>
</div>
