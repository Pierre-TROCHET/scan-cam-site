// Le prix de l'abonnement, pays par pays — celui qu'Apple facture vraiment.
//
// Le site a une page par LANGUE, mais Apple vend par PAYS : la page anglaise est
// lue aux États-Unis, au Royaume-Uni, en Australie, et chacun paie dans sa
// monnaie. Une page ne peut donc pas écrire un seul prix.
//
// Ce qui se passe :
//  — la page porte, écrit en dur, le prix du pays principal de sa langue
//    (France, États-Unis, Espagne, Allemagne, Japon, Chine). C'est ce que voit
//    un navigateur sans JavaScript ;
//  — elle embarque aussi le tableau des 175 pays. Le téléphone du visiteur
//    annonce son pays dans ses réglages de langue (« en-GB », « es-MX ») : la
//    page y prend le prix correspondant. Rien ne sort du téléphone, aucun
//    service extérieur n'est appelé — la règle du site tient.
//
// Le tableau, `textes/prix.json`, se relit chez Apple depuis l'application :
//
//     cd ../cam-scan
//     node scripts/fiches-prix.js --json ../scan-cam-site/textes/prix.json
//
// puis `node build.js`. À refaire à chaque changement de prix dans App Store Connect.
const PAYS = require('./pays');

/**
 * Le montant tel qu'on l'écrit dans la langue de la page, dans la monnaie du
 * pays. Cette fonction est AUSSI recopiée telle quelle dans la page (par
 * `toString`) : le prix écrit en dur et le prix recalculé sur le téléphone
 * sortent donc du même calcul.
 */
function formaterPrix(montant, devise, langue, region) {
  var n = Number(montant);
  var decimales = n % 1 ? 2 : 0;
  try {
    return new Intl.NumberFormat(langue + '-' + region, {
      style: 'currency',
      currency: devise,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: decimales,
      maximumFractionDigits: decimales,
    }).format(n);
  } catch (e) {
    return n.toFixed(decimales) + ' ' + devise;
  }
}

/** Le nom du pays, dans la langue de la page. */
function nomDuPays(langue, region) {
  try {
    return new Intl.DisplayNames([langue], { type: 'region' }).of(region) || region;
  } catch (e) {
    return region;
  }
}

/** Le relevé d'Apple, réduit à { FR: [24.99, 'EUR'], US: [22.99, 'USD'], … }. */
function lireTableau() {
  const releve = require('./textes/prix.json');
  const abonnements = Object.values(releve);
  if (abonnements.length !== 1) {
    throw new Error(`textes/prix.json contient ${abonnements.length} abonnements ; le site n'en annonce qu'un.`);
  }
  const tableau = {};
  for (const [trois, x] of Object.entries(abonnements[0])) {
    const deux = PAYS[trois];
    if (!deux) throw new Error(`Pays « ${trois} » absent de pays.js : ajoutez son code à deux lettres.`);
    tableau[deux] = [Number(x.montant), x.devise];
  }
  return tableau;
}

module.exports = { formaterPrix, nomDuPays, lireTableau };
