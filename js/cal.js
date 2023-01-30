// cbmcalculator = {};
// cbmcalculator.cbmUnit = 1;
// cbmcalculator.cbmcalculator_token = '';
// cbmcalculator.apikey = 'put your api key here';

// cbmcalculator.calculateCBM = function () {
//     var xhr = new XMLHttpRequest();

//     try {
//         xhr.open('POST', 'https://www.cbmcalculator.com/api/CBMCalculator.svc/calculate', true);
//         xhr.onload = function () {
//             if (xhr.readyState == 4 && xhr.status == 200) {
//                 var retValue = JSON.parse(xhr.responseText);

//                 if (retValue.status == 'success') {
//                     cbmcalculator_token = retValue.token;
//                     if (retValue.cftotal == 0) {
//                         cbmcalculator.ge("txtfeetvolume").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtfeetvolume").value = retValue.cftotal;
//                     }
//                     if (retValue.cmtotal == 0) {
//                         cbmcalculator.ge("txtmetervolume").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtmetervolume").value = retValue.cmtotal;
//                     }

//                     if (retValue.kgweightvolume == 0) {
//                         cbmcalculator.ge("txtkgweight").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtkgweight").value = retValue.kgweight;
//                     }

//                     if (retValue.kgweightvolume == 0) {
//                         cbmcalculator.ge("txtkgvolweight").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtkgvolweight").value = retValue.kgweightvolume;
//                     }

//                     if (retValue.kgweightvolumeair == 0) {
//                         cbmcalculator.ge("txtkgvolweightair").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtkgvolweightair").value = retValue.kgweightvolumeair;
//                     }

//                     if (retValue.lbweight == 0) {
//                         cbmcalculator.ge("txtlbweight").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtlbweight").value = retValue.lbweight;
//                     }

//                     if (retValue.lbweightvolume == 0) {
//                         cbmcalculator.ge("txtlbvolweight").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtlbvolweight").value = retValue.lbweightvolume;
//                     }

//                     if (retValue.lbweightvolumeair == 0) {
//                         cbmcalculator.ge("txtlbvolweightair").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txtlbvolweightair").value = retValue.lbweightvolumeair;
//                     }

//                     if (retValue.con20 <= 0) {
//                         cbmcalculator.ge("txt20").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txt20").value = retValue.con20;
//                     }


//                     if (retValue.con40 <= 0) {
//                         cbmcalculator.ge("txt40").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txt40").value = retValue.con40;
//                     }

//                     if (retValue.con40hc <= 0) {
//                         cbmcalculator.ge("txt40hc").value = '';
//                     }
//                     else {
//                         cbmcalculator.ge("txt40hc").value = retValue.con40hc;
//                     }
//                 }
//                 else {
//                     write_output('calculate function failed with message : ' + retValue.description);
//                 }
//             }
//             else {
//                 //clear
//                 write_output('Unable to prform calculation contact cbmcalculator.com');
//             }
//         }
//         xhr.onerror = function () {
//             write_output('Unable to prform calculation contact cbmcalculator.com');
//         }

//         //read values for passing to function

//         var locallength = (cbmcalculator.ge("txtl").value) ? parseFloat(cbmcalculator.ge("txtl").value) : 0;
//         var localwidth = (cbmcalculator.ge("txtw").value) ? parseFloat(cbmcalculator.ge("txtw").value) : 0;
//         var localheight = (cbmcalculator.ge("txth").value) ? parseFloat(cbmcalculator.ge("txth").value) : 0;
//         var localqty = (cbmcalculator.ge("txtcartonqty").value) ? parseFloat(cbmcalculator.ge("txtcartonqty").value) : 1;
//         var localweight = (cbmcalculator.ge("txtcartongw").value) ? parseFloat(cbmcalculator.ge("txtcartongw").value) : 0;
//         var duom = cbmcalculator.ge('duom').value;
//         var wuom = cbmcalculator.ge('wuom').value;
        

//         if (locallength != 0 && localwidth != 0 && localheight != 0) {
//             var data = new Object();
//             //data.passInfo = new Object();
//             data.length = locallength;
//             data.width = localwidth;
//             data.height = localheight;
//             data.quantity = localqty;
//             data.weight = localweight;
//             data.uom = duom;
//             data.wuom = wuom;
//             data.apikey = cbmcalculator.apikey;
//             data.token = cbmcalculator.cbmcalculator_token;

//             xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
//             xhr.send(JSON.stringify(data));
//         }
//     }
//     catch (e) {
//         //clear
        
//     }
// };

// cbmcalculator.ge = function (c) {
//     return document.getElementById(c)
// }
// function write_output(passMsg) {

//     cbmcalculator.ge('erroutput') ? cbmcalculator.ge('erroutput').innerHTML = passMsg : console.log(passMsg);
// }

cbmcalculator.calculateCBM = function () {
    alert('tttt')
}