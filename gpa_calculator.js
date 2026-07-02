// Helper function to get float value from input, defaulting to 0.0 if empty
function getVal(id) {
    let val = parseFloat(document.getElementById(id).value);
    return isNaN(val) ? 0.0 : val;
}

function calculateGPA() {
    // PSUP
    let psup_internal = getVal('psup_int');
    let psup_lab = getVal('psup_lab');
    let psup_sem = getVal('psup_sem');

    // TEC
    let tec_internal = getVal('tec_int');
    let tec_lab = getVal('tec_lab');
    let tec_sem = getVal('tec_sem');

    // EP
    let ep_internal = getVal('ep_int');
    let ep_lab = getVal('ep_lab');
    let ep_sem = getVal('ep_sem');

    // EGD
    let egd_internal = getVal('egd_int');
    let egd_lab = getVal('egd_lab');

    // ES
    let es_internal = getVal('es_int');
    let es_lab = getVal('es_lab');

    // CS
    let cs_internal = getVal('cs_int');
    let cs_lab = getVal('cs_lab');

    // CODE
    let code_internal = getVal('code_int');
    let code_sem = getVal('code_sem');

    // Your calculations exactly translated from Python
    let psup_grade = (psup_internal + (psup_lab * (16/40)) + (psup_sem * (24/60)));
    let tec_grade = (tec_internal + (tec_lab * (16/40)) + (tec_sem * (24/60)));
    let ep_grade = (ep_internal + (ep_lab * (16/40)) + (ep_sem * (24/60)));
    let egd_grade = (egd_internal + egd_lab);
    let es_grade = (es_internal + es_lab);
    let cs_grade = (cs_internal + cs_lab);
    let code_grade = (code_internal + (code_sem * 40/60));

    let final_grade = (4*(ep_grade + code_grade)) + (3*(psup_grade + es_grade + egd_grade)) + (2*(tec_grade)) + (1*(cs_grade));

    // Display results, formatting to 2 decimal places for neatness
    document.getElementById('res_psup').innerText = psup_grade.toFixed(2);
    document.getElementById('res_tec').innerText = tec_grade.toFixed(2);
    document.getElementById('res_ep').innerText = ep_grade.toFixed(2);
    document.getElementById('res_egd').innerText = egd_grade.toFixed(2);
    document.getElementById('res_es').innerText = es_grade.toFixed(2);
    document.getElementById('res_cs').innerText = cs_grade.toFixed(2);
    document.getElementById('res_code').innerText = code_grade.toFixed(2);
    document.getElementById('res_final').innerText = final_grade.toFixed(2);

    // Show the results section with a nice fade in
    document.getElementById('results-section').style.display = 'block';
    
    // Scroll down to results smoothly
    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
